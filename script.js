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

// OnClick For Each Box
const fillBox = (function () {
  let field = document.querySelector(".gameboard").children;
  //field.children.item(5).innerText = "X";
  let fieldArray = Array.from(field);
  let id = 0;
  fieldArray.forEach((boxes) => {
    boxes.addEventListener("click", () => {
      //Game();
      console.log("test " + boxes.classList.value);
      if (boxes.innerText == "") {
        boxes.innerText = "X";
      }
    });
  });
  //Gameboard
  //return field;
})();

const Game = () => {
  // Take Turns for players
  // Change innerText & set GameBoard Array
  // Conditions for Winning ?

  return winner;
};
