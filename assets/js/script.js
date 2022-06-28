// Array that stores all questions
var storedQuestions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed within ___.",
    "Arrays in JavaScript can be used to store ___.",
    "String values must be enclosed within ___ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
];

// Array that stores all answer choices
var storedAnswerChoices = [
    "1. Strings", "2. Booleans", "3. Alerts", "4. Numbers",
    "1. Quotes", "2. Curly brackets", "3. Parentheses", "4. Square brackets",
    "1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above",
    "1. Commas", "2. Curly brackets", "3. Quotes", "4. Parentheses",
    "1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. console.log",
];

// Array that stores all the correct answers to the questions
var storedCorrectAnswerChoices = [storedAnswerChoices[2], storedAnswerChoices[5], storedAnswerChoices[11], storedAnswerChoices[14], storedAnswerChoices[19]];

// Array that stores the specific slot of each answer choice
var answerChoiceSlots = ["#first-answer", "#second-answer", "#third-answer", "#fourth-answer"];

// Variable that tracks question number
var questionTracker = 0;

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

    // Assigns each answer choice a slot (based on button id) and a string from storedAnswerChoices
    for (var i = answerTracker; i < answerTracker + 4; i++) {
        answerChoice = document.querySelector(answerChoiceSlots[i]);
        answerChoice.textContent = storedAnswerChoices[i];
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
startQuizBtn.addEventListener("click", startQuiz);

// Hides the start-page and displays the first question
function startQuiz () {
    startPage.setAttribute("class", "hidden");
    questionPage.removeAttribute("class", "hidden");
    displayNextQuestion();
}

var score = 0;

// IN PROGRESS... 
function scoringQuiz (event) {

    // User's selected answer choice 
    var chosenAnswer = event.target.innerText;

    // If user's selected answer choice is the correct answer...
    if (chosenAnswer === storedCorrectAnswerChoices[questionTracker]) {
        // Keep count add points to score
        score += 10;
        console.log("Yay!");
        console.log(score);
    } else {
        // Deduct timer -10 seconds
        console.log("Oh no...");
    }
    if (questionTracker < storedQuestions.length) {
        questionTracker++;
        displayNextQuestion();
    } else {
        questionPage.setAttribute("class", "hidden");
        resultPage.removeAttribute("class", "hidden");
    }
}

// MAY NEED TO CLEAN UP...
var answerButton1 = document.querySelector(answerChoiceSlots[0]);
var answerButton2 = document.querySelector(answerChoiceSlots[1]);
var answerButton3 = document.querySelector(answerChoiceSlots[2]);
var answerButton4 = document.querySelector(answerChoiceSlots[3]);

// MAY NEED TO CLEAN UP...
answerButton1.addEventListener("click", scoringQuiz);
answerButton2.addEventListener("click", scoringQuiz);
answerButton3.addEventListener("click", scoringQuiz);
answerButton4.addEventListener("click", scoringQuiz);



// question-page rotation - how does first page of question display and their answer choices?

// Clicking on an answer choice should move to the next question



// var pages = ["question-1", "question-2", "question-3", "question-4", "question-5", "result-page"];
// // default first page is start-page

// function nextPage (page) {
//     // If this is the page, then make it change to the next page
//     for (var i = 0; i < pages.length-1; i++) {
//         // if it is this page, then change to next page, but if it is the result-page, leave it there
//         if (page === pages[i] && page != pages[pages.length-1]) {
//             return page = pages[i + 1];
//         }
//     }
// }

// console.log(nextPage("start-page"));
// console.log(nextPage("question-5"));
// Clicking "Start Quiz" will change start-page to question-page
// Clicking any answer-choice will move to next question-page
// Clicking last question-page will move to result-page
// If timer is over before reaching the end of the question, move to result-page
