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
function getPrioritySkillsForCareer(career) {
  // Neutral baseline: good for everyone
  const base = ["Athletics", "Brawn", "Endurance", "Evade", "Willpower", "Insight"];

  if (!career || !career.name) {
    // Fall back to global if something weird happens
    return typeof PRIORITY_SKILLS !== "undefined" ? PRIORITY_SKILLS : base;
  }

  // MAGIC-USER: magic + mental focus, NO Combat Style priority
  if (career.name === "Magic-User") {
  const result = [...base];  // start with shared physical priorities

  result.push(
    "Arcane Casting",
    "Arcane Knowledge",
    "Channel",
    "Devotion",      // matches "Devotion (deity)" via skillRoot
    "Willpower",
    "Insight"
  );

  return result;
}


  // Everyone else (Fighter, Rogue, Cleric, etc.) –
  // Combat Style stays important
  const result = [...base, "Combat Style"];

  // Cleric-type classes really love Channel/Devotion too
  if (career.name === "Cleric") {
    result.push("Channel", "Devotion");
  }

  return result;
}

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

function ensurePairedSpecialsInSelection(picked, allAvailable, maxCount) {
  const result = [...picked];

  function findByRoot(list, root) {
    return list.find((name) => skillRoot(name) === root);
  }

  for (let i = 0; i < result.length; i++) {
    const name = result[i];
    const root = skillRoot(name);
    const pairRoot = SPECIAL_SKILL_PAIRS[root];
    if (!pairRoot) continue;

    const hasPairAlready = result.some((s) => skillRoot(s) === pairRoot);
    if (hasPairAlready) continue;

    const partnerName = findByRoot(allAvailable, pairRoot);
    if (!partnerName) continue; // that career/culture doesn't offer the pair

    // If we still have room (< maxCount), just add the partner.
    if (result.length < maxCount) {
      if (!result.includes(partnerName)) {
        result.push(partnerName);
      }
    } else {
      // No room: replace one of the *other* skills with the partner.
      const replaceable = result
        .map((s, idx) => ({ s, idx }))
        .filter((x) => x.idx !== i); // don't replace the original one

      if (!replaceable.length) continue;
      const choice =
        replaceable[Math.floor(Math.random() * replaceable.length)];
      result[choice.idx] = partnerName;
    }
  }

  // Just in case we somehow exceeded maxCount, trim back randomly.
  while (result.length > maxCount) {
    result.splice(Math.floor(Math.random() * result.length), 1);
  }

  return result;
}

