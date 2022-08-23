// Set up variables to divide content more explicitly
var state = 'begin';

var beginEl = document.querySelector("#begin");
var testingEl = document.querySelector("#testing");
var finishEl = document.querySelector("#finish");
var scoringEl = document.querySelector("high-scores");
var questionOptionEl = document.querySelector("#question-option");
var questionEl = document.querySelector("#testing #question-name");
// made question order an array of objects, with possible answers in an array format for each question
var questionOrder = [
    {title:'First', possibleAnswers: [1,2,3,4]}, 
    {title:'Second', possibleAnswers: [1,2,3,4]},
    {title:'Third', possibleAnswers: [1,2,3,4]},
    {title:'Fourth', possibleAnswers: [1,2,3,4]},
];

var num = 0;

// set up logic to switch display state between begin, testing, finish, and scores

function displayState() {
    if (state === 'begin') {
        beginEl.style.display = 'block';
        testing.style.display = 'none';
        finishEl.style.display = 'none';
        scoringEl.style.display = 'none';
    }
    if (state === 'testing') {
        beginEl.style.display = 'none';
        testing.style.display = 'block';
        finishEl.style.display = 'none';
        scoringEl.style.display = 'none';
    }
    if (state === 'finish') {
        beginEl.style.display = 'none';
        testing.style.display = 'none';
        finishEl.style.display = 'block';
        scoringEl.style.display = 'none';
    }
    if (state === 'scores') {
        beginEl.style.display = 'none';
        testing.style.display = 'none';
        finishEl.style.display = 'none';
        scoringEl.style.display = 'block';
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
// <!-- TODO: add some sort of form element to store high scores -->
// <!-- create buttons to navigate back to quiz start and to reset stored scores -->

function displayQuestion() {
    state = 'testing';
    var questionName = questionOrder[Num]
}


startBtn

// function for quiz state needs ha
// TODO: attach timer to quiz, initialized with start button element, set to subtract remaining time from counter with incorrect answer
// TODO: trigger timer to end quiz when time = 0



// Set init() to trigger displayState() 
init();