/* ! todo   Programer: Didier Ukanda
            Date: 21 may 2019
            but : Look at the Games Rules
*/
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
var isGameOver = false;
initGame();

// todo make the dice disappear for the beginnig of the game
document.querySelector(`.dice`).style.display = 'none';

// todo  reset scores 
resetScores();


//#region  btn-roll
document.querySelector('.btn-roll').addEventListener('click', function(){
        if (!isGameOver) {

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
        // todo change player
        changePlayer();
    }
}
})

//#endregion


//#region Button Hold
document.querySelector('.btn-hold').addEventListener('click', function(){
if (!isGameOver) {
    
    // todo Add the current round Score to the Global score
    scores[activePlayer] += roundScore;
    console.log(scores[activePlayer]);
    
    // todo Update the UI 
    document.getElementById(`score-${activePlayer}`).textContent = String(scores[activePlayer]);

    // todo change Player
    // changePlayer();
    if (scores[activePlayer] >= 100) {
        isGameOver = !isGameOver;
        document.querySelector(`.dice`).style.display = 'none';
        document.getElementById(`name-${activePlayer}`).textContent = 'Winner';
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
    } else {
        changePlayer();
    }
}
})
//#endregion


document.querySelector('.btn-new').addEventListener('click', initGame)


//#region Private Helpers

function initGame() {
    isGameOver = false;
    activePlayer = 0;   // * Indentification of the player
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('winner');
        scores = [0, 0];    // * Scores of the two Players
        roundScore = 0;     // * Points accumulated by dice Rolled
    
        document.querySelector(`.player-0-panel`).classList.remove('active');
        document.querySelector(`.player-1-panel`).classList.remove('active');
        document.querySelector(`.player-0-panel`).classList.add('active');
    
        
        document.getElementById(`score-0`).textContent = scores[0]
        document.getElementById(`score-1`).textContent = scores[1]
        
        document.getElementById(`current-0`).textContent = scores[0]
        document.getElementById(`current-1`).textContent = scores[1]
        
        document.getElementById(`name-0`).textContent = 'Player 1';
        document.getElementById(`name-1`).textContent = 'Player 2';
    }

function resetScores() {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

function changePlayer() {
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active')
    // document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    roundScore = 0;
    // *All Current RoundScore at zero
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    // document.querySelector(`.player-${activePlayer}-panel`).classList.add('active')
    document.querySelector(`.dice`).style.display = 'none';
}



//* remarks  ON Program

// todo Make the dice change the content of the active Player score per rolling
//! first Way 
//document.querySelector(`#current-${activePlayer}`).textContent = dice;
// ? second Way innerHtml document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}</em>`
