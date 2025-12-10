/* ---- Classes (Classic Fantasy Imperative) ---- */

const CAREERS = [
  {
    name: "Cleric",
    standard_skills: [
      "Combat Skill (Cleric)",
      "First Aid",
      "Influence",
      "Insight",
      "Willpower",
    ],
    professional_skills: [
      "Channel",
      "Courtesy",
      "Devotion (deity)",
      "Lore (Religion)",
      "Language (any)",
      "Lore (any)",
    ],
    // Optional: purely informational, generator doesn’t use these mechanically yet
    abilities_rank1: [
      "Turning",
      "Lay on Hands",
      "Blessing",
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
      "Combat Skill (Fighter)",
    ],
    professional_skills: [
      "Healing",
      "Lore (Strategy and Tactics)",
      "Lore (Military History)",
      "Mechanisms",
      "Survival",
      "Track",
    ],
    abilities_rank1: [
      "Weapon Specialization",
      "Shield Training",
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
    ],
    professional_skills: [
      "Arcane Casting",
      "Arcane Knowledge",
      "Lore (Magic)",
      "Language (Arcane)",
      "Literacy",
      "Mechanisms",
    ],
    abilities_rank1: [
      "Cantrips",
      "Spell Memorization",
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
    ],
    abilities_rank1: [
      "Backstab",
      "Trap Sense",
    ],
  },
];
