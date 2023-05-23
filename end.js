const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const highScoreBtn = document.getElementById('highScoreBtn');

const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

const MAX_HIGHSCORES = 5;
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; //make into an array using JSON.parse()


username.addEventListener('keyup', (e) => {
    saveScoreBtn.disabled = !username.value;
});


saveScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    username.value = '';
    finalScore.innerText = 0;

    //SAVE ONLY TOP 5 SCORES, REMOVE LOWER SCORES
    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5); //cut-off all lowest scores

    localStorage.setItem('highScores', JSON.stringify(highScores)); //update high scores, make into string by using JSON.stringigy()
    username.style.display = "none";
    saveScoreBtn.style.display = "none";
    finalScore.style.display = "none";
    highScoreBtn.style.display = "block";
};

