class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split();
        this.remainingGuesses = remainingGuesses;
    }
}

const game1 = new Hangman('Cat', 2);
console.log(game1)