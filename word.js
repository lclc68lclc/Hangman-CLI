var letter = require('./letter.js');


function Word(word) {
    this.word = word;
    this.blanksAndSuccesses = [];
    this.isLetterinWord = false;
    this.getWord = function() {
        this.getW = this.blanksAndSuccesses.every(function(lettWord) {
            return lettWord.appear;
        });
        return this.getW;
    };
    this.checkGuesses = function(x) {
        var toGet = 0;
        for (var i = 0; i < this.blanksAndSuccesses.length; i++) {
            if (this.blanksAndSuccesses[i].letter == x) {
                this.isLetterinWord = true;
                toGet++;
            }
        }
        return toGet;
    };
    this.checkLetters = function() {
        var string = '';
        for (var i = 0; i < this.word.length; i++) {
            this.blanksAndSuccesses.push(new letter(this.word[i]));
        }
        for (var j = 0; j < this.blanksAndSuccesses.length; j++) {
            string += this.blanksAndSuccesses[j].showLetter();
        }
        return string;
    };
}

module.exports = Word;