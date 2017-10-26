var Letter = require("./letter");
var Word = require("./word");
var inquirer = require("inquirer");

var wordOptions = ["foot", "ankle", "knee", "elbow", "thigh", "hand", "calf"];
var selectedWord = words[Math.floor(Math.random() * words.length)];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;

var askQuestion = function() {
    if (guessLeft < 9) {
        inquirer.prompt([{
            name: "guess",
            message: "Guess a letter"
        }, ]).then(function(answer) {
                var newWord = new Word(
                    answer.word);

            )
        })
}
}