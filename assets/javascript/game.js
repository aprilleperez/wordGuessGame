//variables to dynamically change displayed HTML
var domChosenLetters = document.getElementById("domChosenLetters");
var domWins = document.getElementById("domWins");
var domLoses = document.getElementById("domLoses");
var domGuessesRemaining = document.getElementById("domGuessesRemaining");
var domIncorrectLetters = document.getElementById("domIncorrectLetters");


// declare an array of words
// app stores randomly chosen word
var tunSongs = ["imagine", "needy", "nasa", "bloodline", "fakesmile", "badidea", "makeup", "ghostin", "inmyhead", "rings", "thankunext", "imbored"];
var randomSong = tunSongs[Math.floor(Math.random() * tunSongs.length)];
console.log(randomSong);

// declare array storing indexes of chosen word's letters
var chosenSong = [];

// loop through chosen word and create matching underscores for its length
for (var i = 0; i < randomSong.length; i++) {
    chosenSong[i] = "_ ";
    domChosenLetters.textContent += chosenSong[i];
}
console.log(chosenSong);

// store letters that don't match chosenWord
var incorrectLetter = [];
var guessesRemaining = 10;



// listen for letter pressed
// store myLetter pressed 
// loop through index of chosen word
// if myLetter matches indexed letter
// change chosenSong[i] = myLetter
// else myLetter doesn't match indexed chosenSong
// push myLetter to incorrectLetter
document.onkeydown = function (event) {
    var myLetter = event.key;
    // console.log(myLetter)

    console.log(randomSong.indexOf(myLetter));

    // OLD CODE THAT SORTA WORKED 
    // for (var j = 0; j < chosenSong.length; j++) {
    //     if (myLetter === chosenSong[j]) {
    //         chosenSong[j] = myLetter;
    //     } else {
    //         incorrectLetter.push(myLetter);
    //         domIncorrectLetters.textContent += myLetter;
    //     }
    // } 

    // for (var j = 0; j < chosenSong.length; j++) {
    //     if (myLetter === chosenSong[j]) {
    //         chosenSong[j] = myLetter;
    //     } else {
    //         incorrectLetter.push(myLetter);
    //         domIncorrectLetters.textContent += myLetter;
    //     }
    // }  

    var int = randomSong.indexOf(myLetter);


    // if my letter is found in the index of chosenSong
    if (int >= 0) { // if my letter is inside the word
        chosenSong[int] = myLetter;
        // domChosenLetters.textContent += myLetter;

        
    } else if (myLetter != undefined) {
        incorrectLetter.push(myLetter);
        domIncorrectLetters.textContent += myLetter + " ";
        guessesRemaining--; //decreases guessesRemaining only if guess is wrong
        domGuessesRemaining.textContent = guessesRemaining;
        //check for loss 
        if (guessesRemaining === 0) {
            // end game
            alert("You lost :( Refresh to play again!");
        }
    }
}


    // for (var j = 0; j < chosenSong.length; j++) {
    //     if (myLetter === chosenSong[j]) {
    //         chosenSong[j] = myLetter;
    //     } else {
    //         incorrectLetter.push(myLetter);
    //         domIncorrectLetters.textContent += myLetter;
    //     }
    // }  




    // NEW CODE THAT I WANT TO FULL WORKS
    //if my letter is found in the index of random song --> index of chosen word should equal my letter
//     if (randomSong.indexOf(myLetter) >= 0) {
//         chosenSong[randomSong.indexOf(myLetter)] = myLetter;
//     }
// }





// if myLetter ends up incorrect, go to incorrectLetter and decrease guessesRemaining

//if guessesRemaining === 0








//LATER var remainingLetters = songs.length;

















// Theme: Thank U Next
// Need:
// -Instructions (press any key to start)
// -wins: #of times guessed correctly (start at blank, number appears after first game and increases with each game)
//     -loses (same)
// -current word: _ _ _ (will be blank with dashes in the beginning, correct guesses will reveal SVGPathSegLinetoVerticalRel)
// -number guesses remaining: (start at blank, number appears after first key and decreases, DOES NOT GET AFFECTED by repeated letters, set to 0 at new game)
// -letters guessed: stores bank of letters guessed by user, clears after each game
// -button optional

// I want the game to be zeroed out on initial load and (to begin when a key is pressed)
