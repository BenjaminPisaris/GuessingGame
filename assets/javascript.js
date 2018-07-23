//Variables------
var wordChoices = [
    {word: "ferrari"},
    {word: "lamborghini"},
    {word: "maserati"},
    {word: "tesla"},
    {word: "mercedes"},
    {word: "lotus"},
    {word: "mclaren"},
    {word: "bentley"}
];

//Generates a random number that will determine which word is used
var randomNumber = Math.floor(Math.random() * wordChoices.length);

//Define a variable to check if game is running
var isGameRunning = false;

//make a variable that pulls the random word from the array
var rWord = wordChoices[randomNumber].word;

//Define how many letters need to be guessed to win
var guessesNeeded = rWord.length;

//define a remaining number of guesses
var remainingGuess = 9;

//set up an array for the alphabet
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//set up answer array to store the answer as an array for indexing
var answerArray = [];

//set up an array for incorrect answers
var wrongAnswers = [];

//check whether or not the guess is correct
var correctGuesses = 0;

//~~~~~~~GAME INITIALIZATION~~~~~~~~
//intialize the game

function init() {
    //change isGameRunning to true
    isGameRunning = true;
    //generate a new random number
    randomNumber = Math.floor(Math.random() * wordChoices.length);
    //use the new random number to generate a word

    //for loop here that works to replace the letters with hyphens
    
    //set letters remaining to win = number of letters in word
    guessesNeeded = rWord.length;
    //reset any other attributes needed
    wrongAnswers = [];
    remainingGuess = 9;
    //Define blank content for the HTML to be used for later
    GuessesLeft();
    displayGuesses();
    activeWord();
}
//after a key is released check to see if the game is running, if not, start it

//LISTENERS

//make the game start
document.onkeyup = function(event) {
    if(isGameRunning == true) {
        //game function goes here
    } else {
        init();
    }
}
//Create a function that sends the guess key to a correct function or
//incorrect function based on which array it should go to


//a function to make sure the input is a letter

//a function to push a correct guess to the answer array
//as upper case letters, inside a loop that also
//decreases the letters remaining with it

// create the function that runs on correct

//create an incorrect function that runs on the wrong guess

//create handlers for number of wins, letters guessed, guesses remaining,
//and the current solve status

