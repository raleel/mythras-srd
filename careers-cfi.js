/* ---- Classes (Classic Fantasy Imperative) ---- */

const CAREERS = [
  {
    name: "Cleric",
    standard_skills: [
      "Combat Skill (Cleric)",
      "First Aid",
      "Influence",
      "Insight",
      "Sing",
      "Willpower",
    ],
    professional_skills: [
      "Channel",
      "Bureaucracy",
      "Courtesy",
      "Culture (any)",
      "Healing",
      "Lore (Alchemy)",
      "Oratory",
      "Devotion (deity)",
      "Lore (Religion)",
      "Language (any)",
      "Lore (any)",
    ],
    // Optional: purely informational, generator doesn’t use these mechanically yet
    abilities_rank1: [
      "Turning",
      "Spellcaster",
      "Starting Spells",
    ],
  },

  {
    name: "Fighter",
    standard_skills: [
      "Athletics",
      "Brawn",
      "Endurance",
      "Evade",
      "Perception",
      "Unarmed",
      "Boating",
      "Ride",
      "Combat Skill (Fighter)",
    ],
    professional_skills: [
      "Craft (any)",
      "Engineering",
      "Gambling",
      "Intimidation",
      "Oratory",
      "Navigate",
      "Lore (Strategy and Tactics)",
      "Lore (Military History)",
      "Survival",
    ],
    abilities_rank1: [
      "Weapon Specialization",
      "Combat Proficiency",
    ],
  },

  {
    name: "Magic-User",
    standard_skills: [
      "Combat Skill (Magic-User)",
      "Influence",
      "Insight",
      "Perception",
      "Willpower",
      "First Aid",
      "Evade",
      "Locale",
    ],
    professional_skills: [
      "Arcane Casting",
      "Arcane Knowledge",
      "Lore (any)",
      "Language (any)",
      "Culture (any)",
      "Lore (Alchemy)",
    ],
    abilities_rank1: [
      "Spellcaster",
      "Starting Spells",
    ],
  },

  {
    name: "Rogue",
    standard_skills: [
      "Athletics",
      "Deceit",
      "Evade",
      "Insight",
      "Perception",
      "Stealth",
    ],
    professional_skills: [
      "Lockpicking",
      "Mechanisms",
      "Sleight",
      "Streetwise",
      "Commerce",
      "Disguise",
      "Acrobatics",
      "Acting",
      "Seduction",
    ],
    abilities_rank1: [
      "Climb Walls",
      "Hide in Shadows",
      "Sneak Attack",
      "Subterfuge",
    ],
  },
];
