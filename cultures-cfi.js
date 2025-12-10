/* ---- Race/Culture definitions for Classic Fantasy Imperative ---- */
/* These are used by the existing generator as CULTURES. */

const CULTURES = [
  // ===== HUMANS =====

  {
    name: "Human (Barbarian)",
    race: "Human",
    standard_skills: [
      "Athletics",
      "Brawn",
      "Endurance",
      "First Aid",
      "Locale",
      "Perception",
      ["Boating", "Ride"], // from “Boating or Ride”
    ],
    professional_skills: [
      "Navigation",
      "Survival",
      "Track",
      "Healing",
      "Language (any)",
      "Lore (any)",
    ],
    combat_styles: ["Tribal Weapons", "Raider Weapons"],
    passions: ["Loyalty (Tribe)", "Hate (Enemy Tribe)"],
  },

  {
    name: "Human (Civilised)",
    race: "Human",
    standard_skills: [
      "Conceal",
      "Deceit",
      "Drive",
      "Influence",
      "Insight",
      "Locale",
      "Willpower",
    ],
    professional_skills: [
      "Craft (any)",
      "Commerce",
      "Streetwise",
      "Language (any)",
      "Lore (any)",
      "Musicianship",
    ],
    combat_styles: ["City Watch Weapons", "Dueling Weapons"],
    passions: ["Loyalty (Home City)", "Hate (Criminals)"],
  },

  {
    name: "Human (Nomad)",
    race: "Human",
    standard_skills: [
      "Endurance",
      "First Aid",
      "Locale",
      "Perception",
      "Stealth",
      ["Athletics", "Boating", "Drive", "Ride", "Swim"], // primary travel mode
    ],
    professional_skills: [
      "Navigation",
      "Survival",
      "Track",
      "Healing",
      "Language (any)",
      "Lore (any)",
    ],
    combat_styles: ["Mounted Weapons", "Caravan Guard Weapons"],
    passions: ["Loyalty (Clan)", "Love (Freedom of the Road)"],
  },

  {
    name: "Human (Primitive)",
    race: "Human",
    standard_skills: [
      "Brawn",
      "Endurance",
      "Evade",
      "Locale",
      "Perception",
      "Stealth",
      ["Athletics", "Boating", "First Aid", "Swim"],
    ],
    professional_skills: [
      "Survival",
      "Track",
      "Navigation",
      "Athletics",
      "Boating",
      "First Aid",
      "Swim",
    ],
    combat_styles: ["Hunter Weapons", "Tribal Weapons"],
    passions: ["Loyalty (Tribe)", "Hate (Encroaching Civilisation)"],
  },

  // ===== DEMI-HUMANS WITH SINGLE CULTURE =====

  {
    name: "Dwarf",
    race: "Dwarf",
    standard_skills: [
      "Athletics",
      "Brawn",
      "Endurance",
      "Evade",
      "Locale",
      "Perception",
      "Willpower",
    ],
    professional_skills: [
      ["Commerce", "Mechanisms"],
      "Craft (any)",
      "Survival",
    ],
    combat_styles: ["Axe & Shield", "Crossbow Drill"],
    passions: ["Loyalty (Clan)", "Hate (Goblins)"],
  },

  {
    name: "Elf",
    race: "Elf",
    standard_skills: [
      "Conceal",
      "Influence",
      "Insight",
      "Locale",
      "Perception",
      "Stealth",
      "Willpower",
    ],
    professional_skills: [
      "Survival",
      ["Language (any)", "Lore (any)", "Musicianship"],
      ["Language (any)", "Lore (any)", "Musicianship"],
    ],
    combat_styles: ["Elven Archery", "Blade Dancing"],
    passions: ["Love (Beauty of Nature)", "Hate (Orcs)"],
  },

  {
    name: "Gnome",
    race: "Gnome",
    standard_skills: [
      "Deceit",
      "Evade",
      "Insight",
      "Locale",
      "Perception",
      "Stealth",
      "Willpower",
    ],
    professional_skills: [
      "Commerce",
      "Craft (any)",
      ["Mechanisms", "Survival"],
    ],
    combat_styles: ["Tinker Weapons", "Crossbow Drill"],
    passions: ["Curiosity (Clockworks)", "Hate (Bullies)"],
  },

  {
    name: "Halfling",
    race: "Halfling",
    standard_skills: [
      ["Dance", "Sing"],
      "Evade",
      "Insight",
      "Locale",
      "Perception",
      "Stealth",
      "Willpower",
    ],
    professional_skills: [
      "Craft (any)",
      "Musicianship",
      "Streetwise",
    ],
    combat_styles: ["Sling & Dagger", "Shortsword & Shield"],
    passions: ["Love (Comfort & Food)", "Hate (Oppression)"],
  },

  // ===== HALF-ELF VARIANTS =====

  {
    name: "Half-Elf (Elf-raised)",
    race: "Half-Elf",
    standard_skills: [
      "Conceal",
      "Influence",
      "Insight",
      "Locale",
      "Perception",
      "Stealth",
      "Willpower",
    ],
    professional_skills: [
      "Language (any)",
      "Lore (any)",
      ["Musicianship", "Survival"],
    ],
    combat_styles: ["Elven Archery", "Blade Dancing"],
    passions: ["Loyalty (Elven Kin)", "Hate (Orcs)"],
  },

  // RAW: “Select an appropriate Human Quick Pick”
  // Here we reuse a Human cultural mix so the generator can still function.
  {
    name: "Half-Elf (Human-raised)",
    race: "Half-Elf",
    standard_skills: [
      "Conceal",
      "Deceit",
      "Drive",
      "Influence",
      "Insight",
      "Locale",
      "Willpower",
    ],
    professional_skills: [
      "Commerce",
      "Streetwise",
      "Language (any)",
      "Lore (any)",
    ],
    combat_styles: ["City Watch Weapons", "Dueling Weapons"],
    passions: ["Loyalty (Adoptive Family)", "Curiosity (Other Culture)"],
  },

  // ===== HALF-ORC VARIANTS =====

  {
    name: "Half-Orc (Orc-raised)",
    race: "Half-Orc",
    standard_skills: [
      "Athletics",
      "Brawn",
      "Endurance",
      "Evade",
      "First Aid",
      "Locale",
      "Perception",
    ],
    professional_skills: [
      "Navigation",
      "Survival",
      "Track",
    ],
    combat_styles: ["Brutal Weapons", "Raider Weapons"],
    passions: ["Loyalty (Warband)", "Hate (Civilized Folk)"],
  },

  {
    name: "Half-Orc (Human-raised)",
    race: "Half-Orc",
    standard_skills: [
      "Conceal",
      "Deceit",
      "Drive",
      "Influence",
      "Insight",
      "Locale",
      "Willpower",
    ],
    professional_skills: [
      "Commerce",
      "Streetwise",
      "Survival",
      "Language (any)",
      "Lore (any)",
    ],
    combat_styles: ["City Watch Weapons", "Brutal Weapons"],
    passions: ["Loyalty (Adoptive Kin)", "Hate (Orc Raiders)"],
  },
];
