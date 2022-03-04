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
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 0;
    }
    else if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection.toLowerCase() === 'paper') {
            return 1;
        }
        else if (computerSelection.toLowerCase() === 'scissors') {
            return 2;
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection.toLowerCase() === 'scissors') {
            return 3;
        }
        else if (computerSelection.toLowerCase() === 'rock') {
            return 4;
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection.toLowerCase() === 'rock') {
            return 5;
        }
        else if (computerSelection.toLowerCase() === 'paper') {
            return 6;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let choice = prompt("Choose Rock, Paper, or Scissors.");
        let roundResult = playRound(choice, computerPlay());

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