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
   Data
   ========================= */

const STANDARD_SKILLS = [
  "Athletics", "Boating", "Brawn", "Conceal", "Customs", "Dance", "Deceit",
  "Drive", "Endurance", "Evade", "First Aid", "Influence", "Insight",
  "Locale", "Native Tongue", "Perception", "Ride", "Sing", "Stealth",
  "Swim", "Unarmed", "Willpower",
];

// base stat formulas (root skill name => [stat1, stat2])
const SKILL_BASE_FORMULAS = {
  // Standard
  Athletics: ["STR", "DEX"],
  Boating: ["STR", "CON"],
  Brawn: ["STR", "SIZ"],
  Conceal: ["DEX", "POW"],
  Customs: ["INT", "INT"],
  Dance: ["DEX", "CHA"],
  Deceit: ["INT", "CHA"],
  Drive: ["DEX", "POW"],
  Endurance: ["CON", "CON"],
  Evade: ["DEX", "DEX"],
  "First Aid": ["DEX", "INT"],
  Influence: ["CHA", "CHA"],
  Insight: ["INT", "POW"],
  Locale: ["INT", "INT"],
  "Native Tongue": ["INT", "CHA"],
  Perception: ["INT", "POW"],
  Ride: ["DEX", "POW"],
  Sing: ["POW", "CHA"],
  Stealth: ["DEX", "INT"],
  Swim: ["STR", "CON"],
  Unarmed: ["STR", "DEX"],
  Willpower: ["POW", "POW"],

  // Professional
  Acrobatics: ["STR", "DEX"],
  Acting: ["CHA", "CHA"],
  Art: ["POW", "CHA"],
  Astrogation: ["INT", "INT"],
  Bureaucracy: ["INT", "INT"],
  Comms: ["INT", "INT"],
  Computers: ["INT", "INT"],
  Commerce: ["INT", "CHA"],
  Courtesy: ["INT", "CHA"],
  Craft: ["DEX", "INT"],
  Culture: ["INT", "INT"],
  Demolitions: ["INT", "POW"],
  Disguise: ["INT", "CHA"],
  Electronics: ["DEX", "INT"],
  Engineering: ["INT", "INT"],
  Forgery: ["DEX", "INT"],
  Gambling: ["INT", "POW"],
  Healing: ["INT", "POW"],
  Language: ["INT", "CHA"],
  Linguistics: ["INT", "POW"],
  Literacy: ["INT", "POW"],
  Lockpicking: ["DEX", "DEX"],
  Lore: ["INT", "INT"],
  Magic: ["POW", "CHA"],
  Mechanisms: ["DEX", "INT"],
  Musicianship: ["DEX", "CHA"],
  Navigation: ["INT", "POW"],
  Oratory: ["POW", "CHA"],
  Pilot: ["DEX", "INT"],
  Politics: ["INT", "CHA"],
  Research: ["INT", "POW"],
  Science: ["INT", "INT"],
  Seamanship: ["INT", "CON"],
  Seduction: ["INT", "CHA"],
  Sensors: ["INT", "POW"],
  Sleight: ["DEX", "CHA"],
  Streetwise: ["POW", "CHA"],
  Survival: ["CON", "POW"],
  Teach: ["INT", "CHA"],
  Track: ["INT", "CON"],
};

function skillRoot(name) {
  const idx = name.indexOf("(");
  return idx === -1 ? name.trim() : name.slice(0, idx).trim();
}

function skillBase(name, chars) {
  const root = skillRoot(name);
  if (root === "Combat Style") {
    return chars.STR + chars.DEX;
  }
  const formula = SKILL_BASE_FORMULAS[root];
  if (!formula) return 0;
  const [a, b] = formula;
  return chars[a] + chars[b];
}

/* ---- Cultures ---- */

