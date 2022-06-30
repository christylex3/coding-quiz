var startQuizBtn = document.querySelector("#start-quiz");
var startPage = document.querySelector("#start-page");
var questionPage = document.querySelector("#question-page");
var resultPage = document.querySelector("#result-page");
var feedback = document.querySelector(".feedback");
var timerInfo = document.querySelector("#timer");
var answerButton1 = document.querySelector(answerChoiceSlots[0]);
var answerButton2 = document.querySelector(answerChoiceSlots[1]);
var answerButton3 = document.querySelector(answerChoiceSlots[2]);
var answerButton4 = document.querySelector(answerChoiceSlots[3]);
var finalScore = document.querySelector("#final-score");
var userInitials = document.getElementById("user-initials");
var submitBtn = document.querySelector("#submit");
var score = 0;
var overallTimer = 75;
var overallScore;

// Array that stores all questions
var storedQuestions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed within ___.",
    "Arrays in JavaScript can be used to store ___.",
    "String values must be enclosed within ___ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
];

// Array that stores all answer choices
var storedAnswers = [
    "1. Strings", "2. Booleans", "3. Alerts", "4. Numbers",
    "1. Quotes", "2. Curly brackets", "3. Parentheses", "4. Square brackets",
    "1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above",
    "1. Commas", "2. Curly brackets", "3. Quotes", "4. Parentheses",
    "1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. console.log",
];

// Array that stores all the correct answers to the questions
var storedCorrectAns = [storedAnswers[2], storedAnswers[5], storedAnswers[11], storedAnswers[14], storedAnswers[19]];

// Array that stores the specific slot of each answer choice
var answerChoiceSlots = ["#first-answer", "#second-answer", "#third-answer", "#fourth-answer"];

// Variable that tracks the current question number
var questionTracker = 0;

// Clicking on start quiz button will call the startQuiz function
if (startQuizBtn) {
    startQuizBtn.addEventListener("click", startQuiz);
}

if (answerButton1) {
    answerButton1.addEventListener("click", gradingQuiz);
}

if (answerButton2) {
    answerButton2.addEventListener("click", gradingQuiz);
}

if (answerButton3) {
    answerButton3.addEventListener("click", gradingQuiz);
}

if (answerButton4) {
    answerButton4.addEventListener("click", gradingQuiz);
}

if (submitBtn) {
    submitBtn.addEventListener("click", savedPlayerInfo);
}

// Displays the question on screen
function displayQuestion () {

    // Always set reset question when method is called
    var question = "";

    // Question will display as the h2 element under #question-page
    question = document.querySelector("#question");

    // Question's text is grabbed from the array, 'storedQuestions'
    question.textContent = storedQuestions[questionTracker];
}

// Displays the corresponding answer choices for the current question
function displayAnswerChoices() {

    // Resets answer choices for the question
    var answerChoice = "";
    var answerTracker = questionTracker * 4;
    var slotIndex = 0;

    // Assigns each answer choice a slot (based on button id) and a string from storedAnswers
    for (var i = answerTracker; i < answerTracker + 4; i++) {
        answerChoice = document.querySelector(answerChoiceSlots[slotIndex]);
        answerChoice.textContent = storedAnswers[i];
        slotIndex++;
    }
}

// Displays the next question and set of answer choices
function displayNextQuestion () {
    displayQuestion();
    displayAnswerChoices();
}

// Hides the start-page, starts quiz's timer, and displays the first question 
function startQuiz () {
    startPage.classList.add("hidden");
    questionPage.classList.remove("hidden");
    quizTimer();
    displayNextQuestion();
}

// The quiz's timer is set to have 75 seconds and decrements
function quizTimer() {
    var quizTimerInterval = setInterval(function() {
        overallTimer--;
        timerInfo.textContent = "Time: " + overallTimer;

        // Timer stops when user answers all question or when the timer runs out
        if (overallTimer === 0 || questionTracker > 4) {
            displayResult();
            clearInterval(quizTimerInterval);
        }
    }, 1000);
}

// Grades the user when they take the quiz
function gradingQuiz (event) {

    // User's selected answer choice 
    var chosenAnswer = event.target.innerText;
    feedback.textContent = "";

    // If user's selected answer choice is the correct answer...
    if (chosenAnswer === storedCorrectAns[questionTracker]) {

        // Informs user that they selected the correct answer and add points to score
        feedback.textContent = "Correct!";
        score += 10;
    } else {

        // Informs user they selected the wrong answer and penalizes user by deducting timer
        feedback.textContent = "Wrong!"
        overallTimer -= 10;
    }

    // Displays feedback and increments tracker for next question
    showFeedback(feedback);
    questionTracker++;

    // If not all questions are displayed, then continue to next question, or else, display results
    if (questionTracker < storedQuestions.length) {
        displayNextQuestion();
    } else {
        displayResult();
    }
}

// Tells user when they choose the correct or wrong answer
function showFeedback(feedback) {
    var timedFeedback = 1;
    feedback.classList.remove("hidden");

    // Feedback will show up for only one second and then hides
    var timerInterval = setInterval(function() {
        timedFeedback--;
        if (timedFeedback === 0) {
            clearInterval(timerInterval);
            feedback.classList.add("hidden");
        }
    }, 1000);
}

// Displays the result page and shows total score
function displayResult() {
    questionPage.classList.add("hidden");
    resultPage.classList.remove("hidden");

    // Calculates final score by correct answers plus remaining time
    overallScore = score + overallTimer;
    finalScore.textContent = "Your final score is " + overallScore;
}

// Adds new player's initials and score to local storage
function savedPlayerInfo () {

    // Grabs existing players
    var playerTrack = JSON.parse(localStorage.getItem("players"));

    // If there are no players before, make new array
    if (playerTrack === null) {
        playerTrack = [];
    }

    // Grabs new player's info
    var player = {
        initials: userInitials.value.trim(),
        score: overallScore
    };

    // Adds new player's info to the localStorage
    playerTrack.push(player);
    localStorage.setItem("players", JSON.stringify(playerTrack));

    navigateToScorePage();
}

// Navigates to highscore page
function navigateToScorePage() {
    window.location.href = "./highscore.html";
}