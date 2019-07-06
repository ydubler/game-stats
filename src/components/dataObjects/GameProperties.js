const gameFields = [
  "throne",
  "sword",
  "raven",
  "money",
  "supply",
  "boats_start",
  "boats_end",
  "footmen_start",
  "footmen_end",
  "knights_start",
  "knights_end",
  "siege_start",
  "siege_end",
  "strongholds_start",
  "strongholds_end",
  "castles_start",
  "castles_end",
  "landTerritories",
  "seaTerritories",
  "forcedMuster",
  "playerNotes"
];

const houses = [
  "lannister",
  "greyjoy",
  "stark",
  "arryn",
  "baratheon",
  "targaryen",
  "dorn",
  "tyrell"
];

const houseColors = {
  lannister: "Red",
  greyjoy: "MidnightBlue",
  stark: "gray",
  arryn: "RoyalBlue",
  baratheon: "Gold",
  targaryen: "DarkOrchid",
  dorn: "BurlyWood",
  tyrell: "Green"
};

const rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// GAME OBJECT - INFORMATION SAVED TO THE DATABASE
const gameObject = {};
rounds.forEach(round => {
  houses.forEach(house => {
    gameFields.forEach(field => {
      gameObject["round" + round + "_" + house + "_" + field] = 0;
    });
  });
});

// PREVIOUS GAME OBJECT
const TEMPORARY_roundData = {};

rounds.forEach(round => {
  TEMPORARY_roundData["round" + round] = {};
  TEMPORARY_roundData["round" + round]["round" + round] = {};
  houses.forEach(house => {
    TEMPORARY_roundData["round" + round]["round" + round][house] = {};
    [
      "strongholds",
      "castles",
      "boats",
      "footmen",
      "knights",
      "siege",
      "supply"
    ].forEach(field => {
      TEMPORARY_roundData["round" + round]["round" + round][house][field] = 0;
    });
  });
});

module.exports = {
  rounds,
  gameFields,
  houses,
  houseColors,
  gameObject,
  TEMPORARY_roundData
};
