var letter = require('./letter.js');


function Word(word) {
    this.word = word;
    this.blanksAndSuccesses = [];
    this.lettersInWord = [];
    this.splitWord = word.split('');
    this.wrongLetters = [];
    this.isLetterinWord = false;
    this.blanks = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.blanksAndSuccesses.push("_");
        }
        console.log(this.blanksAndSuccesses.join(" "));
    };
}

var newWord = new Word("funny");

newWord.blanks();
console.log(newWord.isLetterinWord);

Word.prototype.checkGuesses = function(x) {
    for (var i = 0; i < this.word.length; i++) {
        if (this.word[i] == x) {
            this.isLetterinWord = true;
            console.log(this.isLetterinWord);
        }
    }

    if (this.isLetterinWord) {
        for (var j = 0; j < this.word.length; j++) {
            if (this.word[i] == x) {
                this.blanksAndSuccesses[i] = x;
                console.log(this.blanksAndSuccesses);
            }
        }
    } else {
        console.log(x + " is not in the word");
        this.wrongLetters.push(x);
    }

    console.log(this.wrongLetters);


};



newWord.checkGuesses("u");

//module.exports = Word;