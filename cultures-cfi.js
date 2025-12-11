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
		"Craft (any)", "Musicianship", "Seamanship",
    ],
    // combat_styles: ["Tribal Weapons", "Raider Weapons"],
	combat_styles: [],
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
		"Art (any)", "Courtesy",
    ],
    combat_styles: [],
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
      ["Athletics", "Boating", "Drive", "Ride", "Swim"],
	  ["Athletics", "Boating", "Drive", "Ride", "Swim"],// primary travel mode
    ],
    professional_skills: [
      "Navigation",
      "Survival",
      "Track",
      "Healing",
      "Language (any)",
      "Lore (any)",
		"Craft (any)", "Culture (any)", "Musicianship", 
    ],
    combat_styles: [],
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
		"Craft (any)", "Healing", "Lore (any)", "Language (any)",
		"Musicianship"
    ],
    combat_styles: [],
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
      "Commerce", "Mechanisms",
      "Craft (any)", "Engineering",
		"Language (gnome)", "Language (goblin)", "Language (kobold)", "Language (orc)",
      "Survival", "Lore (any)", "Oratory",
    ],
    combat_styles: [],
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
      "Survival", "Art (any)", "Commerce", "Craft (any)", "Courtesy", 
      "Language (goblin)", "Language (halfling)", "Language (goblin)", "Language (hobgoblin)",
		"Language (orc)", "Language (gnoll)", "Lore (any)", "Musicianship",
    ],
    combat_styles: [],
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
      "Craft (any)", "Engineering", "Language (dwarf)",
		"Language (halfling)", "Language (goblin)", "Language (kobold)",
      "Mechanisms", "Survival", "Oratory",
    ],
    combat_styles: [],
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
      "Craft (any)", "Art (any)", "Commerce", "Courtesy",
      "Musicianship", "Language (any)", "Lore (any)",
      "Streetwise",
    ],
    combat_styles: [],
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
    combat_styles: [],
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
      "Commerce", "Art (any)", "Craft (any)", "Courtesy", 
      "Survival", "Musicianship", 
      "Language (goblin)", "Language (halfling)", "Language (goblin)", "Language (hobgoblin)",
		"Language (orc)", "Language (gnoll)",
      "Lore (any)",
    ],
    combat_styles: [],
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
    combat_styles: [],
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
    combat_styles: [],
    passions: ["Loyalty (Adoptive Kin)", "Hate (Orc Raiders)"],
  },
];
