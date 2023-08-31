"use strict";

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let ties = 0;

  for (let i = 0; i < 5 ; i++) {
    let roundResult = playRound(getComputerChoice(), getPlayerChoice());

    if (roundResult) {
      playerScore++;
    } else if (roundResult === null) {
      ties++;
    } else {
      computerScore++;
    }

    console.log(`Computer Score = ${computerScore} Player Score = ${playerScore} Ties = ${ties}`);
  }
  return getFinalWinner(computerScore, playerScore);
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return null;
  } else if ((computerChoice === 'rock' && playerChoice === 'paper') || 
            (computerChoice === 'paper' && playerChoice === 'scissors') || 
            (computerChoice === 'scissors' && playerChoice === 'rock')) {
      return true;
  } else {
      return false;
  }
}

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

function getFinalWinner(computerScore, playerScore) {
  if (computerScore > playerScore) {
    console.log('You lost the game. Try again!');
  } else if (playerScore > computerScore) {
    console.log('You won!');
  } else {
    console.log('It\'s a Draw!');
  }
}

game();
