var theWord = document.getElementById("theword");
var remainGuesses = document.getElementById("guessesRemain");;
var wordlist = ["word", "mother", "dog", "Honorificabilitudinitatibus", "Aluminium "];


theWord.innerHTML = "TEST";
remainGuesses.innerHTML = "TEST";

var game = {
    guessedList: [],
    wrongGuessedList: [],
    onInput: function(event) {
        console.log(event.key);
    }

}

function onInput1() {



    document.forms[0].originalString.value

    var originalString = document.forms[0].originalString;
    var outputString = document.forms[0].outputString;
    outputString.value = parseInt(originalString.value, 10);
    console.log(originalString.value);
    console.log(outputString.value);

}
