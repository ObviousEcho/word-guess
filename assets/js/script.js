// array of objects containing words and blanks:
var game = [
    js = {
        word: "javascript",
        blank: ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    },

    func = {
        word: "function",
        blank: ["_", "_", "_", "_", "_", "_", "_", "_"]
    },

    variable = {
        word: "variable",
        blank: ["_", "_", "_", "_", "_", "_", "_", "_"]
    },

    object = {
        word: "object",
        blank: ["_", "_", "_", "_", "_", "_"]
    },

     array = {
        word: "array",
        blank: ["_", "_", "_", "_", "_"]
     }
];

// math function to select random array index:
var random = Math.floor(Math.random() * game.length);
// variable to store randomly selected index:
var randomWord = game[random];
// variable to store underscore blanks:
var guessBlank = randomWord.blank;

// variables to store dynamic creation of html:
var keyPress = document.querySelector("body");
var div = document.createElement("div");

// =========================================================

// dynamically renders blanks to screen:
render();

function render() {
  div.innerHTML = randomWord.blank.join(" ");
  document.body.appendChild(div);
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
    div.innerHTML = guessBlank.join(" ");
    document.body.appendChild(div);
  };