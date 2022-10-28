var choices = ["rock", "paper", "scissors"]
var score = 0
var cScore = 0

function getComputerChoice () {
    return choices[Math.floor((Math.random() * 3))];
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if ((playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissors" && computerSelection == "paper")){
        score = addScore(score, "score")
        return `Computer selected ${computerSelection}. You win!`
    } else if (playerSelection == computerSelection) {
        return `Computer selected ${computerSelection}. It is a draw!`
    } else {
        cScore = addScore(cScore, "cScore")
        document.getElementById('cScore').innerText = `${cScore} / 5`
        return `Computer selected ${computerSelection}. You Lose!`
    }
}

function addScore(score, type) {
    score ++
    document.getElementById(`${type}`).innerText = `${score} / 5`
    return score
}

function resetGame() {
    score = 0
    cScore = 0
    document.getElementById('score').innerText = ``
    document.getElementById('cScore').innerText = ``
}

const buttons = document.querySelectorAll("button");

console.log(buttons)

buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        var id = 
            (event.target.id == '') ? 
            event.target.parentElement.id : event.target.id

        document.getElementById("result").innerText = 
            playRound(getComputerChoice(), id)
            
        
        if (score == 5 || cScore == 5) {
            if (score == 5){
                    document.getElementById("result").innerText = "Gameover! You are the winner!!"  
            } else {
                    document.getElementById("result").innerText = "Gameover! Computer is the winner!!"  
            }

            resetGame()
        }
    });
 });

