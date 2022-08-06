// array of objects containing words and blanks:
var game = [
  (js = {
    word: "javascript",
    blank: ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
  }),
  (func = {
    word: "function",
    blank: ["_", "_", "_", "_", "_", "_", "_", "_"],
  }),
  (variable = {
    word: "variable",
    blank: ["_", "_", "_", "_", "_", "_", "_", "_"],
  }),
  (object = {
    word: "object",
    blank: ["_", "_", "_", "_", "_", "_"],
  }),
  (array = {
    word: "array",
    blank: ["_", "_", "_", "_", "_"],
  }),
];

// math function to select random array index:
var random = Math.floor(Math.random() * game.length);
// variable to store randomly selected index:
var randomWord = game[random];
// variable to store underscore blanks:
var guessBlank = randomWord.blank;

// variables to store dynamic creation of html and eventlisteners:
var click = document.querySelector(".button");
var keyPress = document.querySelector("body");
var divWord = document.createElement("div");
var divTime = document.createElement("div");
var wordElement = document.getElementById("word");
var timerElement = document.getElementById("timer");

// time variable:
var secondsLeft = 20;

// =========================================================

// eventlistener begins game on start button:
click.addEventListener("click", function () {
  render();
  setTime();
});

// dynamically renders blanks to screen:

function render() {
  divWord.innerHTML = randomWord.blank.join(" ");
  wordElement.appendChild(divWord);
  console.log(game[random].word);
}

// upon keydown, user guess is evaluated against array:
keyPress.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();
  // splits word from object in game array above into an array
  var guessWord = randomWord.word.split("");

  // loop through array containing randomly selected word
  for (i = 0; i < guessWord.length; i++) {
    // if keypress = index of array
    if (key === guessWord[i]) {
      guessBlank[i] = key;
      renderAnswer();
    }
  }
});

//   dynamically renders user guess to html:
function renderAnswer() {
  divWord.innerHTML = guessBlank.join(" ");
  wordElement.appendChild(divWord);
}

// timer function:
function setTime() {
  // sets interval in variable
  var timerInterval = setInterval(function () {
    // appends time to html
    divTime.textContent = secondsLeft;
    timerElement.appendChild(divTime);
    secondsLeft--;
    // game ends and timer stops at 0
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