function enforceSpecialPairsInStagePoints(stagePoints) {
  const names = Object.keys(stagePoints);

  for (const name of names) {
    const pts = stagePoints[name];
    if (!pts || pts <= 0) continue;

    const root = skillRoot(name);
    const pairRoot = SPECIAL_SKILL_PAIRS[root];
    if (!pairRoot) continue;

    // See if the partner is already in this stage
    let partnerName = Object.keys(stagePoints).find(
      (n) => skillRoot(n) === pairRoot
    );

    if (!partnerName) {
      // No partner yet: create an unspecialised partner
      partnerName = pairRoot;
    }

    if (!stagePoints[partnerName]) {
      // Split some of this skill's points into the partner.
      const extra = Math.max(1, Math.floor(pts / 2));

      // Try not to reduce the original below 1
      if (stagePoints[name] > extra) {
        stagePoints[name] -= extra;
      }
      // Give the partner some points
      stagePoints[partnerName] = (stagePoints[partnerName] || 0) + extra;
    }
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

/**
 * CFI Rank 1 requirement:
 * A Rank 1 character must have at least 5 Class skills at 40% or higher.
 *
 * We look at the Class's Standard + Professional skills (roots),
 * find matching skills on the sheet, and if fewer than 5 are ≥40%,
 * we top them up to 40% by adding to the "bonus" component.
 */
function enforceRank1ClassSkills(skills, career) {
  if (!career) return;

  // Expand any choice arrays in the career skill lists
  const expandedClassList = expandSkillChoices(
    (career.standard_skills || []).concat(career.professional_skills || [])
  );

  // Work with roots so "Lore (any)" / "Lore (Religion)" / etc. line up
  const classSkillRoots = new Set(expandedClassList.map((name) => skillRoot(name)));

  const classSkillRecords = Object.entries(skills).filter(([name, rec]) =>
    classSkillRoots.has(skillRoot(name))
  );

  // Count how many are already at 40%+
  let count40 = classSkillRecords.filter(([, rec]) => rec.total >= 40).length;
  if (count40 >= 5) return;

  // Sort ascending by total so we raise the weakest first
  classSkillRecords.sort((a, b) => a[1].total - b[1].total);

  let idx = 0;
  while (count40 < 5 && idx < classSkillRecords.length) {
    const [skillName, rec] = classSkillRecords[idx++];
    if (rec.total >= 40) continue;

    const needed = 40 - rec.total;
    if (needed <= 0) continue;

    // We can only ever spend up to +10 bonus points on a skill.
    const currentBonus = rec.bonus || 0;
    const bonusHeadroom = 10 - currentBonus;
    if (bonusHeadroom <= 0) continue;

    const delta = Math.min(needed, bonusHeadroom);
    rec.bonus = currentBonus + delta;
    rec.total += delta;

    if (rec.total >= 40) {
      count40++;
    }
  }
}

function findCareerByName(name) {
  if (typeof CAREERS === "undefined" || !Array.isArray(CAREERS)) return null;
  return CAREERS.find((c) => c.name === name) || null;
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
  const genders = ["Male", "Female", "Non-binary"];
  const gender = genders[Math.floor(Math.random() * genders.length)];
  const age = 17 + Math.floor(Math.random() * 11); // 17–27

  const chars = generateCharacteristics();
  const attrs = calcAttributes(chars);
  const hp = calcHitPoints(chars);

  const culture = CULTURES[Math.floor(Math.random() * CULTURES.length)];
  const career = CAREERS[Math.floor(Math.random() * CAREERS.length)];
  const name = randomNameForCulture(culture.name);

  const specialCache = {};
  const specialise = (template) => specialiseSkillName(template, culture.name, specialCache);
  
  const prioritySkills = getPrioritySkillsForCareer(career);
  
  const skills = {};

  // Base standard skills
  for (const sname of STANDARD_SKILLS) {
    ensureSkill(skills, sname, chars);
  }

    // Combat styles: Classic Fantasy Imperative – only class-based combat style
  const careerStyleLabel = `${career.name} Style`;
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
const maxCultureProf = Math.min(3, shuffledCultureProf.length);

let pickedCultureProf = shuffledCultureProf.slice(0, maxCultureProf);
pickedCultureProf = ensurePairedSpecialsInSelection(
  pickedCultureProf,
  cultureProfAll,
  maxCultureProf
);


  const mandatorySkillsSet = new Set([
    ...cultureStdSpecialised,
    ...pickedCultureProf,
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
    prioritySkills
  );
  for (const [s, pts] of Object.entries(extraCulturePoints)) {
    cultureStagePoints[s] = (cultureStagePoints[s] || 0) + pts;
  }

	// ... after merging extraCulturePoints ...
	enforceSpecialPairsInStagePoints(cultureStagePoints);
	applyStagePoints(skills, cultureStagePoints, "culture", chars);

  /* --- Career stage: 100 pts, choose 3 pro skills, no mandatory minimum --- */
const careerStdSpecialised = career.standard_skills.map(specialise);
const careerProfAll = career.professional_skills.map(specialise);
const shuffledCareerProf = [...careerProfAll].sort(() => Math.random() - 0.5);
const maxCareerProf = Math.min(3, shuffledCareerProf.length);

let pickedCareerProf2 = shuffledCareerProf.slice(0, maxCareerProf);
pickedCareerProf2 = ensurePairedSpecialsInSelection(
  pickedCareerProf2,
  careerProfAll,
  maxCareerProf
);

    const careerSkillSet = new Set([
    ...careerStdSpecialised,
    ...pickedCareerProf2,
    ]);

    // Magic-User combat style is bonus-only; others get career points too
    if (career.name !== "Magic-User") {
      careerSkillSet.add(careerStyleSkill);
    }

    const careerSkillList = Array.from(careerSkillSet);


  const careerPoints = randomPointDistributionCappedStage(
    careerSkillList,
    100,
    15,
    null,
    prioritySkills
  );
  enforceSpecialPairsInStagePoints(careerPoints);
  applyStagePoints(skills, careerPoints, "career", chars);

    /* --- Bonus stage (CFI): 100 pts, max +10 per skill --- */
  const bonusSkillList = Object.keys(skills);
  const bonusPoints = randomPointDistributionCappedStage(
    bonusSkillList,
    100,  // CFI: 100 bonus points
    10,   // CFI: max +10 per skill from this pool
    null,
    prioritySkills
  );
  enforceSpecialPairsInStagePoints(bonusPoints);
  applyStagePoints(skills, bonusPoints, "bonus", chars);

  finalizeSkillTotals(skills);

  // CFI Rank 1: ensure at least 5 class skills are at 40% or higher
  enforceRank1ClassSkills(skills, career);

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
      (s) => STANDARD_SKILLS.includes(skillRoot(s)) && !s.startsWith("Combat Style") && skillRoot(s) !== "Combat Skill"
    )
    .sort((a, b) => a.localeCompare(b));

  const professionalNames = Object.keys(c.skills)
    .filter(
      (s) => !STANDARD_SKILLS.includes(skillRoot(s)) && !s.startsWith("Combat Style") && skillRoot(s) !== "Combat Skill"
    )
    .sort((a, b) => a.localeCompare(b));

  // NEW: resolve class abilities for this character’s career
  let classAbilities = [];
  const careerDef = findCareerByName(c.career);
  if (careerDef) {
    if (Array.isArray(careerDef.abilities_rank1)) {
      classAbilities = careerDef.abilities_rank1;
    } else if (Array.isArray(careerDef.class_abilities)) {
      // fallback, in case you named it differently
      classAbilities = careerDef.class_abilities;
    }
  }

  let html = "";

  html += `<h1>${c.name}</h1>`;
  // html += `<div class="meta-line"><strong>Gender:</strong> ${c.gender}</div>`;
  html += `<div class="meta-line"><strong>Age:</strong> ${c.age}</div>`;
  html += `<div class="meta-line"><strong>Culture:</strong> ${c.culture}</div>`;
  html += `<div class="meta-line"><strong>Career:</strong> ${c.career}</div>`;

  // (you can optionally echo a one-line list here too)
  if (classAbilities.length) {
    html += `<div class="meta-line"><strong>Rank 1 Class Abilities:</strong> ${classAbilities.join(
      ", "
    )}</div>`;
  }

  // ... keep the rest of the function as-is until we get near Passions

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

  // NEW: Class Abilities (only shows for CFI careers that define them)
  if (classAbilities.length) {
    html += `<h2>Class Abilities (Rank 1)</h2>`;
    html += `<ul>`;
    for (const ab of classAbilities) {
      html += `<li>${ab}</li>`;
    }
    html += `</ul>`;
  }

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

function mapCharacterToNpcJson(char) {
  // stats as an array of single-key objects
  const statOrder = ["STR", "CON", "SIZ", "DEX", "INT", "POW", "CHA"];
  const stats = statOrder.map((k) => ({ [k]: char.characteristics[k] }));

  // skills: just export totals
  const skills = Object.entries(char.skills).map(([name, rec]) => ({
    [name]: rec.total,
  }));

  // hit locations with ranges and armor points (ap). PCs have no built-in armor,
  // so we default ap to 0.
  const hitLocDefs = [
    { key: "R Leg", name: "Right leg", range: "01-03" },
    { key: "L Leg", name: "Left leg", range: "04-06" },
    { key: "Abdomen", name: "Abdomen", range: "07-09" },
    { key: "Chest", name: "Chest", range: "10-12" },
    { key: "R Arm", name: "Right arm", range: "13-15" },
    { key: "L Arm", name: "Left arm", range: "16-18" },
    { key: "Head", name: "Head", range: "19-20" },
  ];

  const hit_locations = hitLocDefs.map((h) => ({
    name: h.name,
    range: h.range,
    hp: char.hit_points[h.key] ?? 0,
    ap: 0,
  }));

  // combat styles as an array with name + value + weapons (empty list for now)
  const combat_styles = Object.entries(char.combat_styles).map(([name, rec]) => ({
    name,
    value: rec.total,
    weapons: [],
  }));

  // attributes in your NPC schema
  const attributes = {
    action_points: char.attributes["Action Points"],
    damage_modifier: char.attributes["Damage Mod"],
    magic_points: char.attributes["Magic Points"],
    // we don't currently compute the fancy "11(13-2)" strike rank,
    // so just use Initiative as a string
    strike_rank: String(char.attributes["Initiative"]),
    movement: String(char.attributes["Movement"]),
  };

  return {
    name: char.name,
    cult_rank: "None",
    stats,
    skills,
    folk_spells: [],
    theism_spells: [],
    sorcery_spells: [],
    mysticism_spells: [],
    hit_locations,
    combat_styles,
    attributes,
    notes: "",
    features: [],
    cults: [],
    spirits: [],
    natural_armor: false,
  };
}

function generateAndRenderJson() {
  const ch = generateRandomMythrasCharacter();
  const npc = mapCharacterToNpcJson(ch);
  const pre = document.getElementById("json-output");
  if (!pre) return;
  // The outer [] to match your example: an array of one NPC
  pre.textContent = JSON.stringify([npc], null, 2);
}

/* =========================
   Wire up button + initial render
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  // URL param override: ?json=1 or ?json=true or just ?json
  const params = new URLSearchParams(window.location.search);
  const urlWantsJson =
    params.has("json") &&
    !["0", "false", ""].includes(params.get("json")?.toLowerCase?.() || "");

  // body[data-mode="json"] still works (for your minimal json-only pages),
  // but URL param takes precedence.
  let mode = document.body.getAttribute("data-mode") || "html";
  if (urlWantsJson) {
    mode = "json";
  }

  if (mode === "json") {
    // Hide the normal UI if it exists
    const btn = document.getElementById("generate-btn");
    if (btn) btn.style.display = "none";

    const app = document.getElementById("app");
    if (app) app.style.display = "none";

    // Ensure there is a <pre id="json-output"> somewhere
    let pre = document.getElementById("json-output");
    if (!pre) {
      pre = document.createElement("pre");
      pre.id = "json-output";
      pre.style.margin = "0";
      pre.style.padding = "0";
      document.body.appendChild(pre);
    }

    generateAndRenderJson();
    return;
  }

  // Default: normal HTML sheet mode
  const btn = document.getElementById("generate-btn");
  if (btn) {
    btn.addEventListener("click", generateAndRender);
  }
  generateAndRender();
});


