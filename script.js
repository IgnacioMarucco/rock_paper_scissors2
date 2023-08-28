"use strict";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function getPlayerChoice() {
  return prompt('Rock, Paper or scissors?', 'rock').toLowerCase();
}

function playRound(computerChoice, playerChoice) {

  if (computerChoice === playerChoice) {
    return 'Draw.';
  } else if ((computerChoice === 'rock' && playerChoice === 'paper') || 
            (computerChoice === 'paper' && playerChoice === 'scissors') || 
            (computerChoice === 'scissors' && playerChoice === 'rock')) {
      return 'You win!';
  } else {
      return 'You lose.';
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let ties = 0;

  for (let i = 0; i < 5 ; i++) {
    let roundResult = playRound(getComputerChoice(), getPlayerChoice());

    if (roundResult === 'You lose.') {
      computerScore++;
    } else if (roundResult === 'You win!') {
      playerScore++;
    } else {
      ties++;
    }

    console.log(`Computer Score = ${computerScore} Player Score = ${playerScore} Ties = ${ties}`);
  }
  return getFinalWinner(computerScore, playerScore);
}

function getFinalWinner(computerScore, playerScore) {
  if (computerScore > playerScore) {
    console.log('You lost the game. Try again!');
  } else if (playerScore > computerScore) {
    console.log('You won!');
  } else {
    console.log('It\'s a Draw!');
  }
}

game()
