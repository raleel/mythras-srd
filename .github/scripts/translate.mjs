// .github/scripts/translate.mjs
//
// Reads the list of changed rules/en/*.md files (newline-separated) from the
// CHANGED_FILES environment variable, translates each one into every target
// language with the Gemini API, and writes the result to the matching
// rules/<lang>/ folder.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { GoogleGenAI } from "@google/genai";

const TARGET_LANGUAGES = [
  "es", "fr", "it", "el", "zh-CN", "ar", "fa", "ur", "he", "ps", "ku", "dv",
  "hi", "ja", "ko", "tr", "vi", "ru", "uk", "hr", "sr", "bs", "sq", "mk", "sl",
  "tl", "bg", "bn", "te", "mr", "ta", "sw", "ha", "ms", "th", "my", "pt",
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

// Structural "site frame" files that Docsify needs to render navigation and
// the landing page in every language. These are prioritized ahead of
// regular numbered content files (see sortByTranslationPriority) so that if
// a run is interrupted partway through (rate limits, cancellation, quota),
// every language that got ANY translation at all still has a working
// sidebar/navbar/home page rather than a half-translated site with a blank
// frame.
const STRUCTURAL_FILENAMES = ["README.md", "_sidebar.md", "_navbar.md"];

function structuralPriority(filePath) {
  const index = STRUCTURAL_FILENAMES.indexOf(path.basename(filePath));
  return index === -1 ? STRUCTURAL_FILENAMES.length : index;
}

/**
 * Sorts changed files so README.md, _sidebar.md, and _navbar.md always
 * translate first (in that order), before the numbered content files.
 * Non-structural files keep their existing relative order.
 */
function sortByTranslationPriority(files) {
  return [...files].sort((a, b) => structuralPriority(a) - structuralPriority(b));
}

function targetPathFor(englishPath, lang) {
  return englishPath.replace("rules/en/", `rules/${lang}/`);
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" });
}

/**
 * Lists every rules/en/*.md file, independent of what changed recently.
 * Used to bypass the git-diff-based CHANGED_FILES filter when a full
 * backfill is needed (see needsFullBackfill below). Prefers `git
 * ls-files` (fast, respects the repo's actual tracked file list even if
 * something is untracked/ignored), falling back to a plain directory
 * scan if git isn't available for some reason.
 */
function getAllEnglishFiles() {
  try {
    return git(["ls-files", "rules/en/*.md"])
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  } catch (error) {
    console.error(`git ls-files failed, falling back to a filesystem scan: ${error.message}`);
    return fs
      .readdirSync("rules/en")
      .filter((name) => name.endsWith(".md"))
      .map((name) => `rules/en/${name}`);
  }
}

/**
 * True if a target language's rules/<lang>/ directory doesn't exist yet,
 * or exists but has no markdown files in it (e.g. only a placeholder file
 * used to reserve the folder). Either way, that language has never
 * actually been translated, so a normal git-diff-scoped run (which only
 * covers whatever English files happened to change most recently) would
 * leave most of its content missing indefinitely.
 */
function languageNeedsFullBackfill(lang) {
  const dir = path.join("rules", lang);
  if (!fs.existsSync(dir)) return true;
  return !fs.readdirSync(dir).some((name) => name.endsWith(".md"));
}

/** True when this run was triggered manually via workflow_dispatch. */
function isManualRun() {
  return process.env.GITHUB_EVENT_NAME === "workflow_dispatch";
}

function configureGitIdentity() {
  try {
    git(["config", "user.name", "github-actions[bot]"]);
    git(["config", "user.email", "github-actions[bot]@users.noreply.github.com"]);
  } catch (error) {
    console.error(`Failed to configure git identity: ${error.message}`);
  }
}

/**
 * Commits and pushes whatever has been translated so far for one English
 * file, immediately after that file's language loop finishes. This is the
 * key fix for preserving progress: a single file/language failure (or the
 * job later timing out, being cancelled, or hitting a rate limit on a
 * *different* file) no longer wipes out everything translated up to that
 * point, since each file's results are safely on origin before we move on
 * to the next one.
 */
function commitAndPushProgress(englishPath) {
  try {
    git(["add", "rules/"]);
  } catch (error) {
    console.error(`git add failed for ${englishPath}: ${error.message}`);
    return;
  }

  let staged;
  try {
    staged = git(["diff", "--cached", "--name-only"]).trim();
  } catch (error) {
    console.error(`git diff failed for ${englishPath}: ${error.message}`);
    return;
  }

  if (!staged) {
    console.log(`No translation changes to commit for ${englishPath}.`);
    return;
  }

  try {
    git(["commit", "-m", `chore: auto-translate ${englishPath}`]);
  } catch (error) {
    console.error(`git commit failed for ${englishPath}: ${error.message}`);
    return;
  }

  const branch = process.env.GITHUB_REF_NAME;
  if (!branch) {
    console.error(
      `GITHUB_REF_NAME is not set; the commit for ${englishPath} is saved ` +
      "locally but was not pushed."
    );
    return;
  }

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      git(["push", "origin", `HEAD:${branch}`]);
      console.log(`Committed and pushed translations for ${englishPath}.`);
      return;
    } catch (error) {
      console.error(`git push failed for ${englishPath} (attempt ${attempt + 1}/2): ${error.message}`);

      // The branch may have moved (e.g. another commit landed on it while
      // this long-running job was translating). Rebase once and retry.
      if (attempt === 0) {
        try {
          git(["pull", "--rebase", "origin", branch]);
        } catch (pullError) {
          console.error(`git pull --rebase failed for ${englishPath}: ${pullError.message}`);
          break;
        }
      }
    }
  }

  console.error(
    `Giving up pushing translations for ${englishPath} after retrying; ` +
    "progress is committed locally but not pushed to origin."
  );
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

  // Normally we only process whatever CHANGED_FILES (the git-diff-scoped
  // list from the workflow) hands us. But that list only reflects recent
  // English edits -- it has no idea a target language was just added and
  // has never been translated at all. So: if any target language still
  // needs a full backfill (missing/empty rules/<lang>/ folder), or this
  // run was triggered manually, bypass the diff filter and fall back to
  // every rules/en/*.md file. translateFile's existing "skip if already
  // translated" check means this costs nothing for languages/files that
  // are already up to date -- it only actually translates what's missing.
  const languagesNeedingBackfill = TARGET_LANGUAGES.filter(languageNeedsFullBackfill);
  const manualRun = isManualRun();

  let filesToProcess = changedFiles;

  if (languagesNeedingBackfill.length > 0 || manualRun) {
    if (languagesNeedingBackfill.length > 0) {
      console.log(
        `Missing/empty rules/<lang>/ folder detected for: ${languagesNeedingBackfill.join(", ")}. ` +
        "Bypassing the git diff filter and processing every rules/en/*.md file so these languages get a full backfill."
      );
    }
    if (manualRun) {
      console.log("Running via workflow_dispatch (manual trigger); bypassing the git diff filter and processing every rules/en/*.md file.");
    }

    const allEnglishFiles = getAllEnglishFiles();
    filesToProcess = Array.from(new Set([...changedFiles, ...allEnglishFiles]));
  }

  if (filesToProcess.length === 0) {
    console.log("No changed English markdown files were provided. Exiting.");
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set.");
  }

  const ai = new GoogleGenAI({ apiKey });

  configureGitIdentity();

  const orderedFiles = sortByTranslationPriority(filesToProcess);

  for (const file of orderedFiles) {
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

    // Commit + push immediately after this file's languages are done, so
    // progress is preserved incrementally instead of all-or-nothing.
    commitAndPushProgress(file);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
