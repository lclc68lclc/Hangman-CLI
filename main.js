var Word = require("./word");
var inquirer = require("inquirer");

var wordOptions = ["foot", "ankle", "knee", "elbow", "thigh", "hand", "calf"];
var selectedWord = null;
var guessLeft = 9;

function resetGuesses() {
    guessLeft = 9;
}

var startGame = function(word) {
    resetGuesses();
    this.random = Math.floor(Math.random() * wordOptions.length);
    this.selectedWord = new Word(random);
    this.selectedWord.getWord();
    askQuestion();

};

var askQuestion = function() {

    if (guessLeft < 6) {
        inquirer.prompt([{
            name: "guess",
            message: "Guess a letter"
        }, ]).then(function(answer) {
            console.log("You guessed" + answer);
            var guessed = this.selectedWord.checkLetters(answer);
        });
    }
};



startGame();