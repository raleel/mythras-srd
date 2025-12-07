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
