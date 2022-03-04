function computerPlay() {
  let choice = (Math.floor(Math.random() * 3));
  if (choice == 0) {
    console.log('Opponent chose Rock.');
    return 'Rock';
  }
  else if (choice == 1) {
    console.log('Opponent chose Paper.');
    return 'Paper';
  }
  else if (choice == 2) {
    console.log('Opponent chose Scissors.');
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  // Convert parameters to lowercase to facilitate case-insensitive input
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 0;
  }
  else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 1;
    }
    else if (computerSelection === 'scissors') {
      return 2;
    }
  }
  else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 3;
    }
    else if (computerSelection === 'rock') {
      return 4;
    }
  }
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 5;
    }
    else if (computerSelection === 'paper') {
      return 6;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors.");
    let roundResult = playRound(playerChoice, computerPlay());

    switch (roundResult) {
      case 0:
        console.log('It\'s a tie!');
        break;
      case 1:
        console.log('You Lose! Paper beats Rock!');
        computerScore++;
        break;
      case 2:
        console.log('You Win! Rock beats Scissors!');
        playerScore++;
        break;
      case 3:
        console.log('You Lose! Scissors beats Paper!');
        computerScore++;
        break;
      case 4:
        console.log('You Win! Paper beats Rock!');
        playerScore++;
        break;
      case 5:
        console.log('You Lose! Rock beats Scissors!');
        computerScore++;
        break;
      case 6:
        console.log('You Win! Scissors beats Paper!');
        playerScore++;
        break;
      default:
        console.log('Something went wrong!');
        break;
    }
  }

  console.log(`Player: ${playerScore}, Computer: ${computerScore}.`);
  if (playerScore > computerScore) {
    console.log('Congratulations! You Win!');
  }
  else if (playerScore < computerScore) {
    console.log('You Lose! Better luck next time!');
  }
  else if (playerScore === computerScore) {
    console.log('You tied!');
  }
}

game();