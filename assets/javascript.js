

//Variables------
var wordChoices = [
    {word:"ferrari"},
    {word:"lamborghini"},
    {word:"maserati"},
    {word:"tesla"},
    {word:"mercedes"},
    {word:"lotus"},
    {word:"mclaren"},
    {word:"bentley"}
];

//Define a variable to check if game is running
var isGameRunning = false;

//Generates a random number that will determine which word is used
var randomNumber = Math.floor(Math.random() * wordChoices.length);
//make a variable that pulls the random word from the array
var rWord = wordChoices[randomNumber].word;

//Define how many letters need to be guessed to win
var guessesNeeded = rWord.length;
//define a remaining number of guesses
var remainingGuess = 9;

//set up an array for the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//set up answer array to store the answer as an array for indexing
var answerArray = [];

//set up an array for incorrect answers
var wrongAnswers = [];

//define a number of wins
var wins = 0;

//~~~~~~~GAME INITIALIZATION~~~~~~~~
//intialize the game

function init() {
    //change isGameRunning to true
    isGameRunning = true;
    //generate a new random number
    randomNumber = Math.floor(Math.random() * wordChoices.length);
    //use the new random number to generate a word
    rWord = wordChoices[randomNumber].word;
    guessesNeeded = rWord.length;
    $("#activeWord").text("");
    answerArray = [];
    //for loop here that works to replace the letters with hyphens
    for (var i = 0; i < rWord.length; i++) {
        answerArray[i] = "-";
    }
   
    //reset any other attributes needed
    wrongAnswers = [];
    
    remainingGuess = 9;
    GuessesLeft();
    guessHandler();
    activeWord();
};
//after a key is released check to see if the game is running, if not, start it

//LISTENERS

//make the game start
document.onkeyup = function(event) {
    if(isGameRunning == true) {
        alphaCheck(event);
    } else {
        init();
    };
};

function alphaCheck(attempt) {
    if (alphabet.indexOf(attempt.key) > -1) {
        guessCheck(attempt);
        console.log(attempt);
    };
};
//Create a function that sends the guess key to a correct function or
//incorrect function based on which array it should go to
function guessCheck(guess) {
    if (rWord.indexOf(guess.key) > -1) {
        correct(guess);}
    else {
        incorrect(guess);
    };
};
function correct(guess) {
    if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
        inputHandler(guess);
    };
};

function incorrect(guess) {
    if (wrongAnswers.indexOf(guess.key.toUpperCase()) < 0) {
    wrongAnswers.push(guess.key.toUpperCase());
    guessHandler(); 
    GuessesLeft();
    remainingGuess--;
    if (remainingGuess === 0) {
        isGameRunning = false;
        init();
        alert("Sorry! You lost!");
    };};
};

function inputHandler(guess) {
    for (var i = 0; i < rWord.length; i++) {
        if (guess.key === rWord[i]) {
            //push correct letter to answer array
            answerArray[i] = guess.key.toUpperCase();
            activeWord();
            guessesNeeded--;
            if (guessesNeeded === 0) {
                wins++;
                winHandler();
                activeWord();
                isGameRunning = false;
                init ();
                alert("Congrats! You won!");
            
            };
        };
    };
};



//create handlers for number of wins, letters guessed, guesses remaining,
//and the current solve status

//display number of wins
function winHandler() {
    $("#score").text(wins);
};

//display letters the user has guessed
function guessHandler() {
    var guessHandle = document.querySelector("#guesses");
    guessHandle.textContent = wrongAnswers.join(", ");
};

//display remaining guesses
function GuessesLeft() {
    $("#attempts").text(remainingGuess);
};

//shows current solve status
function activeWord() {
    var activeWord = document.querySelector("#activeWord");
    activeWord.innerHTML = answerArray.join("");
};

