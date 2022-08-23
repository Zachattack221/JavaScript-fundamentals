// Set up variables to divide content more explicitly
var state = 'begin';

var beginEl = document.querySelector("#begin");
var testingEl = document.querySelector("#testing");
var finishEl = document.querySelector("#finish");
var questionOptionEl = document.querySelector("#question-option");
var questionEl = document.querySelector("#testing #question-name");
var questionOrder = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
var num = 0;

// set up logic to switch display state between begin, testing, and finish sections/ids

function displayState() {
    if (state === 'begin') {
        beginEl.style.display = 'block';
        testing.style.display = 'none';
        finishEl.style.display = 'none';
    }
    if (state === 'testing') {
        beginEl.style.display = 'none';
        testing.style.display = 'block';
        finishEl.style.display = 'none';
    }
    if (state === 'finish') {
        beginEl.style.display = 'none';
        testing.style.display = 'none';
        finishEl.style.display = 'block';
    }
}
// set logic to  run displayState() function on init()

function init() {
    displayState();
}

function reset() {
    state = 'begin';
    init();
}

// TODO: create different event listeners for start button, answer selection during quiz, and submit button for initials to high score board

// start quiz - start timer, present next question
// event listener - on submit to go to next question?
// score validator - if correct go to next question, else subtract 10
// function to handle time
// high score - local storage?


function displayQuestion() {
    state = 'testing';
    var questionName = questionOrder[Num]
}

// TODO: attach timer to quiz, initialized with start button element, set to subtract remaining time from counter with incorrect answer
// TODO: trigger timer to end quiz when time = 0



// Set init() to trigger displayState() 
init();