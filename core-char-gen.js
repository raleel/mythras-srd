/* =========================
   Dice
   ========================= */
function roll(dice) {
  dice = dice.toLowerCase().replace(/\s+/g, "");
  const [numStr, rest] = dice.split("d");
  const num = parseInt(numStr, 10);
  let add = 0;
  let sidesStr = rest;
  if (rest.includes("+")) {
    const parts = rest.split("+");
    sidesStr = parts[0];
    add = parseInt(parts[1], 10);
  } else if (rest.includes("-")) {
    const parts = rest.split("-");
    sidesStr = parts[0];
    add = -parseInt(parts[1], 10);
  }
  const sides = parseInt(sidesStr, 10);
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += 1 + Math.floor(Math.random() * sides);
  }
  return total + add;
}

/* =========================
   Data helpers
   ========================= */

function skillRoot(name) {
  const idx = name.indexOf("(");
  return idx === -1 ? name.trim() : name.slice(0, idx).trim();
}

function skillBase(name, chars) {
  const root = skillRoot(name);
  if (root === "Combat Style") {
    // Combat Styles use STR+DEX as their base
    return chars.STR + chars.DEX;
  }
  const formula = SKILL_BASE_FORMULAS[root];
  if (!formula) return 0;
  const [a, b] = formula;
  return chars[a] + chars[b];
}

/* =========================
   Helpers
   ========================= */

function expandSkillChoices(skillList) {
  const finalList = [];

  for (const entry of skillList) {
    if (Array.isArray(entry)) {
      // entry is a [ "Boating", "Ride" ] style choice
      const pick = entry[Math.floor(Math.random() * entry.length)];
      finalList.push(pick);
    } else {
      finalList.push(entry);
    }
  }

  return finalList;
}

function specialiseSkillName(template, cultureName, cache) {
  if (!template.includes("(any)")) return template;
  if (cache[template]) return cache[template];

  const root = skillRoot(template);
  let options = ANY_OPTIONS[root] ? [...ANY_OPTIONS[root]] : [];
  if (root === "Culture") {
    options.push(cultureName);
  }
  let specialised;
  if (!options.length) {
    specialised = template.replace("(any)", "(General)");
  } else {
    const pick = options[Math.floor(Math.random() * options.length)];
    specialised = `${root} (${pick})`;
  }
  cache[template] = specialised;
  return specialised;
}

function ensureSkill(skills, name, chars) {
  if (!skills[name]) {
    let base = skillBase(name, chars);

    // +40% free bonus for native Customs and Native Tongue (core rule)
    if (name === "Customs" || name === "Native Tongue") {
      base += 40;
    }

    skills[name] = {
      base: base,
      culture: 0,
      career: 0,
      bonus: 0,
      total: base,
    };
  }
}

/**
 * Distribute points across skills with an optional per-skill cap and
 * optional bias towards a set of priority skills.
 *
 * @param {string[]} skillNames            Skills eligible for points
 * @param {number} totalPoints             Pool of points to distribute
 * @param {number|null} maxPerSkill        Max points per skill for this stage
 * @param {Object<string,number>} existingStagePoints  Already assigned at this stage
 * @param {string[]} prioritySkills        Skills that should be favoured
 */
function randomPointDistributionCappedStage(
  skillNames,
  totalPoints,
  maxPerSkill,
  existingStagePoints,
  prioritySkills = []
) {
  if (!skillNames.length || totalPoints <= 0) return {};
  const pts = {};
  const existing = existingStagePoints || {};
  let remaining = totalPoints;

  const priorityInThisStage = skillNames.filter((name) => {
  const root = skillRoot(name);
  return prioritySkills.includes(name) || prioritySkills.includes(root);
});

  while (remaining > 0) {
    let placed = false;

    for (let tries = 0; tries < 20 && remaining > 0; tries++) {
      // If we have priority skills in this stage, favour them ~70% of the time
      let pool = skillNames;
      if (priorityInThisStage.length && Math.random() < 0.7) {
        pool = priorityInThisStage;
      }

      const s = pool[Math.floor(Math.random() * pool.length)];
      const current = (existing[s] || 0) + (pts[s] || 0);

      if (maxPerSkill == null || current < maxPerSkill) {
        pts[s] = (pts[s] || 0) + 1;
        remaining -= 1;
        placed = true;
      }
    }

    if (!placed) break; // everything likely capped
  }
  return pts;
}

