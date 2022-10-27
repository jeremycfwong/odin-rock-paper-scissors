var choices = ["rock", "paper", "scissors"]

function getComputerChoice () {
    return choices[Math.floor((Math.random() * 3))];
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if ((playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissors" && computerSelection == "paper")){
        return `Computer selected ${computerSelection}. You win!`
    } else if (playerSelection == computerSelection) {
        return `Computer selected ${computerSelection}. It is a draw!`
    } else {
        return `Computer selected ${computerSelection}. You Lose!`
    }
}