const CULTURES = [
  {
    name: "Barbarian",
    standard_skills: [
      "Athletics", "Brawn", "Endurance", "First Aid",
      "Locale", "Perception", "Boating"
    ],
    professional_skills: [
      "Craft (any)", "Healing", "Lore (any)", "Musicianship",
      "Navigation", "Seamanship", "Survival", "Track"
    ],
    combat_styles: ["Barbarian Warrior", "Wolf Hunter"],
    passions: ["Loyalty (Clan)", "Love (Family)", "Hate (Rival Clan)"],
  },
  {
    name: "Civilised",
    standard_skills: [
      "Conceal", "Deceit", "Drive", "Influence",
      "Insight", "Locale", "Willpower"
    ],
    professional_skills: [
      "Art (any)", "Commerce", "Craft (any)", "Courtesy",
      "Language (any)", "Lore (any)", "Musicianship", "Streetwise"
    ],
    combat_styles: ["Citizen Legionary", "City Guard"],
    passions: ["Loyalty (City)", "Love (Family)", "Hate (Rival Faction)"],
  },
  {
    name: "Nomadic",
    standard_skills: [
      "Endurance", "First Aid", "Locale", "Perception",
      "Stealth", "Ride"
    ],
    professional_skills: [
      "Craft (any)", "Culture (any)", "Language (any)",
      "Lore (any)", "Musicianship", "Navigation", "Survival", "Track"
    ],
    combat_styles: ["Horse Lord", "Sand Raider"],
    passions: ["Loyalty (Tribe)", "Love (Family)", "Hate (Enemy Tribe)"],
  },
  {
    name: "Primitive",
    standard_skills: [
      "Brawn", "Endurance", "Evade", "Locale",
      "Perception", "Stealth"
    ],
    professional_skills: [
      "Craft (any)", "Healing", "Lore (any)", "Musicianship",
      "Navigation", "Survival", "Track"
    ],
    combat_styles: ["Flint Death Dealer", "Jungle Hunter"],
    passions: ["Loyalty (Clan)", "Love (Family)", "Hate (Predator)"],
  },
];

/* ---- Careers ---- */

