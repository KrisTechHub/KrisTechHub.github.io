const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');

const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', (e) => {
    saveScoreBtn.disabled = !username.value;
});

saveScore = (e) => {
    console.log('saved!');
    e.preventDefault();

};

