console.log("Greeting General Kenobi!");

// Gameboard Array Module
const Gameboard = (function () {
  let gameboard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  return gameboard;
})();

// Player Factory
const Player = (name = "New Player", marker = "X") => {
  let playerName = name;
  let playerMarker = marker;
  return { name: playerName, marker: playerMarker };
};