const CAREERS = [
  {
    name: "Agent",
    standard_skills: ["Conceal", "Deceit", "Evade", "Insight", "Perception", "Stealth"],
    professional_skills: [
      "Culture (any)", "Disguise", "Language (any)",
      "Sleight", "Streetwise", "Survival", "Track",
    ],
  },
  {
    name: "Beast Handler",
    standard_skills: ["Drive", "Endurance", "First Aid", "Influence", "Locale", "Ride", "Willpower"],
    professional_skills: [
      "Craft (Animal Husbandry)", "Commerce",
      "Healing (Specific Species)", "Lore (Specific Species)",
      "Survival", "Teach (Specific Species)", "Track",
    ],
  },
  {
    name: "Bounty Hunter",
    standard_skills: ["Athletics", "Endurance", "Evade", "Insight", "Perception", "Stealth"],
    professional_skills: [
      "Bureaucracy", "Commerce", "Culture (any)",
      "Linguistics", "Streetwise", "Survival (any)", "Track",
    ],
  },
  {
    name: "Courtesan",
    standard_skills: ["Customs", "Dance", "Deceit", "Influence", "Insight", "Perception", "Sing"],
    professional_skills: [
      "Art (any)", "Courtesy", "Culture (any)",
      "Gambling", "Language (any)", "Musicianship", "Seduction",
    ],
  },
  {
    name: "Crafter",
    standard_skills: ["Brawn", "Drive", "Influence", "Insight", "Locale", "Perception", "Willpower"],
    professional_skills: [
      "Art (any)", "Commerce", "Craft (Primary)",
      "Craft (Secondary)", "Engineering", "Mechanisms", "Streetwise",
    ],
  },
  {
    name: "Detective",
    standard_skills: ["Customs", "Evade", "Influence", "Insight", "Perception", "Stealth"],
    professional_skills: [
      "Bureaucracy", "Culture (any)", "Disguise",
      "Linguistics", "Lore (any)", "Research", "Sleight", "Streetwise",
    ],
  },
  {
    name: "Entertainer",
    standard_skills: ["Athletics", "Brawn", "Dance", "Deceit", "Influence", "Insight", "Sing"],
    professional_skills: [
      "Acrobatics", "Acting", "Oratory",
      "Musicianship", "Seduction", "Sleight", "Streetwise",
    ],
  },
  {
    name: "Farmer",
    standard_skills: ["Athletics", "Brawn", "Drive", "Endurance", "Locale", "Perception", "Ride"],
    professional_skills: [
      "Commerce", "Craft (any)", "Lore (Agriculture)",
      "Lore (Animal Husbandry)", "Navigation", "Survival", "Track",
    ],
  },
  {
    name: "Fisher",
    standard_skills: ["Athletics", "Boating", "Endurance", "Locale", "Perception", "Stealth", "Swim"],
    professional_skills: [
      "Commerce", "Craft (Any)", "Lore (Primary Catch)",
      "Lore (Secondary Catch)", "Navigation", "Seamanship", "Survival",
    ],
  },
  {
    name: "Gambler",
    standard_skills: ["Athletics", "Brawn", "Endurance", "Locale", "Perception", "Willpower"],
    professional_skills: [
      "Acting", "Bureaucracy", "Commerce", "Courtesy",
      "Gambling", "Research", "Sleight", "Streetwise",
    ],
  },
  {
    name: "Herder",
    standard_skills: ["Endurance", "First Aid", "Insight", "Locale", "Perception", "Ride"],
    professional_skills: [
      "Commerce", "Craft (Animal Husbandry)",
      "Healing (Specific Species)", "Navigation",
      "Musicianship", "Survival", "Track",
    ],
  },
  {
    name: "Hunter",
    standard_skills: ["Athletics", "Endurance", "Locale", "Perception", "Ride", "Stealth"],
    professional_skills: [
      "Commerce", "Craft (Hunting Related)",
      "Lore (Regional or Specific Species)",
      "Mechanisms", "Navigation", "Survival", "Track",
    ],
  },
  {
    name: "Journalist",
    standard_skills: ["Customs", "Deceit", "Influence", "Insight", "Locale", "Native Tongue", "Perception"],
    professional_skills: [
      "Bureaucracy", "Culture (any)", "Language (any)",
      "Lore (any)", "Oratory", "Politics", "Streetwise",
    ],
  },
  {
    name: "Magician",
    standard_skills: ["Customs", "Deceit", "Influence", "Insight", "Locale", "Perception", "Willpower"],
    professional_skills: [
      "Culture (any)", "Magic", "Literacy (any)",
      "Lore (Primary)", "Lore (Secondary)", "Oratory", "Sleight",
    ],
  },
  {
    name: "Mechanic",
    standard_skills: ["Brawn", "Customs", "Drive", "Endurance", "Influence", "Locale", "Willpower"],
    professional_skills: [
      "Commerce", "Craft (Primary)", "Craft (Secondary)",
      "Electronics", "Gambling", "Mechanisms", "Streetwise",
    ],
  },
  {
    name: "Merchant",
    standard_skills: ["Boating", "Drive", "Deceit", "Insight", "Influence", "Locale", "Ride"],
    professional_skills: [
      "Commerce", "Courtesy", "Culture (any)",
      "Language (any)", "Navigation", "Seamanship", "Streetwise",
    ],
  },
  {
    name: "Miner",
    standard_skills: ["Athletics", "Brawn", "Endurance", "Locale", "Perception", "Sing", "Willpower"],
    professional_skills: [
      "Commerce", "Craft (Mining)", "Engineering",
      "Lore (Minerals)", "Mechanisms",
      "Navigation (Underground)", "Survival",
    ],
  },
  {
    name: "Official",
    standard_skills: ["Customs", "Deceit", "Influence", "Insight", "Locale", "Perception", "Willpower"],
    professional_skills: [
      "Bureaucracy", "Commerce", "Courtesy",
      "Language (any)", "Literacy (any)", "Lore (any)", "Oratory",
    ],
  },
  {
    name: "Physician",
    standard_skills: ["Dance", "First Aid", "Influence", "Insight", "Locale", "Sing", "Willpower"],
    professional_skills: [
      "Commerce", "Craft (Physiological Speciality)",
      "Healing", "Language (any)", "Literacy (any)",
      "Lore (any)", "Streetwise",
    ],
  },
  {
    name: "Pilot",
    standard_skills: ["Brawn", "Drive", "Endurance", "Evade", "Locale", "Perception", "Willpower"],
    professional_skills: [
      "Customs (any)", "Electronics", "Mechanisms",
      "Navigation", "Pilot", "Sensors", "Streetwise",
    ],
  },
  {
    name: "Politician",
    standard_skills: ["Customs", "Deceit", "Influence", "Insight", "Locale", "Native Tongue", "Perception"],
    professional_skills: [
      "Bureaucracy", "Courtesy", "Culture (any)",
      "Language (any)", "Lore (any)", "Oratory", "Politics",
    ],
  },
  {
    name: "Priest",
    standard_skills: ["Customs", "Dance", "Deceit", "Influence", "Insight", "Locale", "Willpower"],
    professional_skills: [
      "Bureaucracy", "Courtesy", "Culture (any)",
      "Literacy (any)", "Lore (any)", "Oratory", "Politics",
    ],
  },
  {
    name: "Sailor",
    standard_skills: ["Athletics", "Boating", "Brawn", "Endurance", "Locale", "Swim"],
    professional_skills: [
      "Craft (Shipboard Speciality)", "Culture (any)",
      "Language (any)", "Lore (any)",
      "Navigation", "Seamanship", "Survival",
    ],
  },
  {
    name: "Scholar",
    standard_skills: ["Customs", "Influence", "Insight", "Locale", "Native Tongue", "Perception", "Willpower"],
    professional_skills: [
      "Culture (any)", "Language (any)", "Literacy (any)",
      "Lore (Primary)", "Lore (Secondary)", "Oratory", "Teach",
    ],
  },
  {
    name: "Scientist",
    standard_skills: ["Customs", "Influence", "Insight", "Locale", "Native Tongue", "Perception", "Willpower"],
    professional_skills: [
      "Culture (any)", "Engineering", "Language (any)",
      "Oratory", "Research", "Science (any)", "Teach",
    ],
  },
  {
    name: "Scout",
    standard_skills: ["Athletics", "Endurance", "First Aid", "Perception", "Stealth", "Swim"],
    professional_skills: [
      "Culture (any)", "Healing", "Language (any)",
      "Lore (any)", "Navigation", "Survival", "Track",
    ],
  },
  {
    name: "Servant",
    standard_skills: ["Customs", "Deceit", "Drive", "Influence", "Insight", "Locale", "Perception"],
    professional_skills: [
      "Bureaucracy", "Courtesy", "Craft (Service Related)",
      "Culture (any)", "Language (any)", "Politics", "Streetwise",
    ],
  },
  {
    name: "Smuggler",
    standard_skills: ["Conceal", "Customs", "Deceit", "Drive", "Influence", "Insight", "Locale"],
    professional_skills: [
      "Bureaucracy", "Commerce", "Culture (any)",
      "Language (any)", "Navigation", "Streetwise",
      "Astrogation/Seamanship",
    ],
  },
  {
    name: "Technician",
    standard_skills: ["Brawn", "Drive", "Endurance", "Influence", "Locale", "Perception", "Willpower"],
    professional_skills: [
      "Comms", "Craft (any)", "Electronics",
      "Gambling", "Mechanisms", "Science (any)", "Sensors",
    ],
  },
  {
    name: "Thief",
    standard_skills: ["Athletics", "Deceit", "Evade", "Insight", "Perception", "Stealth"],
    professional_skills: [
      "Acting", "Commerce", "Disguise",
      "Lockpicking", "Mechanisms", "Sleight", "Streetwise",
    ],
  },
  {
    name: "Warrior",
    standard_skills: ["Athletics", "Brawn", "Endurance", "Evade", "Unarmed"],
    professional_skills: [
      "Craft (any)", "Engineering", "Gambling",
      "Lore (Military History)", "Lore (Strategy and Tactics)",
      "Oratory", "Survival",
    ],
  },
];

