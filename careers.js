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
