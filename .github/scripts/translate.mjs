// .github/scripts/translate.mjs
//
// Reads the list of changed rules/en/*.md files (newline-separated) from the
// CHANGED_FILES environment variable, translates each one into every target
// language with the Gemini API, and writes the result to the matching
// rules/<lang>/ folder.

import fs from "node:fs";
import path from "node:path";
import { GoogleGenAI } from "@google/genai";

const TARGET_LANGUAGES = [
  "es", "fr", "it", "el", "zh-CN", "ar", "fa", "ur", "he", "ps", "ku", "dv",
  "hi", "ja", "ko", "tr", "vi", "ru", "uk", "hr", "sr", "bs", "sq", "mk", "sl",
  "tl",
];

// gemini-2.5-pro has a 0-request free-tier quota, so default to the flash
// model (which the free tier does support) unless overridden via env var.
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

// Max attempts (including the first try) per language before giving up and
// logging a final failure.
const MAX_ATTEMPTS = 4;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Pulls an HTTP-ish status code out of a Gemini API error, regardless of
 * whether the SDK surfaced it as a numeric `.status`/`.code` property or
 * only as a JSON blob embedded in `error.message` (which is what
 * @google/genai currently does, e.g. `{"error":{"code":503,...}}`).
 */
function getErrorStatusCode(error) {
  if (typeof error?.status === "number") return error.status;
  if (typeof error?.code === "number") return error.code;

  const message = String(error?.message || "");
  const match = message.match(/"code"\s*:\s*(\d{3})/);
  if (match) return Number(match[1]);

  if (/RESOURCE_EXHAUSTED/i.test(message)) return 429;
  if (/UNAVAILABLE/i.test(message)) return 503;

  return null;
}

const SYSTEM_INSTRUCTION =
  "You are an expert TTRPG translator specializing in complex tabletop rules. " +
  "Translate the following markdown text into the target language code provided. " +
  "Retain all original Markdown formatting, headers, bolding, table structures, " +
  "and relative file links exactly as they are written. Do not add conversational " +
  "commentary or meta-text.";

/**
 * Replaces fenced code blocks and inline code spans with stable placeholder
 * tokens before sending text to the model, so the translator can't rephrase
 * or "helpfully" edit dice notation, stat blocks, or code samples. The
 * placeholders are plain, ASCII, punctuation-light tokens that survive
 * translation into any target language and are unlikely to collide with
 * real markdown content.
 */
function protectCodeBlocks(markdown) {
  const placeholders = [];
  let counter = 0;

  const withProtectedFences = markdown.replace(/```[\s\S]*?```/g, (match) => {
    const token = `[[CODEBLOCK${counter}]]`;
    placeholders.push({ token, value: match });
    counter += 1;
    return token;
  });

  const withProtectedInline = withProtectedFences.replace(/`[^`\n]+`/g, (match) => {
    const token = `[[INLINECODE${counter}]]`;
    placeholders.push({ token, value: match });
    counter += 1;
    return token;
  });

  return { protectedText: withProtectedInline, placeholders };
}

/** Swaps the placeholder tokens back out for the original, untranslated code. */
function restoreCodeBlocks(translatedText, placeholders) {
  let restored = translatedText;
  for (const { token, value } of placeholders) {
    restored = restored.split(token).join(value);
  }
  return restored;
}

function targetPathFor(englishPath, lang) {
  return englishPath.replace("rules/en/", `rules/${lang}/`);
}

async function translateOne(ai, protectedText, lang) {
  const prompt = `Target language code: ${lang}\n\n${protectedText}`;

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  const text = response.text;
  if (!text || !text.trim()) {
    throw new Error("Empty response from Gemini API");
  }

  return text;
}

/**
 * Calls translateOne with bounded exponential backoff + jitter, so
 * transient Google server overloads (503 UNAVAILABLE) or brief 429 rate
 * spikes self-heal instead of failing the whole language immediately.
 * Non-retryable errors (anything other than 429/503) fail fast.
 */
async function translateWithRetry(ai, protectedText, lang) {
  let lastError;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    try {
      return await translateOne(ai, protectedText, lang);
    } catch (error) {
      lastError = error;
      const statusCode = getErrorStatusCode(error);
      const isRetryable = statusCode === 503 || statusCode === 429;
      const isLastAttempt = attempt === MAX_ATTEMPTS - 1;

      if (!isRetryable || isLastAttempt) {
        throw error;
      }

      const backoffMs = 2 ** attempt * 1000;
      const jitterMs = 100 + Math.random() * 400; // 100-500ms
      const delayMs = backoffMs + jitterMs;

      console.warn(
        `Retryable error (status ${statusCode}) translating into "${lang}" ` +
        `(attempt ${attempt + 1}/${MAX_ATTEMPTS}). Retrying in ${Math.round(delayMs)}ms...`
      );
      await sleep(delayMs);
    }
  }

  // Unreachable, but keeps TypeScript/linters happy about a return path.
  throw lastError;
}

async function translateFile(ai, englishPath) {
  const englishContent = fs.readFileSync(englishPath, "utf8");
  const { protectedText, placeholders } = protectCodeBlocks(englishContent);

  // Skip languages that already have a translated file, unless the caller
  // explicitly asks to redo them. This lets a manual "translate everything"
  // backfill run pick up only what's actually missing (e.g. because an
  // earlier run hit a rate limit or quota error) instead of burning API
  // quota re-translating files that already succeeded.
  const forceRetranslate = process.env.FORCE_RETRANSLATE === "true";

  for (const lang of TARGET_LANGUAGES) {
    const targetPath = targetPathFor(englishPath, lang);

    if (!forceRetranslate && fs.existsSync(targetPath)) {
      console.log(`Skipping ${targetPath} (already translated; set FORCE_RETRANSLATE=true to redo).`);
      continue;
    }

    try {
      const translatedText = await translateWithRetry(ai, protectedText, lang);
      const restoredText = restoreCodeBlocks(translatedText, placeholders);

      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.writeFileSync(targetPath, restoredText, "utf8");
      console.log(`Translated ${englishPath} -> ${targetPath}`);
    } catch (error) {
      // A single language failing after all retries (rate limit, transient
      // API error, etc.) should not stop the rest of the languages/files
      // from being processed.
      console.error(`Failed to translate ${englishPath} into "${lang}" after ${MAX_ATTEMPTS} attempts: ${error.message}`);
    }
  }
}

async function main() {
  const changedFilesRaw = process.env.CHANGED_FILES || "";
  const changedFiles = changedFilesRaw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (changedFiles.length === 0) {
    console.log("No changed English markdown files were provided. Exiting.");
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set.");
  }

  const ai = new GoogleGenAI({ apiKey });

  for (const file of changedFiles) {
    if (!file.startsWith("rules/en/") || !file.endsWith(".md")) {
      console.log(`Skipping ${file} (not an English rules markdown file).`);
      continue;
    }

    if (!fs.existsSync(file)) {
      console.log(`Skipping ${file} (file no longer exists on disk).`);
      continue;
    }

    console.log(`Translating ${file} into ${TARGET_LANGUAGES.length} languages...`);
    await translateFile(ai, file);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
