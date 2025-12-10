const PRIORITY_SKILLS = [
  "Athletics", "Brawn", "Endurance", "Evade", "Insight", "Willpower"
];

const STANDARD_SKILLS = [
  "Athletics", "Boating", "Brawn", "Conceal", "Customs", "Dance", "Deceit",
  "Drive", "Endurance", "Evade", "First Aid", "Influence", "Insight",
  "Locale", "Native Tongue", "Perception", "Ride", "Sing", "Stealth",
  "Swim", "Unarmed", "Willpower",
];

// Special skill pairs for magic traditions
const SPECIAL_SKILL_PAIRS = {
  // Invocation: "Shaping",
  // Shaping: "Invocation",
  // Binding: "Trance",
  // Trance: "Binding",
  // Mysticism: "Meditation",
  // Meditation: "Mysticism",
  // Devotion: "Exhort",
  // Exhort: "Devotion",
  "Arcane Casting": "Arcane Knowledge",
  "Arcane Knowledge": "Arcane Casting",
  Devotion: "Channel",
  Channel: "Devotion (deity)"
};

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
  "Animal Handling": ["POW", "CHA"],
  "Arcane Casting": ["INT", "POW"],
  "Arcane Knowledge": ["INT", "INT"],
  Art: ["POW", "CHA"],
  Bureaucracy: ["INT", "INT"],
  Channel: ["INT", "CHA"],
  Commerce: ["INT", "CHA"],
  Courtesy: ["INT", "CHA"],
  Craft: ["DEX", "INT"],
  Culture: ["INT", "INT"],
  "Devotion (deity)": ["POW", "CHA"],
  Disguise: ["INT", "CHA"],
  Engineering: ["INT", "INT"],
  Gambling: ["INT", "POW"],
  Healing: ["INT", "POW"],
  Intimidation: ["INT", "CHA"],
  Invocation: ["POW", "CHA"],
  Language: ["INT", "CHA"],
  "Language (Thieves' Cant)": ["INT", "CHA"],
  Lockpicking: ["DEX", "DEX"],
  Lore: ["INT", "INT"],
  Mechanisms: ["DEX", "INT"],
  Musicianship: ["DEX", "CHA"],
  Navigation: ["INT", "POW"],
  Oratory: ["POW", "CHA"],
  Seamanship: ["INT", "CON"],
  Seduction: ["INT", "CHA"],
  Sleight: ["DEX", "CHA"],
  Streetwise: ["POW", "CHA"],
  Survival: ["CON", "POW"],
  Track: ["INT", "CON"],
};
