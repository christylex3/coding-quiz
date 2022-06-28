var startQuizBtn = document.querySelector("#start-quiz");
var startPage = document.querySelector("#start-page");
var questionPage = document.querySelector("#question-page");

// Clicking on start quiz button will hide the start-page and display the question-page
startQuizBtn.addEventListener("click", function() {
    startPage.setAttribute("class", "hidden");
    questionPage.removeAttribute("class", "hidden");
    // need to add timer to start
});



// Questions should be made into h2 elements in #question-page
var storedQuestions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed within ___.",
    "Arrays in JavaScript can be used to store ___.",
    "String values must be enclosed within ___ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
];

// Answer choices should be made into the buttons correspondingly
var storedAnswerChoices = [
    "1. Strings", // 0
    "2. Booleans", // 1
    "3. Alerts", // *** 2
    "4. Numbers", //3
    "1. Quotes", // 4
    "2. Curly brackets", // *** 5
    "3. Parentheses", //6
    "4. Square brackets", // 7
    "1. Numbers and strings", // 8
    "2. Other arrays", // 9
    "3. Booleans", //10
    "4. All of the above", // *** 11
    "1. Commas", // 12
    "2. Curly brackets",
    "3. Quotes", // *** 14
    "4. Parentheses",
    "1. JavaScript", // 16
    "2. Terminal/Bash",
    "3. For Loops",
    "4. console.log", // *** 19 
];

var storedCorrectAnswerChoices = [storedAnswerChoices[2], storedAnswerChoices[5], storedAnswerChoices[11], storedAnswerChoices[14], storedAnswerChoices[19]];
console.log(storedAnswerChoices[2]);
console.log(storedAnswerChoices[5]);
console.log(storedAnswerChoices[11]);
console.log(storedAnswerChoices[14]);
console.log(storedAnswerChoices[19]);
var answerChoice1 = document.querySelector("#first-answer");
var answerChoice2 = document.querySelector("#second-answer");
// answerChoice1.textContent(storedAnswerChoices[4]);
// answerChoice2.textContent(storedAnswerChoices[5]);


// How do I loop one by one 
// h2 elements

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
