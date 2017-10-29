var Word = require("./word");
var inquirer = require('inquirer');

var wordOptions = ["foot", "ankle", "knee", "elbow", "thigh", "hand", "calf"];
var selectedWord = null;
var guessLeft = 7;

function resetGuesses() {
    guessLeft = 7;
}

var question = [{
    type: 'input',
    name: 'guess',
    message: 'Guess a letter: '
}];

var startGame = function() {
    //resetGuesses();
    this.random = Math.floor(Math.random() * wordOptions.length);
    this.selectedWord = new Word(wordOptions[random]);
    console.log(this.selectedWord.word);
    this.wordGuess = this.selectedWord.checkLetters(this.selectedWord);
    console.log(this.wordGuess);
    askQuestion();

};

var askQuestion = function() {

    if (guessLeft < 8) {
        inquirer.prompt(question).then(function(answer) {
            console.log("You guessed " + answer.guess);
            console.log("------------------");
            //console.log(this.selectedWord.checkLetters(this.selectedWord));
            var guessed = this.selectedWord.checkLetters(this.selectedWord.word);
            console.log(guessed);
            if (guessed !== answer.guess) {
                console.log("Wrong");
                guessLeft--;
            } else {
                console.log("Correct");
                if (this.selectedWord.getWord()) {
                    console.log("You won!");
                    console.log("------------------");
                    return;
                }
            }
            console.log("Guesses remaining: " + guessLeft);
            console.log("------------------");
            askQuestion();
        });
    }

};


startGame();