function Letter(x) {
    this.letter = x;
    this.appear = false;
    this.showLetter = function(x) {
        if (this.appear == true) {
            return this.letter;
        } else {
            return '_';
        }
    };
}

module.exports = Letter;