var highscoreList = document.querySelector("#highscore-list");
var clearHighscore = document.querySelector("#clear-highscore");

if (highscoreList) {
    highscoreList.addEventListener("load", displayHighscores());
}

if (clearHighscore) {
    clearHighscore.addEventListener("click", clearList);
}

// Displays the table of highscores
function displayHighscores() {

    // Grabs the existing players' initials and score
    var playerTrack = JSON.parse(localStorage.getItem("players"));

    if (playerTrack === null) {
        playerTrack = [];
    }

    // Creates new li elements to contain the players' initials and scores and adds them to highscore table
    for (var i = 0; i < playerTrack.length; i++) {        
        var li = document.createElement("li");
        li.textContent = playerTrack[i].initials + " - " + playerTrack[i].score;
        highscoreList.appendChild(li);
    }
}

// Clears the highscore list once clicked
function clearList () {
    localStorage.clear();
    var childrenCount = highscoreList.children.length;

    // Loops through li elements and removes them
    for (var i = 0; i < childrenCount; i++) {
        highscoreList.removeChild(highscoreList.children[0]);
    }
}
