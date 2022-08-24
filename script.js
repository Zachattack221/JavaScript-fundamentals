// Set up variables to divide content more explicitly
var state = 'begin';

var beginEl = document.querySelector("#begin");
var testingEl = document.querySelector("#testing");
var finishEl = document.querySelector("#finish");
var scoringEl = document.querySelector("#scoring");

var startBtn = document.querySelector("#start-button");
var backBtn = document.querySelector("#back-button");
var clearBtn = document.querySelector("#clear-button");
var finishBtn = document.querySelector("#finish-button");
var viewScoresBtn = document.querySelector("#view-scores");

var questionEl = document.querySelector("#question-name");
var questionOptionEl = document.querySelector("#questions-option");
// made question order an array of objects, with possible answers in an array format for each question
var questionOrder = [
    { title: 'First', possibleAnswers: [1, 2, 3, 4], correct: 3 },
    { title: 'Second', possibleAnswers: [5, 6, 7, 8], correct: 3 },
    { title: 'Third', possibleAnswers: [9, 10, 11, 12], correct: 3 },
    { title: 'Fourth', possibleAnswers: [13, 14, 15, 16], correct: 3 },
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
    if (state === 'scoring') {
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
    num = 0;
    init();
    questionOptionEl.innerHTML = "";
}

// TODO: create different event listeners for start button, answer selection during quiz, and submit button for initials to high score board

// start quiz - start timer, present next question
// event listener - on submit to go to next question?
// score validator - if correct go to next question, else subtract 10
// function to handle time
// high score - local storage?
// <!-- TODO: add some sort of form element to store high scores -->

// <!-- created buttons to navigate back to quiz start and to reset stored scores -->

startBtn.addEventListener("click", function () {
    state = 'testing';
    displayQuestion();
    displayState();

    // add function to start timer 
});

// var answerBtn = document.createElement("button");
// answerBtn.addEventListener("click", function () {
//     if (num < questionOrder[num].possibleAnswers.length){
//         num + 1;
//         displayQuestion();
//     }
//     else {
//     state = "finish"
//     // end timer function
// }
// });


function displayQuestion() {
    state = 'testing';
    console.log(num);    // if (questionOrder[num].possibleAnswers.length ==)
    var question = questionOrder[num];
    questionOptionEl.innerHTML = null;
    questionEl.textContent = question.title;
    for (answer of question.possibleAnswers) {
        var answerBtn = document.createElement("button");
        answerBtn.textContent = answer;
        answerBtn.addEventListener("click", checkAnswers);
        questionOptionEl.appendChild(answerBtn);
        answerBtn.classList.add('answerbtn');
    };
    
};

function checkAnswers () {
    if (num >= questionOrder[num].possibleAnswers.length - 1) {
                state = 'finish';
                displayState();
        } else {
            num++;
            displayQuestion();
        }
}




// blah.addEventListener("click", function (event){
    //     var element = event.target;
    //     if (element.matches('h2')) {
//         var index = Array.from(element.parentElement.children).indexOf(element);
//         console.log(index);
//         num++;

//     if (num > questionOrder[num].possibleAnswers.length) {
    //         state = 'finish';
    //         displayState();
    //     }
    //     else {
        //         displayQuestion();
        //     }
        // }
        // });
        // for (var i = 0; i < questionOrder[num].possibleAnswers.length; i++) {
            //     answerBtn.innerHTML = questionOrder[num].possibleAnswers[i];
            // }



// add event listener to answerBtn (will probably need to dynamically add an ID or class to target)
// probably will need if (num < questionOrder.length) else display finish state
// when answer btn clicked add + 1 to num and call displayQuestion again

finishBtn.addEventListener("click", function () {
    state = "scoring";
    displayState();
});


backBtn.addEventListener("click", function () {
    reset();
});

viewScoresBtn.addEventListener("click", function () {
    state = "scoring"
    displayState();
});


// function startTimer() {
//     timer = setInterval(() => {
//         timerCount
//     }, interval);
// }


init();



// var answerBtn = document.querySelector(".choices");
// answerBtn.addEventListener("click", function () {
//     displayQuestion();
// });
// clearBtn needs to trigger function to clear local storage
// clearBtn.addEventListener("click", function() {

// });

// TODO: attach timer to quiz, initialized with start button element, set to subtract remaining time from counter with incorrect answer
// TODO: trigger timer to end quiz when time = 0



// Set init() to trigger displayState() 

// Write out each question and possible answers to pull from and insert
// first : Accepted data types used within JavaScript DO NOT include:
// 1. booleans 2. strings 3. numbers 4. alerts   correct : 4

// second : The condition in an if/else statement is enclosed within ________.
// 1. square brackets 2. quotation marks 3. curly brackets 4. parentheses    correct : 4

// third : String values must be enclosed within _______ when being assigned to variables.
// 1. parentheses 2. commas 3. curly brackets 4. quotation marks    correct : 4

// fourth : Arrays in JavaScript can be used to store _______ .
// 1. booleans 2. other arrays 3. numbers and strings 4. all of the above    correct: 4