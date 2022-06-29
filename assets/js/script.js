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

// Variable that tracks question number
var questionTracker = 0;

var answerButton1 = document.querySelector(answerChoiceSlots[0]);
var answerButton2 = document.querySelector(answerChoiceSlots[1]);
var answerButton3 = document.querySelector(answerChoiceSlots[2]);
var answerButton4 = document.querySelector(answerChoiceSlots[3]);

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


// Displays the question on screen
function displayQuestion () {

    // Always set reset question when method is called
    var question = "";

    // question will display as the h2 element under #question-page
    question = document.querySelector("#question");

    // question's text is grabbed from the array, 'storedQuestions'
    question.textContent = storedQuestions[questionTracker];
}

// Displays the corresponding answer choices with the question
function displayAnswerChoices() {

    // Always set reset answer choices when next question is displayed
    var answerChoice = "";
    var answerTracker = questionTracker * 4;
    var j = 0

    // Assigns each answer choice a slot (based on button id) and a string from storedAnswers
    for (var i = answerTracker; i < answerTracker + 4; i++) {
        answerChoice = document.querySelector(answerChoiceSlots[j]);
        answerChoice.textContent = storedAnswers[i];
        j++;
    }
}

// Displays the next question and set of answer choices
function displayNextQuestion () {
    displayQuestion();
    displayAnswerChoices();
}

var startQuizBtn = document.querySelector("#start-quiz");
var startPage = document.querySelector("#start-page");
var questionPage = document.querySelector("#question-page");
var resultPage = document.querySelector("#result-page");

// Clicking on start quiz button will call the startQuiz function
if (startQuizBtn) {
    startQuizBtn.addEventListener("click", startQuiz);
}

// Hides the start-page and displays the first question
function startQuiz () {
    startPage.classList.add("hidden");
    questionPage.classList.remove("hidden");
    quizTimer();
    displayNextQuestion();
}

var overallTimer = 75;
var timerInfo = document.querySelector("#timer");

// The quiz's timer is set to have 75 seconds and decrements
function quizTimer() {
    var quizTimerInterval = setInterval(function() {
        overallTimer--;
        timerInfo.textContent = "Time: " + overallTimer;

        // If timer runs out before user answers all question, take user to result-page
        if (overallTimer === 0 || questionTracker > 4) {
            displayResult();
            clearInterval(quizTimerInterval);
        }
    }, 1000);
}

var score = 0;
var feedback = document.querySelector(".feedback");

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

        // Informs user they selected correct answer and penalizes user by deducting timer
        feedback.textContent = "Wrong!"
        overallTimer -= 10;
    }
    showFeedback(feedback);
    questionTracker++;

    // If not all questions are displayed, then continue. Else, display results
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

    // Feedback will show up for only one second and then disappear
    var timerInterval = setInterval(function() {
        timedFeedback--;
        if (timedFeedback === 0) {
            clearInterval(timerInterval);
            feedback.classList.add("hidden");
        }
    }, 1000);
}

var finalScore = document.querySelector("#final-score");
var highscore;
// Displays the result page and shows total score
function displayResult() {
    questionPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
    highscore = score + overallTimer;
    finalScore.textContent = "Your final score is " + highscore;
}

var submitBtn = document.querySelector("#submit");
var userInitials = document.getElementById("user-initials");

if (submitBtn) {
    submitBtn.addEventListener("click", displayHighscores);
}

var initialsList = [];
var highscoreList = [];
var list = docment.querySelector("#highscore-list");
console.log(list);
// var list = document.createElement("ol");

function displayHighscores() {
    initialsList.push(userInitials.value);
    highscoreList.push(highscore);
    for (var i = 0; i < initialsList.length; i++) {
        var li = document.createElement("li");
        li.textContent(initialsList[i] + " - " + highscoreList[i]);
        list.appendChild(li);
    }
    // Create ordered list element
    // Create ordered list items
    // Add text for list items / loop through array to 
}