// VARIABLES =================================================================================================
var wins = 0;
var losses = 0;
var crystals = [];
var crystal0;
var crystal1;
var crystal3;
var crystal3;
var random = [];
var arrayClicks = [];
var totalScore = 0;

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
    random.push(Math.floor(Math.random() * 13));
    console.log(random);
}

// Asssign each number to a crystal===================================================

//Assigning value to crystal 0
var crystal0 = random[0];
console.log("crystal0: " + crystal0);
// Assigning value to crystal 1
var crystal1 = random[1];
console.log("crystal1: " + crystal1);
// Assigning value to crystal 2
var crystal2 = random[2];
console.log("crystal2: " + crystal2);
// Assigning value to crystal 3
var crystal3 = random[3];
console.log("crystal3: " + crystal3);

//CRYSTAL 0 function for pushing value onto button in HTML
function crystal0Value() {
    document.getElementById("crystal0").value = crystal0;
};
crystal0Value();
//CRYSTAL 1 function for pushing value onto button in HTML
function crystal1Value() {
    document.getElementById("crystal1").value = crystal1;
};
crystal1Value();
//CRYSTAL 2 function for pushing value onto button in HTML
function crystal2Value() {
    document.getElementById("crystal2").value = crystal2;
};
crystal2Value();
//CRYSTAL 3 function for pushing value onto button in HTML
function crystal3Value() {
    document.getElementById("crystal3").value = crystal3;
};
crystal3Value();




//array of all clicks occurred
console.log(arrayClicks)

// Create a score that increases by the number added by the crystals===================================
// Add all elements of arrayClick together

var theTotal = 0;
$('button').click(function () {
    theTotal = Number(theTotal) + Number($(this).val());
    $('#score-number').text("Total: " + theTotal);
});

$('#score-number').text("Total: " + theTotal);



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

document.getElementById('score-number').innerHTML = totalScore;