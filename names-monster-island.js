// names.js

const NAMES_BY_CULTURE = {
  Colonist: {
    given: [
      
  },

  HighFolk: {
    given: [
      "Alcius", "Cassia", "Darius", "Flavia", "Hadrian",
      "Julius", "Livia", "Marcellus", "Octavia", "Tiber", "Vettia",
    ],

  },

  Savage: {
    given: [
      "Aldan", "Batbayar", "Chagan", "Enebish", "Kulan",
      "Murod", "Saran", "Temur", "Yaraq", "Zaya",
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

  const given =
    givenList[Math.floor(Math.random() * givenList.length)];


  return `${given} ${surname}`;
}
