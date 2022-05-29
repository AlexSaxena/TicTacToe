console.log("Greeting General Kenobi!");

// Gameboard Array Module
const Gameboard = (function () {
  //let gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];,
  let gameboard = Array(9).fill("");

  let field = document.querySelector(".gameboard").children;
  let fieldArray = Array.from(field);

  return { gameboard, fieldArray };
})();

// Player Factory
const newPlayer = (name = "New Player", marker = "X", counter = 0) => {
  let playerName = name;
  let playerMarker = marker;
  let playerCounter = counter;
  return { name: playerName, marker: playerMarker, counter: playerCounter };
};

const players = (function () {
  let playerOne = newPlayer("Player 1");
  let playerTwo = newPlayer("Player 2", "O");
  return { playerOne, playerTwo };
})();

// OnClick For Each Box
const BoardBoxes = (function () {
  let fieldArray = Gameboard.fieldArray;
  fieldArray.forEach((boxes) => {
    let currentBox = boxes.dataset.id;

    boxes.addEventListener("click", () => {
      console.log("Box ID -> " + currentBox);

      if (boxes.innerText == null || boxes.innerText < 1) {
        //console.log("It is Empty");
        Game(currentBox);
      } else if (boxes.innerText != null || boxes.innerText > 1) {
        console.log("It is not empty\nContains -> " + boxes.innerText);
      }
    });
  });
})();

// Fill Each Box with Array Value
const fillBox = () => {
  let field = document.querySelector(".gameboard").children;
  let fieldArray = Array.from(field);

  for (let i = 0; i < fieldArray.length; i++) {
    fieldArray[i].innerText = Gameboard.gameboard[i];
  }
};

const Game = (currentBox) => {
  // Take Turns for players
  // Change innerText & set GameBoard Array
  // Gameboard Array == position[currentBox]
  // Conditions for Winning ?
  Gameboard.gameboard[currentBox] = checkPlayer();
  fillBox();
  // let winner = console.log("Game func -> " + currentBox);
  // return winner;
};

const checkPlayer = function () {
  let p1 = players.playerOne;
  let p2 = players.playerTwo;
  let currentPlayer = "";
  if (p1.counter == p2.counter) {
    currentPlayer = p1.marker;
    p1.counter++;
  } else {
    currentPlayer = p2.marker;
    p2.counter++;
  }
  return currentPlayer;
};
