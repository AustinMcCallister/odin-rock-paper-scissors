function computerPlay() {
    let choice = (Math.floor(Math.random() * 3));
    if (choice == 0) {
        return 'Rock';
    }
    else if (choice == 1) {
        return 'Paper';
    }
    else if (choice == 2) {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'It\'s a tie!';
    }
    else if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection.toLowerCase() === 'paper') {
            return 'You Lose! Paper beats Rock!';
        }
        else if (computerSelection.toLowerCase() === 'scissors') {
            return 'You Win! Rock beats Scissors!'
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection.toLowerCase() === 'scissors') {
            return 'You Lose! Scissors beats Paper!';
        }
        else if (computerSelection.toLowerCase() === 'rock') {
            return 'You Win! Paper beats Rock!'
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection.toLowerCase() === 'rock') {
            return 'You Lose! Rock beats Scissors!';
        }
        else if (computerSelection.toLowerCase() === 'paper') {
            return 'You Win! Scissors beats Paper!'
        }
    }
}