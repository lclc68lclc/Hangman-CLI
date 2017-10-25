function Letter(x) {
    this.letter = x;
    this.appear = false;
    this.showLetter = function() {
        if (this.appear == true) {
            return "_";
        } else {
            return this.letter;
        }
    };
}

module.exports = Letter;