// TODO: create different event listeners for start button, answer selection during quiz, and submit button for initials to high score board
// Set up variables to divide content more explicitly
var state = 'begin';

var beginEl = document.querySelector("#begin");
var testingEl = document.querySelector("#testing");
var finishEl = document.querySelector("#finish");
var questionOptionEl = document.querySelector("#question-option");
var questionEl = document.querySelector("#testing #question-name");
var questionOrder = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

// TODO: attach timer to quiz, initialized with start button element, set to subtract remaining time from counter with incorrect answer
// TODO: trigger timer to end quiz when time = 0
