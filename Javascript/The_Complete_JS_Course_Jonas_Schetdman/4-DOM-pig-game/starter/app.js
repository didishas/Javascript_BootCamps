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

dice = Math.floor(Math.random() * 6) + 1;

// todo Make the dice change the content of the active Player score per rolling
//! first Way 
document.querySelector(`#current-${activePlayer}`).textContent = dice;
// ? second Way innerHtml document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}</em>`

// todo make the dice disappear for the beginnig of the game
document.querySelector(`.dice`).style.display = 'none';

