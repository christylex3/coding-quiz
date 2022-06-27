var startQuizBtn = document.querySelector("#start-quiz");
var startPage = document.querySelector("#start-page");
var questionPage = document.querySelector("#question-page");

// Clicking on start quiz button will hide the start-page and display the question-page
startQuizBtn.addEventListener("click", function() {
    startPage.setAttribute("class", "hidden");
    questionPage.removeAttribute("class", "hidden");
});


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
