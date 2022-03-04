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
        return 2;
    }
    else if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection.toLowerCase() === 'paper') {
            return 0;
        }
        else if (computerSelection.toLowerCase() === 'scissors') {
            return 1;
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection.toLowerCase() === 'scissors') {
            return 0;
        }
        else if (computerSelection.toLowerCase() === 'rock') {
            return 1;
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection.toLowerCase() === 'rock') {
            return 0;
        }
        else if (computerSelection.toLowerCase() === 'paper') {
            return 1;
        }
    }
}