function applyStagePoints(skills, stagePoints, stageKey, chars) {
  for (const [name, pts] of Object.entries(stagePoints)) {
    if (pts <= 0) continue;
    ensureSkill(skills, name, chars);
    skills[name][stageKey] += pts;
  }
}

function finalizeSkillTotals(skills) {
  for (const rec of Object.values(skills)) {
    rec.total = rec.base + rec.culture + rec.career + rec.bonus;
  }
}

/* =========================
   Characteristics & Attributes
   ========================= */

function generateCharacteristics() {
  return {
    STR: roll("3d6"),
    CON: roll("3d6"),
    SIZ: roll("2d6+6"),
    DEX: roll("3d6"),
    INT: roll("2d6+6"),
    POW: roll("3d6"),
    CHA: roll("3d6"),
  };
}

// Core Mythras AP calculation: based on INT + DEX
function calcActionPoints(intVal, dexVal) {
  const total = intVal + dexVal;
  if (total <= 12) return 1;
  if (total <= 24) return 2;
  if (total <= 36) return 3;
  // Every additional 12 points gives +1 AP
  return 3 + Math.ceil((total - 36) / 12);
}

function calcDamageMod(strVal, sizVal) {
  const total = strVal + sizVal;
  if (total <= 5) return "-1d8";
  if (total <= 10) return "-1d6";
  if (total <= 15) return "-1d4";
  if (total <= 20) return "-1d2";
  if (total <= 25) return "0";
  if (total <= 30) return "+1d2";
  if (total <= 35) return "+1d4";
  if (total <= 40) return "+1d6";
  return "+2d6";
}

function calcHealingRate(conVal) {
  if (conVal <= 6) return 1;
  if (conVal <= 12) return 2;
  if (conVal <= 18) return 3;
  return 4;
}

function calcAttributes(chars) {
  const ap = calcActionPoints(chars.INT, chars.DEX);
  const dmgMod = calcDamageMod(chars.STR, chars.SIZ);
  const healRate = calcHealingRate(chars.CON);
  const initiative = Math.ceil((chars.INT + chars.DEX) / 2);
  const luck = Math.floor((chars.POW - 1) / 6) + 1;
  const move = 6;
  return {
    "Action Points": ap,
    "Damage Mod": dmgMod,
    "Healing Rate": healRate,
    "Initiative": initiative,
    "Luck Points": luck,
    "Magic Points": chars.POW,
    "Movement": move,
  };
}

function calcHitPoints(chars) {
  const total = chars.CON + chars.SIZ;
  let row;
  if (total <= 5) row = 1;
  else if (total <= 10) row = 2;
  else if (total <= 15) row = 3;
  else if (total <= 20) row = 4;
  else if (total <= 25) row = 5;
  else if (total <= 30) row = 6;
  else if (total <= 35) row = 7;
  else row = 8;

  const table = {
    1: [1, 3, 2, 1, 1],
    2: [2, 4, 3, 1, 2],
    3: [3, 5, 4, 2, 3],
    4: [4, 6, 5, 3, 4],
    5: [5, 7, 6, 4, 5],
    6: [6, 8, 7, 5, 6],
    7: [7, 9, 8, 6, 7],
    8: [8, 10, 9, 7, 8],
  };
  const [head, chest, abdomen, arm, leg] = table[row];
  return {
    Head: head,
    Chest: chest,
    Abdomen: abdomen,
    "L Arm": arm,
    "R Arm": arm,
    "L Leg": leg,
    "R Leg": leg,
  };
}

/* =========================
   Character Generation
   ========================= */

