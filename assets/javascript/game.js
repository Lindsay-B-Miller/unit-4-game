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

//function for pushing value onto button in HTML
function buttonValue() {
    document.getElementById("crystal0").value = crystal0;
};
buttonValue();


// On click event to record when a crystal has been clicked and the value of that crystal================================

//Grabs value on click for crystal 0
$("#crystal0").on("click", function () {
    // console.log(crystal0 + "clicked crystal0");
    console.log("crystal0: " + $(this).val());
    arrayClicks.push(crystal0);
    // totalScore = (crystal0 + valueOf(totalScore));
    // console.log("total score: " + totalScore);
});
//Grabs value on click for crystal 1
$("#crystal1").on("click", function () {
    console.log(crystal1 + "clicked crystal1");
    arrayClicks.push(crystal1);
});
//Grabs value on click for crystal 2
$("#crystal2").on("click", function () {
    console.log(crystal2 + "clicked crystal2");
    arrayClicks.push(crystal2);
});
//Grabs value on click for crystal 3
$("#crystal3").on("click", function () {
    console.log(crystal3 + "clicked crystal3");
    arrayClicks.push(crystal3);
});



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