const ANY_OPTIONS = {
  Art: ["Painting", "Sculpture", "Poetry", "Storytelling", "Calligraphy"],
  Craft: ["Blacksmith", "Carpentry", "Weaving", "Pottery", "Brewery"],
  Culture: ["Barbarian", "Civilised", "Nomadic", "Primitive", "Imperial", "Border Kingdoms"],
  Language: ["Korantine", "Lyserian", "Thennalt", "Common Trade", "Tarak"],
  Lore: ["History", "Theology", "Regional", "Tactics", "Arcana"],
  Science: ["Biology", "Chemistry", "Physics", "Xenology"],
  Survival: ["Forest", "Desert", "Tundra", "Jungle", "Urban"],
  Customs: ["Imperial Law", "Tribal Rites", "Temple Etiquette"],
};

/* =========================
   Helpers
   ========================= */

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

    // +40% free bonus for native Customs and Native Tongue
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

function randomPointDistributionCappedStage(skillNames, totalPoints, maxPerSkill, existingStagePoints) {
  if (!skillNames.length || totalPoints <= 0) return {};
  const pts = {};
  const existing = existingStagePoints || {};
  let remaining = totalPoints;

  while (remaining > 0) {
    let placed = false;
    for (let tries = 0; tries < 20 && remaining > 0; tries++) {
      const s = skillNames[Math.floor(Math.random() * skillNames.length)];
      const current = (existing[s] || 0) + (pts[s] || 0);
      if (current < maxPerSkill) {
        pts[s] = (pts[s] || 0) + 1;
        remaining -= 1;
        placed = true;
        break;
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

function calcActionPoints(intVal, dexVal) {
  return 2; // Imperative: flat 2 AP
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
  const initiative = Math.floor((chars.INT + chars.DEX) / 2);
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
  const cultureStyleLabel = culture.combat_styles[Math.floor(Math.random() * culture.combat_styles.length)];
  const cultureStyleSkill = `Combat Style (${cultureStyleLabel})`;
  ensureSkill(skills, cultureStyleSkill, chars);

  const careerStyleOptions = [cultureStyleLabel, `${career.name} Style`];
  const careerStyleLabel = careerStyleOptions[Math.floor(Math.random() * careerStyleOptions.length)];
  const careerStyleSkill = `Combat Style (${careerStyleLabel})`;
  ensureSkill(skills, careerStyleSkill, chars);

  // --- Culture stage: min +5 on cultural standard skills, 3 cultural prof skills, and cultural combat style ---
  const cultureStdSpecialised = culture.standard_skills.map(specialise);
  const cultureProfAll = culture.professional_skills.map(specialise);

  const shuffledCultureProf = [...cultureProfAll].sort(() => Math.random() - 0.5);
  const pickedCultureProf = shuffledCultureProf.slice(0, Math.min(3, shuffledCultureProf.length));

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
    cultureStagePoints
  );
  for (const [s, pts] of Object.entries(extraCulturePoints)) {
    cultureStagePoints[s] = (cultureStagePoints[s] || 0) + pts;
  }

  applyStagePoints(skills, cultureStagePoints, "culture", chars);

  // --- Career stage: 100 pts, choose 3 pro skills, no mandatory minimum ---
  const careerStdSpecialised = career.standard_skills.map(specialise);
  const careerProfAll = career.professional_skills.map(specialise);
  const shuffledCareerProf = [...careerProfAll].sort(() => Math.random() - 0.5);
  const pickedCareerProf = shuffledCareerProf.slice(0, Math.min(3, shuffledCareerProf.length));
  const careerSkillSet = new Set([...careerStdSpecialised, ...pickedCareerProf, careerStyleSkill]);
  const careerSkillList = Array.from(careerSkillSet);

  const careerPoints = randomPointDistributionCappedStage(
    careerSkillList,
    100,
    15,
    null
  );
  applyStagePoints(skills, careerPoints, "career", chars);

  // --- Bonus stage: 150 pts on any skill we have so far ---
  const bonusSkillList = Object.keys(skills);
  const bonusPoints = randomPointDistributionCappedStage(
    bonusSkillList,
    150,
    15,
    null
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
  let html = `<h3>${title}</h3><table><thead><tr><th>Skill</th><th>Total</th><th>Breakdown</th></tr></thead><tbody>`;
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

  const combatStyleNames = Object.keys(c.combat_styles)
    .sort((a, b) => c.combat_styles[b].total - c.combat_styles[a].total);

const standardNames = Object.keys(c.skills).filter(
  (s) => STANDARD_SKILLS.includes(skillRoot(s)) && !s.startsWith("Combat Style")
).sort((a, b) => a.localeCompare(b));

const professionalNames = Object.keys(c.skills).filter(
  (s) => !STANDARD_SKILLS.includes(skillRoot(s)) && !s.startsWith("Combat Style")
).sort((a, b) => a.localeCompare(b));

  let html = "";

  html += `<h1>${c.name}</h1>`;
  html += `<div class="meta-line"><strong>Gender:</strong> ${c.gender}</div>`;
  html += `<div class="meta-line"><strong>Age:</strong> ${c.age}</div>`;
  html += `<div class="meta-line"><strong>Culture:</strong> ${c.culture}</div>`;
  html += `<div class="meta-line"><strong>Career:</strong> ${c.career}</div>`;

  // === NEW: three columns for Characteristics, Attributes, Hit Locations ===
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

// map the locations to 1d20 ranges and display names
const hitRows = [
  { key: "R Leg", label: "Right Leg", range: "1–3" },
  { key: "L Leg", label: "Left Leg",  range: "4–6" },
  { key: "Abdomen", label: "Abdomen", range: "7–9" },
  { key: "Chest",   label: "Chest",   range: "10–12" },
  { key: "R Arm",   label: "Right Arm", range: "13–15" },
  { key: "L Arm",   label: "Left Arm",  range: "16–18" },
  { key: "Head",    label: "Head",      range: "19–20" },
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
    html += `<table><thead><tr><th>Style</th><th>Total</th><th>Breakdown</th></tr></thead><tbody>`;
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

/* =========================
   Wire up button + initial render
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generate-btn");
  if (btn) {
    btn.addEventListener("click", generateAndRender);
  }
  generateAndRender();
});
