
const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    return choices.at(choice)
}

function getPlayerChoice() {
    const choice = prompt('type choice').toLowerCase()
    if (choices.includes(choice)) {
        return choice
    } else throw('Invalid choice')
    
}

function playRound(playerSelection, computerSelection) {
    let winner = ''
    if (playerSelection == computerSelection) {
        winner = 'draw'
    } else if (playerSelection == 'rock') {
        if(computerSelection == 'paper') {
            winner = 'computer'
        } else {winner = 'player'}
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            winner = 'computer'
        } else {winner = 'player'}
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            winner = 'computer'
        } else {winner = 'player'}
    }
    console.log(winner + ' wins round')
    return winner
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let draw = 0

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        const playerSelection = getPlayerChoice()
        const winner =  playRound(playerSelection, computerSelection)
        if (winner == 'player') {
            playerScore++            
        } else if (winner == 'computer') {
            computerScore++
        } else {draw++}
    }
    if (playerScore > computerScore) {
        console.log('Player Wins Match!')
      } else if (computerScore > playerScore) {
        console.log('Computer Wins Match!')
      } else {console.log('Match is a draw')}

    console.log(playerScore + '-' + computerScore + '-' + draw)



}

