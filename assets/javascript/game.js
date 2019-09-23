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

// Need to generate a random number to be the target between 19-120
function targetNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);;
};
var generatedTargetNum = targetNum(19, 120);
console.log("target number: " + generatedTargetNum);


// CRYSTALS ===================================================================================================
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

// Create a score that increases by the number added by the crystals==================================
var theTotal = 0;
$('input').click(function () {
    theTotal = Number(theTotal) + Number($(this).val());
    $('#score-number').text(theTotal);


    // User wins if generatedTargetNum === theTotal
    if (generatedTargetNum === theTotal) {
        alert("you won!")
        wins++;
        $('#wins').text("Wins: " + wins);
        reset();
    }

    // User looses if totalScore > generatedTargetNum
    if (generatedTargetNum < theTotal) {
        alert("you lost!")
        losses++;
        $('#losses').text("Losses: " + losses);
        reset();
    };

});


// Reset function when user wins or looses
function reset() {
    // reset total score
    theTotal = 0;
    $('#score-number').text("0");

    //reset target number 
    function targetNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);;
    };
    generatedTargetNum = targetNum(19, 120);
    console.log("target number: " + generatedTargetNum);
    document.getElementById("guessingNumber").innerHTML = generatedTargetNum;

    // reset crystal numbers
    random = [];
    for (var i = 0; i < 4; i++) {
        random.push(Math.floor(Math.random() * 13));
        console.log(random);
    }
    //Assigning value to crystal 0
    crystal0 = random[0];
    console.log("crystal0: " + crystal0);
    // Assigning value to crystal 1
    crystal1 = random[1];
    console.log("crystal1: " + crystal1);
    // Assigning value to crystal 2
    crystal2 = random[2];
    console.log("crystal2: " + crystal2);
    // Assigning value to crystal 3
    crystal3 = random[3];
    console.log("crystal3: " + crystal3);
    // running functions to push value to html
    crystal0Value();
    crystal1Value();
    crystal2Value();
    crystal3Value();
}

// document.getElementById('score-number').innerHTML = totalScore;
document.getElementById("guessingNumber").innerHTML = generatedTargetNum;


// Need to count wins and losses
// document.querySelector('#losses').innerHTML = "Losses: " + losses;
// document.querySelector('#wins').innerHTML = "Wins: " + wins;

