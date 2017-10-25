var Letter = require("./letter");
var Word = require("./word");
var inquirer = require("inquirer");

var wordOptions = ["foot", "ankle", "knee", "elbow", "thigh", "hand", "calf"];
var selectedWord = words[Math.floor(Math.random() * words.length)];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;