let playerScore=0
let computerScore=0
let roundEnding = " "

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
    }
}

let playerSelection = "rock"

function playRound(computerSelection, playerSelection) {

    if ( (playerSelection == "rock" && computerSelection == "paper") ||  
    (playerSelection == "paper" && computerSelection == "scissors") ||  
    (playerSelection == "scissors" && computerSelection == "rock") ) {
    roundEnding = "You Lose!";
    computerScore++ }

    if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") ) {
    roundEnding = "You Win!"
    playerScore++ }

    if (playerSelection == computerSelection ) {
    roundEnding = "It's a Tie!" }

    console.log(computerSelection)

    return roundEnding

}
console.log(playRound(getComputerChoice(), playerSelection))

function GameOver() {
    playerScore == 5 || computerScore == 5
    alert ("GameOver")
}