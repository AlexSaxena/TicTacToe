console.log("Greeting General Kenobi!");

// Gameboard Array Module
const Gameboard = (function () {
  //let gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];,
  let gameboard = Array(9).fill("");

  let field = document.querySelector(".gameboard").children;
  let fieldArray = Array.from(field);

  return { gameboard, fieldArray };
})();

const winningOutcomes = (function () {
  const validW = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return validW;
})();

// Player Factory
const newPlayer = (name = "New Player", marker = "X", counter = 0) => {
  let playerName = name;
  let playerMarker = marker;
  let playerCounter = counter;
  let playerBoxes = [];
  return {
    name: playerName,
    marker: playerMarker,
    counter: playerCounter,
    boxes: playerBoxes,
  };
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
    if (Gameboard.gameboard[i] != "") {
      fieldArray[i].innerText = Gameboard.gameboard[i].marker;
    } else {
      // Might remove
      fieldArray[i].innerText = Gameboard.gameboard[i];
    }
  }
};

const checkPlayer = (currentBox) => {
  let p1 = players.playerOne;
  let p2 = players.playerTwo;
  let numCurrentBox = Number(currentBox);
  let currentPlayer;
  if (p1.counter == p2.counter) {
    currentPlayer = p1;
    p1.counter++;
    p1.boxes.push(numCurrentBox);
  } else {
    currentPlayer = p2;
    p2.counter++;
    p2.boxes.push(numCurrentBox);
  }
  return currentPlayer;
};

const checkVictory = () => {
  let gameArr = Gameboard.gameboard;
  let row1 = winningOutcomes[0].map((x) => gameArr[x].marker).join("");

  if (row1 === "OOO" || row1 === "XXX") {
    let status = true;
    let winner = gameArr[0].marker;
    markedBoxes(winningOutcomes[0]);
    return { status, winner };
  }
  return false;
};

const markedBoxes = (boxArr) => {
  let fieldArray = Gameboard.fieldArray;
  let tempBoxArr = boxArr;
  fieldArray.forEach((box) => {
    let currentBox = box.dataset.id;
    if (
      currentBox == tempBoxArr[0] ||
      currentBox == tempBoxArr[1] ||
      currentBox == tempBoxArr[2]
    ) {
      box.style.backgroundColor = "salmon";
    }
  });
};

const Game = (currentBox) => {
  let spanOutcome = document.querySelector(".outcome-span");
  let wCondition = checkVictory();
  if (wCondition.status == true) {
    console.log("it is over Anakin");
    spanOutcome.innerText = `${wCondition.winner} is the Winner!`;
  } else {
    Gameboard.gameboard[currentBox] = checkPlayer(currentBox);
    fillBox();
  }
};

const resetGame = (function () {
  let btnReset = document.querySelector(".reset-button");
  let spanOutcome = document.querySelector(".outcome-span");
  btnReset.addEventListener("click", () => {
    spanOutcome.innerText = "Three in a Row to win!";
    console.log("Reset Btn Pressed!");
    for (let i = 0; i < Gameboard.gameboard.length; i++) {
      Gameboard.gameboard[i] = "";
      Gameboard.fieldArray[i].style.backgroundColor = "white";
    }
    players.playerOne.counter = 0;
    players.playerOne.boxes = [];
    players.playerTwo.counter = 0;
    players.playerTwo.boxes = [];
    fillBox();
  });
})();
