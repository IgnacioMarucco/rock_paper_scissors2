"use strict";

const containerButtons = document.querySelector('.containerButtons');
const scoreboard = document.querySelector('.scoreboard');

// Create Buttons:
const newGameButton = document.createElement('button');
newGameButton.textContent = 'New Game';
newGameButton.classList.add('newGameButton');

const buttonRock = document.createElement('button');
buttonRock.textContent = 'Rock';
buttonRock.classList.add('playerChoiceButton'); 

const buttonPaper = document.createElement('button');
buttonPaper.textContent = 'Paper';
buttonPaper.classList.add('playerChoiceButton'); 

const buttonScissors = document.createElement('button');
buttonScissors.textContent = 'Scissors';
buttonScissors.classList.add('playerChoiceButton'); 

containerButtons.appendChild(newGameButton);
containerButtons.appendChild(buttonRock);
containerButtons.appendChild(buttonPaper);
containerButtons.appendChild(buttonScissors);

// 
const playerChoiceButtons = document.querySelectorAll('.playerChoiceButton');
newGameButton.addEventListener('click', game);

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let ties = 0;

  playerChoiceButtons.forEach((btn) => btn.addEventListener('click', playRound));
  
  function playRound(e) {
    const computerChoice = getComputerChoice();
    const playerChoice = e.target.innerText.toLowerCase();
    if (computerChoice === playerChoice) {
      ties++;
    } else if ((computerChoice === 'rock' && playerChoice === 'paper') || 
              (computerChoice === 'paper' && playerChoice === 'scissors') || 
              (computerChoice === 'scissors' && playerChoice === 'rock')) {
      playerScore++;
    } else {
      computerScore++;
    }

    scoreboard.textContent = `Computer Score = ${computerScore} Player Score = ${playerScore} Ties = ${ties}`;
    endConditions(playerScore, computerScore, ties);
  }

  function endConditions(playerScore, computerScore, ties) {
    if (playerScore === 5 || computerScore === 5) {
      playerChoiceButtons.forEach((btn) => btn.removeEventListener('click', playRound));
      scoreboard.textContent = `Computer Score = ${computerScore} Player Score = ${playerScore} Ties = ${ties}. GGGGGGGGGGGGG`;
    }
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