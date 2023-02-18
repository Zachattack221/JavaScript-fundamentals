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
var highScoresEl = document.querySelector('#high-scores');

var initialsEl = document.querySelector('#initials');
var userScore = document.querySelector("#user-score");
var timerElement = document.querySelector("#timer");
var questionEl = document.querySelector("#question-name");
var questionOptionEl = document.querySelector("#questions-option");
// made question order an array of objects, with possible answers in an array format for each question
var questionOrder = [
    { title: 'Accepted data types used within JavaScript DO NOT include: ', possibleAnswers: ['1. booleans', '2. strings', '3. numbers', '4. alerts'], correct: '4. alerts' },
    { title: 'The condition in an if/else statement is enclosed within ________.', possibleAnswers: ['1. square brackets', '2. quotation marks', '3. curly brackets', '4. parentheses'], correct: '4. parentheses' },
    { title: 'String values must be enclosed within _______ when being assigned to variables.', possibleAnswers: ['1. parentheses', '2. commas', '3. curly brackets', '4. quotation marks'], correct: '4. quotation marks' },
    { title: 'Arrays in JavaScript can be used to store _______ .', possibleAnswers: ['1. booleans', '2. other arrays', '3. numbers and strings', '4. all of the above'], correct: '4. all of the above' }
];

var timerCount = 60;
var num = 0;
var score;
var highscores = [];
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
        score = timerCount <= 0 ? 0 : timerCount;
        userScore.textContent = "You scored: " + score;
        clearInterval(timer);
        timerElement.textContent = '';
        timerCount = 60;
        beginEl.style.display = 'none';
        testing.style.display = 'none';
        finishEl.style.display = 'block';
        scoringEl.style.display = 'none';
    }
    if (state === 'scoring') {
        getHighScore();
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


startBtn.addEventListener("click", function () {
    state = 'testing';
    displayQuestion();
    displayState();
    startTimer();
});

function displayQuestion() {
    state = 'testing';
    var question = questionOrder[num];
    questionOptionEl.innerHTML = null;
    questionEl.textContent = question.title;
    for (answer of question.possibleAnswers) {
        var answerBtn = document.createElement("button");
        answerBtn.textContent = answer;
        answerBtn.addEventListener("click", checkAnswers);
        questionOptionEl.appendChild(answerBtn);
        // answerBtn.classList.add('answerbtn');
    };

};

function checkAnswers(event) {
    var selected = event.target.textContent;
    var correctAnswer = questionOrder[num].correct;
    console.log(selected);
    console.log(correctAnswer);
    if (num >= questionOrder[num].possibleAnswers.length - 1) {
        state = 'finish';
        displayState();
    } else if (selected === correctAnswer) {
        num++;
        displayQuestion();
    } else if (selected !== correctAnswer) {
        timerCount = timerCount - 5;
        if (timerCount <= 0) {
            state = 'finish';
            displayState();
        } else {
            num++;
            displayQuestion();
        }
    }
}

clearBtn.addEventListener("click", function () {
    clearInterval(timer);
    window.localStorage.removeItem('highscores');
    highScoresEl.textContent = "";
    storedScore = [];
    highscores = [];
});

finishBtn.addEventListener("click", function () {
    setHighScore();
    state = "scoring";
    displayState();
});


backBtn.addEventListener("click", function () {
    reset();
    clearInterval(timer);
    timerElement.textContent = '';
});

viewScoresBtn.addEventListener("click", function () {
    state = "scoring"
    clearInterval(timer);
    timerElement.textContent = '';
    getHighScore()
    displayState();
});


function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            state = "finish";
            displayState();
        }
    }, 1000);
}

var storedScore = [];
function setHighScore() {
    var initials = initialsEl.value;
    var person = { "initials": initials, "score": score };
    storedScore.push(person);
    localStorage.setItem("highscores", JSON.stringify(storedScore));
    console.log(storedScore)
}

function getHighScore() {
    console.log(storedScore)
    highScoresEl.textContent = "";
    highscores = [];
    highscores = JSON.parse(localStorage.getItem("highscores"));
    if (highscores !== null) {
        for (var i = 0; i < highscores.length; i++) {
            var listEl = document.createElement("li");
            listEl.textContent = highscores[i].initials + " : " + highscores[i].score;
            highScoresEl.append(listEl);
        }
    }

}

// Set init() to trigger displayState() 
init();


