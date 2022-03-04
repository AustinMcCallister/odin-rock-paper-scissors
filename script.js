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
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Choose Rock, Paper, or Scissors.");
        let roundResult = playRound(choice, computerPlay());
    }
}

game();