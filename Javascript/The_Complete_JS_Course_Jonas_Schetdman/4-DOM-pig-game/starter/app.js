/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0]; // * Scores of the two Players
roundScore = 0; // * Points accumulated by dice Rolled
activePlayer = 0; // *indentification of the player



// todo make the dice disappear for the beginnig of the game
document.querySelector(`.dice`).style.display = 'none';

// todo  reset scores 
resetScores();


//#region  btn-roll
document.querySelector('.btn-roll').addEventListener('click', function(){

    // todo Generate a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // todo display the number 
    var diceDom = document.querySelector(`.dice`);
    diceDom.style.display = 'block';

    document.querySelector('img').src = `dice-${dice}.png`

    // todo Update the round Score when the rolled number is not 1
    if (dice > 1) {
        // todo add score
        roundScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
        // scores[activePlayer] = parseInt(document.getElementById(`current-${activePlayer}`).textContent)
        // scores[activePlayer] = dice;
    } else {
        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active')
        // document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
        // todo change player
        activePlayer ? activePlayer = 0: activePlayer = 1;
        roundScore = 0;

        // *All Current score at zero
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active')
        // document.querySelector(`.player-${activePlayer}-panel`).classList.add('active')

        document.querySelector(`.dice`).style.display = 'none';
    }
})

//#endregion

//#region Private Helpers

function resetScores() {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

//#endregion

//* remarks  ON Program

// todo Make the dice change the content of the active Player score per rolling
//! first Way 
//document.querySelector(`#current-${activePlayer}`).textContent = dice;
// ? second Way innerHtml document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}</em>`
