var highscoreList = document.querySelector("#highscore-list");

if (highscoreList) {
    highscoreList.addEventListener("load", displayHighscores());
}

function displayHighscores() {

    console.log("highscore here");


    for (var i = 0; i < 5; i++) {
        var playerInfo = JSON.parse(localStorage.getItem("player"));
        console.log(playerInfo);
    }
}