function generateRandomMythrasCharacter() {
  const givenNames = ["Arin", "Bera", "Corin", "Dara", "Eldric", "Fara", "Garric", "Hesta"];
  const surnames = ["Stone", "Rivers", "Wolf", "Ironhand", "Bright", "Thorn", "Kestrel", "Storm"];
  const name = `${givenNames[Math.floor(Math.random() * givenNames.length)]} ${
    surnames[Math.floor(Math.random() * surnames.length)]
  }`;
  const genders = ["Male", "Female", "Non-binary"];
  const gender = genders[Math.floor(Math.random() * genders.length)];
  const age = 17 + Math.floor(Math.random() * 11); // 17–27

  const chars = generateCharacteristics();
  const attrs = calcAttributes(chars);
  const hp = calcHitPoints(chars);

  const culture = CULTURES[Math.floor(Math.random() * CULTURES.length)];
  const career = CAREERS[Math.floor(Math.random() * CAREERS.length)];

  const specialCache = {};
  const specialise = (template) => specialiseSkillName(template, culture.name, specialCache);

  const skills = {};

  // Base standard skills
  for (const sname of STANDARD_SKILLS) {
    ensureSkill(skills, sname, chars);
  }

  // Combat styles: one at culture, one at career
  const cultureStyleLabel =
    culture.combat_styles[Math.floor(Math.random() * culture.combat_styles.length)];
  const cultureStyleSkill = `Combat Style (${cultureStyleLabel})`;
  ensureSkill(skills, cultureStyleSkill, chars);

  const careerStyleOptions = [cultureStyleLabel, `${career.name} Style`];
  const careerStyleLabel =
    careerStyleOptions[Math.floor(Math.random() * careerStyleOptions.length)];
  const careerStyleSkill = `Combat Style (${careerStyleLabel})`;
  ensureSkill(skills, careerStyleSkill, chars);

  /* --- Culture stage: min +5 on cultural standard skills,
         3 cultural prof skills, and cultural combat style --- */
  // Expand any choice arrays first (e.g. ["Boating", "Ride"])
  const expandedCultureStd = expandSkillChoices(culture.standard_skills);
  const expandedCultureProf = expandSkillChoices(culture.professional_skills);

  const cultureStdSpecialised = expandedCultureStd.map(specialise);
  const cultureProfAll = expandedCultureProf.map(specialise);

  const shuffledCultureProf = [...cultureProfAll].sort(() => Math.random() - 0.5);
  const pickedCultureProf = shuffledCultureProf.slice(
    0,
    Math.min(3, shuffledCultureProf.length)
  );

  const mandatorySkillsSet = new Set([
    ...cultureStdSpecialised,
    ...pickedCultureProf,
    cultureStyleSkill,
  ]);
  const mandatorySkills = Array.from(mandatorySkillsSet);

  const cultureTotalPool = 100;
  const minPerCulturalSkill = 5;
  const mandatoryPoints = minPerCulturalSkill * mandatorySkills.length;
  const remainingCulture = Math.max(0, cultureTotalPool - mandatoryPoints);

  const cultureStagePoints = {};
  for (const s of mandatorySkills) {
    cultureStagePoints[s] = minPerCulturalSkill;
  }

  const extraCultureSkillList = mandatorySkills;
  const extraCulturePoints = randomPointDistributionCappedStage(
    extraCultureSkillList,
    remainingCulture,
    15,
    cultureStagePoints,
    typeof PRIORITY_SKILLS !== "undefined" ? PRIORITY_SKILLS : []
  );
  for (const [s, pts] of Object.entries(extraCulturePoints)) {
    cultureStagePoints[s] = (cultureStagePoints[s] || 0) + pts;
  }

  applyStagePoints(skills, cultureStagePoints, "culture", chars);

  /* --- Career stage: 100 pts, choose 3 pro skills, no mandatory minimum --- */
  const careerStdSpecialised = career.standard_skills.map(specialise);
  const careerProfAll = career.professional_skills.map(specialise);
  const shuffledCareerProf = [...careerProfAll].sort(() => Math.random() - 0.5);
  const pickedCareerProf2 = shuffledCareerProf.slice(
    0,
    Math.min(3, shuffledCareerProf.length)
  );
  const careerSkillSet = new Set([
    ...careerStdSpecialised,
    ...pickedCareerProf2,
    careerStyleSkill,
  ]);
  const careerSkillList = Array.from(careerSkillSet);

  const careerPoints = randomPointDistributionCappedStage(
    careerSkillList,
    100,
    15,
    null,
    typeof PRIORITY_SKILLS !== "undefined" ? PRIORITY_SKILLS : []
  );
  applyStagePoints(skills, careerPoints, "career", chars);

  /* --- Bonus stage: 150 pts on any skill we have so far --- */
  const bonusSkillList = Object.keys(skills);
  const bonusPoints = randomPointDistributionCappedStage(
    bonusSkillList,
    150,
    15,
    null,
    typeof PRIORITY_SKILLS !== "undefined" ? PRIORITY_SKILLS : []
  );
  applyStagePoints(skills, bonusPoints, "bonus", chars);

  finalizeSkillTotals(skills);

  const combatStyles = {};
  for (const [nameKey, rec] of Object.entries(skills)) {
    if (nameKey.startsWith("Combat Style")) {
      const label = nameKey.slice(nameKey.indexOf("(") + 1, -1);
      combatStyles[label] = rec;
    }
  }

  const passions = {};
  if (culture.passions && culture.passions.length) {
    const shuffledPassions = [...culture.passions].sort(() => Math.random() - 0.5);
    const count = Math.min(2, shuffledPassions.length);
    for (let i = 0; i < count; i++) {
      const p = shuffledPassions[i];
      passions[p] = 40 + Math.floor(Math.random() * 31); // 40–70
    }
  }

  return {
    name,
    culture: culture.name,
    career: career.name,
    gender,
    age,
    characteristics: chars,
    attributes: attrs,
    hit_points: hp,
    skills,
    combat_styles: combatStyles,
    passions,
  };
}

