//variables to dynamically change displayed HTML
var domChosenLetters = document.getElementById("domChosenLetters");
var domWins = document.getElementById("domWins");
var domLoses = document.getElementById("domLoses");
var domGuessesRemaining = document.getElementById("domGuessesRemaining");
var domIncorrectLetters = document.getElementById("domIncorrectLetters");

var wins = 0;
var loses = 0;


var tunSongs = ["imagine", "needy", "nasa", "bloodline", "fakesmile", "badidea", "makeup", "ghostin", "inmyhead", "rings", "thankunext", "imbored"]; // declare an array of words
var randomSong = tunSongs[Math.floor(Math.random() * tunSongs.length)]; // app stores randomly chosen word as alphabet
console.log(randomSong);


var chosenSong = []; // declare array storing indexes of chosen word's letters as underscores


var incorrectLetter = []; // store letters that don't match chosenWord
var guessesRemaining = randomSong.length; // declare starting counter


// loop through chosen word and create matching underscores for its length
for (var i = 0; i < randomSong.length; i++) {
    chosenSong[i] = "_ ";
    domChosenLetters.textContent += chosenSong[i];
}
console.log(chosenSong);



// --------------------------------------------START OF GAME LOOP triggered by pressing key---------------------------------------

document.onkeyup = function (event) {
    var myLetter = event.key; // store pressed key in myLetter (string)
    // console.log(myLetter)
    // console.log(randomSong.indexOf(myLetter));

    var intOfMyLetter = randomSong.indexOf(myLetter); // stores value of myLetter dependent on if indexed in randomSong
    console.log(intOfMyLetter + "intofmyletter");

    // if my letter is found in the index of randomSong
    if (intOfMyLetter >= 0) { // if my letter is inside the word
        //add loop through array for multiple letters -----------------CASE FOR MULTIPLE CORRECT LETTERS
        for (var j = 0; j < randomSong.length; j++) {
            if (randomSong[j] === myLetter) { //if myLetter(s) is found in any index of randomSong(s)
                chosenSong[j] = myLetter       // matching indexes of chosenSong(underscores) change to myLetter
            }
        }

        chosenSong.splice(intOfMyLetter, 1, myLetter);
        var strSong = chosenSong.join("");
        console.log(chosenSong + "win condition");
        domChosenLetters.textContent = strSong;

        if (strSong === randomSong) {
            // alert("You won! Wanna keep playing?");
            wins++;
            domWins.textContent = wins;
            // resetGame();
        }

    } else if (myLetter != undefined) { //as long as letter doesn't equal undefined
        incorrectLetter.push(myLetter);
        domIncorrectLetters.textContent += myLetter + " ";
        guessesRemaining--; //decreases guessesRemaining only if guess is wrong
        domGuessesRemaining.textContent = guessesRemaining;

        if (guessesRemaining === 0) { // check for loss
            alert("You lost :( Try Again?"); // end game
            loses++;
            domLoses.textContent = loses;
            resetGame();
        }
    }
}


//WINS
//if chosenSong (all underscores at first) === randomSong (string) <<< !!!!
//alert "You won! Wanna keep playing?"
//increment win
//change textContent to added win value
//call resetGame


// function win() {
//     if (chosenSong === randomSong) {
//         wins++;
//         alert("You won! Click Reset button to keep playing.");
//         domWins.textContent = wins;
//     }   
// }




// --------------------------------------------START OF RESET triggered by win/lose of game---------------------------------------
//reset song, incorrect letters, and 0 out guessesRemaining
function resetGame() {
    incorrectLetter = []; // 0s out incorrect letters
    domIncorrectLetters.textContent = incorrectLetter; // prints it to screen
    randomSong = tunSongs[Math.floor(Math.random() * tunSongs.length)] // randomizes song again
    console.log(randomSong);
    guessesRemaining = randomSong.length; // sets guesses remaining to new song length
    domGuessesRemaining.textContent = guessesRemaining;
    chosenSong = [];
    for (var i = 0; i < randomSong.length; i++) {
        chosenSong[i] = "_ ";
        domChosenLetters.textContent += chosenSong[i];
    }

    domChosenLetters.textContent = chosenSong.join("");

}



















// CREATE README AND ADD TO PORTFOLIO












// updates word by replacing underscores with letter guessed
// function correctLetter() {
//     document.getElementById("domChosenLetters").textContent = "";
//     for (var j = 0; j < chosenSong.randomSong.length; j++) {
//         document.getElementById("domChosenLetters").textContent += chosenSong.myLetter[j];
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



        // listen for letter pressed
    // store myLetter pressed 
    // loop through index of chosen word
    // if myLetter matches indexed letter
    // change chosenSong[i] = myLetter
    // else myLetter doesn't match indexed chosenSong
    // push myLetter to incorrectLetter
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




    // NEW CODE THAT I WANT TO FULL WORKS
    //if my letter is found in the index of random song --> index of chosen word should equal my letter
//     if (randomSong.indexOf(myLetter) >= 0) {
//         chosenSong[randomSong.indexOf(myLetter)] = myLetter;
//     }
// }



    // if statement game loop old code
   // chosenSong[intOfMyLetter] === myLetter; // indexed underscore will be my letter
        // domChosenLetters.textContent = myLetter[intOfMyLetter];
        // domChosenLetters.textContent = chosenSongmy[int];
        // domChosenLetters.textContent += myLetter;




//LOSES
//if guessesRemaining === 0
//add 1 point to lose
//alert "you lost. press the reset button to keep playing. Exit game to stop"

// function loses () {
//     if (guessesRemaining === 0) {
//         domLoses++;
//         alert("You lost :( Click Reset button to keep playing.");
//     }

// }











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
