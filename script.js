var theWord = document.getElementById("theword");
var remainGuesses = document.getElementById("guessesRemain");
var wordlist = ["word", "mother", "dog", "Honorificabilitudinitatibus", "Aluminium "];



var gameM = {

    guessedList: [],
    underscorePlaceHolder: "",
    secretWord: undefined,

    generateWord: function() {
        this.secretWord = wordlist[Math.floor(Math.random() * wordlist.length)];
        console.log("SecretWord: " + this.secretWord);
    },

    onInput: function(event) {
        console.log(event.key.toLowerCase());
    },

    checkTheList: function(theKey) {
        if (this.guessedList.indexOf(theKey) == -1) {
            this.guessedList.push(theKey);
            //if key does not existed in the list - we push the key to the array, and function returns 1
            return 0;
        }
        //if key does exist in the list - just return 0
        return 1;
    },

    checkTheWord: function(theKey) {
        if (theWord.indexOf(theKey) == -1) {
            return 0;
        }
        else { return 1; }
    },

    initializeHtmlByUnderscore: function(length) {
        var underscores = "";
        for (var i = 0; i < length; i++) {
            underscores += "_ ";
        }
        theWord.innerHTML = underscores;
        this.underscorePlaceHolder = underscores;
    },

    updateUnderScorePlaceHolder: function(position, letter) {
        console.log("Holder: " + this.underscorePlaceHolder);
        this.underscorePlaceHolder[position] = letter;
        console.log("Holder: " + this.underscorePlaceHolder);
        console.log("New letter " + letter + ", on the position#" + position);
        theWord.innerHTML = this.underscorePlaceHolder;
    }

}
//generate the word
this.gameM.generateWord();
//put a underscore-placeholder to the html
this.gameM.initializeHtmlByUnderscore(gameM.secretWord.length);
//update placeholder with new-letter
this.gameM.updateUnderScorePlaceHolder(2, "k");
