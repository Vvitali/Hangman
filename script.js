var theWord = document.getElementById("theword");
var remainGuesses = document.getElementById("guessesRemain");;
var wordlist = ["word", "mother", "dog", "Honorificabilitudinitatibus", "Aluminium "];


theWord.innerHTML = "TEST";
remainGuesses.innerHTML = "TEST";

var gameM = {
    guessedList: [],
    secretWord: undefined,

    generateWord: function() {
        this.secretWord = wordlist[Math.floor(Math.random * wordlist.length)];
        console.log("SecretWord: " + this.secretWord);
    },

    onInput: function(event) {
        console.log(event.key);
        return event.key.toLowerCase();
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
    }

}


this.gameM.generateWord();
theWord.innerHTML = gameM.secretWord;

function onInput1() {



    document.forms[0].originalString.value

    var originalString = document.forms[0].originalString;
    var outputString = document.forms[0].outputString;
    outputString.value = parseInt(originalString.value, 10);
    console.log(originalString.value);
    console.log(outputString.value);

}