/* =========================
   Rendering
   ========================= */

function renderSkillTable(title, skillNames, skills) {
  if (!skillNames.length) return `<h3>${title}</h3><p><em>None</em></p>`;
  let html =
    `<h3>${title}</h3><table><thead>` +
    `<tr><th>Skill</th><th>Total</th><th>Breakdown</th></tr>` +
    `</thead><tbody>`;
  for (const name of skillNames) {
    const rec = skills[name];
    html += `<tr>
      <td>${name}</td>
      <td class="skill-total">${rec.total}%</td>
      <td class="skill-breakdown">base ${rec.base} + cult ${rec.culture} + car ${rec.career} + bon ${rec.bonus}</td>
    </tr>`;
  }
  html += `</tbody></table>`;
  return html;
}

function renderCharacter(c) {
  const app = document.getElementById("app");
  if (!app) return;

  const combatStyleNames = Object.keys(c.combat_styles).sort(
    (a, b) => c.combat_styles[b].total - c.combat_styles[a].total
  );

  const standardNames = Object.keys(c.skills)
    .filter(
      (s) => STANDARD_SKILLS.includes(skillRoot(s)) && !s.startsWith("Combat Style")
    )
    .sort((a, b) => a.localeCompare(b));

  const professionalNames = Object.keys(c.skills)
    .filter(
      (s) => !STANDARD_SKILLS.includes(skillRoot(s)) && !s.startsWith("Combat Style")
    )
    .sort((a, b) => a.localeCompare(b));

  let html = "";

  html += `<h1>${c.name}</h1>`;
  // html += `<div class="meta-line"><strong>Gender:</strong> ${c.gender}</div>`;
  html += `<div class="meta-line"><strong>Age:</strong> ${c.age}</div>`;
  html += `<div class="meta-line"><strong>Culture:</strong> ${c.culture}</div>`;
  html += `<div class="meta-line"><strong>Career:</strong> ${c.career}</div>`;

  // === three columns for Characteristics, Attributes, Hit Locations ===
  html += `<div class="section-columns">`;

  // Column 1: Characteristics
  html += `<div class="section-column">`;
  html += `<h2>Characteristics</h2><ul>`;
  for (const [k, v] of Object.entries(c.characteristics)) {
    html += `<li><strong>${k}:</strong> ${v}</li>`;
  }
  html += `</ul></div>`;

  // Column 2: Attributes
  html += `<div class="section-column">`;
  html += `<h2>Attributes</h2><ul>`;
  for (const [k, v] of Object.entries(c.attributes)) {
    html += `<li><strong>${k}:</strong> ${v}</li>`;
  }
  html += `</ul></div>`;

  // Column 3: Hit Locations
  html += `<div class="section-column">`;
  html += `<h2>Hit Locations</h2>`;

  const hitRows = [
    { key: "R Leg", label: "Right Leg", range: "1–3" },
    { key: "L Leg", label: "Left Leg", range: "4–6" },
    { key: "Abdomen", label: "Abdomen", range: "7–9" },
    { key: "Chest", label: "Chest", range: "10–12" },
    { key: "R Arm", label: "Right Arm", range: "13–15" },
    { key: "L Arm", label: "Left Arm", range: "16–18" },
    { key: "Head", label: "Head", range: "19–20" },
  ];

  html += `<table><thead><tr><th>1d20</th><th>Location</th><th>HP</th></tr></thead><tbody>`;
  for (const row of hitRows) {
    const hp = c.hit_points[row.key] ?? "-";
    html += `<tr>
      <td>${row.range}</td>
      <td>${row.label}</td>
      <td>${hp}</td>
    </tr>`;
  }
  html += `</tbody></table>`;
  html += `</div>`;

  html += `</div>`; // end .section-columns

  // === Combat Styles ===
  html += `<h2>Combat Styles</h2>`;
  if (combatStyleNames.length) {
    html +=
      `<table><thead>` +
      `<tr><th>Style</th><th>Total</th><th>Breakdown</th></tr>` +
      `</thead><tbody>`;
    for (const label of combatStyleNames) {
      const rec = c.combat_styles[label];
      html += `<tr>
        <td>${label}</td>
        <td class="skill-total">${rec.total}%</td>
        <td class="skill-breakdown">base ${rec.base} + cult ${rec.culture} + car ${rec.career} + bon ${rec.bonus}</td>
      </tr>`;
    }
    html += `</tbody></table>`;
  } else {
    html += `<p><em>None</em></p>`;
  }

  // === Skills ===
  html += renderSkillTable("Standard Skills", standardNames, c.skills);
  html += renderSkillTable("Professional Skills", professionalNames, c.skills);

  // === Passions ===
  html += `<h2>Passions</h2>`;
  if (Object.keys(c.passions).length) {
    html += `<ul>`;
    for (const [k, v] of Object.entries(c.passions)) {
      html += `<li>${k}: ${v}%</li>`;
    }
    html += `</ul>`;
  } else {
    html += `<p><em>None</em></p>`;
  }

  app.innerHTML = html;
}

function generateAndRender() {
  const ch = generateRandomMythrasCharacter();
  renderCharacter(ch);
}

function generateAndRenderJson() {
  const ch = generateRandomMythrasCharacter();
  const pre = document.getElementById("json-output");
  if (!pre) return;
  pre.textContent = JSON.stringify(ch, null, 2);
}

/* =========================
   Wire up button + initial render
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const mode = document.body.getAttribute("data-mode") || "html";

  if (mode === "json") {
    const btn = document.getElementById("generate-json-btn");
    if (btn) {
      btn.addEventListener("click", generateAndRenderJson);
    }
    // Auto-generate once on load
    generateAndRenderJson();
    return;
  }

  // Default: HTML sheet mode
  const btn = document.getElementById("generate-btn");
  if (btn) {
    btn.addEventListener("click", generateAndRender);
  }
  generateAndRender();
});

