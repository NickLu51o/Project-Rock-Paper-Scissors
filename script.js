let playerScore=0
let computerScore=0
let roundEnding = " "
let playerSelection = "rock"
let computerSelection = getComputerChoice()

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
    return computerScore
    return playerScore
}
console.log(playRound(computerSelection, playerSelection))

console.log("Computer's score " + computerScore)
console.log("Your score " + playerScore)
