console.log("Greeting General Kenobi!");

// Gameboard Array Module
const Gameboard = (function () {
  let gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let field = document.querySelector(".gameboard").children;
  let fieldArray = Array.from(field);

  return { gameboard, fieldArray };
})();

// Player Factory
const Player = (name = "New Player", marker = "X") => {
  let playerName = name;
  let playerMarker = marker;
  return { name: playerName, marker: playerMarker };
};

// OnClick For Each Box
const BoardBoxes = (function () {
  let fieldArray = Gameboard.fieldArray;
  fieldArray.forEach((boxes) => {
    let currentBox = boxes.dataset.id;

    boxes.addEventListener("click", () => {
      console.log("Box ID -> " + currentBox);
      // console.log(boxes.innerText);
      if (boxes.innerText == null || boxes.innerText < 1) {
        console.log("It is Empty");
        Game(currentBox);
      } else if (boxes.innerText != null || boxes.innerText > 1) {
        console.log("It is not empty\nContains -> " + boxes.innerText);
      }
    });
  });
})();

const Game = (currentBox) => {
  // Take Turns for players
  // Change innerText & set GameBoard Array
  // Gameboard Array == position[currentBox]
  // Conditions for Winning ?
  let winner = console.log("Game func -> " + currentBox);
  return winner;
};
