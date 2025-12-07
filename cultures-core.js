/* ---- Cultures ---- */

const CULTURES = [
  {
    name: "Barbarian",
    standard_skills: [
      "Athletics",
      "Brawn",
      "Endurance",
      "First Aid",
      "Locale",
      "Perception",
      ["Boating", "Ride"],   // ← pick one of these at generation time
    ],
    professional_skills: [
      "Craft (any)", "Healing", "Lore (any)", "Musicianship",
      "Navigation", "Seamanship", "Survival", "Track",
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
    combat_styles: ["Citizen Legionary", "City-state Phlanagite", "Levied Archer", "Light Skirmisher", "Street Thug", "Town Militia"],
    passions: ["Loyalty (Town/City)", "Love (friend, sibling, or romantic lover)", "Hate (rival, gang, district, or city)"],
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
