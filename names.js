// names.js

const NAMES_BY_CULTURE = {
  Barbarian: {
    given: [
      "Asa", "Brynja", "Dagmar", "Eldar", "Gudrun", "Hakan",
      "Ingvar", "Kara", "Rurik", "Sigrid", "Torvald", "Yrsa",
    ],
    surnames: [
      "Bearson", "Bloodaxe", "Frostborn", "Ironhand",
      "Stonehelm", "Stormcaller", "Wolfclan", "Wyrdson",
    ],
  },

  Civilised: {
    given: [
      "Alcius", "Cassia", "Darius", "Flavia", "Hadrian",
      "Julius", "Livia", "Marcellus", "Octavia", "Tiber", "Vettia",
    ],
    surnames: [
      "Aquilus", "Cassian", "Domitus", "Faust", "Marcelli",
      "Petron", "Sabinian", "Valerian",
    ],
  },

  Nomadic: {
    given: [
      "Aldan", "Batbayar", "Chagan", "Enebish", "Kulan",
      "Murod", "Saran", "Temur", "Yaraq", "Zaya",
    ],
    surnames: [
      "Cloud-Rider", "Grass-Stepper", "Hawk-Eye", "Sky-Watcher",
      "Runs-with-Horse", "Storm-Rider", "Windchaser",
    ],
  },

  Primitive: {
    given: [
      "Ash", "Brak", "Dru", "Eko", "Fena",
      "Gor", "Hena", "Kesh", "Lura", "Mok", "Nera", "Uko",
    ],
    surnames: [
      "Bonesplitter", "Deeproot", "Redclay", "Shadowfern",
      "Stonewalker", "Swiftfang", "Treeclimber",
    ],
  },

  // Fallback set if we ever hit a culture name we don't recognise
  Default: {
    given: [
      "Arin", "Bera", "Corin", "Dara", "Eldric", "Fara",
      "Garric", "Hesta", "Jorin", "Kaela",
    ],
    surnames: [
      "Stone", "Rivers", "Wolf", "Ironhand",
      "Bright", "Thorn", "Kestrel", "Storm",
    ],
  },
};

function randomNameForCulture(cultureName) {
  const entry =
    NAMES_BY_CULTURE[cultureName] || NAMES_BY_CULTURE.Default;

  const givenList = entry.given;
  const surnameList = entry.surnames;

  const given =
    givenList[Math.floor(Math.random() * givenList.length)];
  const surname =
    surnameList[Math.floor(Math.random() * surnameList.length)];

  return `${given} ${surname}`;
}
