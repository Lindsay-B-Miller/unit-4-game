// VARIABLES =================================================================================================
var wins = 0;
var losses = 0;
var crystal = [];
var crystal0;
var crystal1;
var crystal3;
var crystal3;
var random = [];
var totalScore;

// Need to generate a random number to be the target between 19-120
function targetNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);;
};
var generatedTargetNum = targetNum(19, 120);
console.log(generatedTargetNum);

// Need to count wins and losses
document.querySelector('#losses').innerHTML = "Losses: " + losses;
document.querySelector('#wins').innerHTML = "Wins: " + wins;


// CRYSTALS ===================================================================================
// Generate four random numbers between 1-12, stored in var random
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12);
    console.log(random);
}
// Asssign each number to a crystal
// for (var i = 0; i < random.length; i++) {
//     crystal[i].push(random[i])
//     console.log(crystal);
// }

random[0].push(crystal0);
console.log(crystal0);

// crystal[i].push(random[i])


// console.log(crystal[i])

// On click event to record when a crystal has been clicked and the value of that crystal 

//trying just one crystal
$("#crystal1").on("click", function () {
    console.log($(this).val());
});

//trying loop for all crystals
for (var i = 0; i < 4; i++) {
    $("#crystal[i]").on("click", function () {
        console.log($(this).val());
    });
}

// Create a score that increases by the number added by the crystals

// User wins if generatedTargetNum === totalScore
if (generatedTargetNum === totalScore) {
    wins++;
    reset()
}

// User looses if totalScore > generatedTargetNum
if (generatedTargetNum < totalScore) {
    losses++;
    reset()
};

// Reset function when user wins or looses
function reset() {
    // copy in working loop for creating generatedTargetNum
    // copy in working loop for reassigning crystals new numbers
    // userScore = 0;

}

