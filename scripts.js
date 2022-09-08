
const choices = ['rock', 'paper', 'scissors']
let score = {'player':0,
            'computer':0,
            'draw':0}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //alert(button.id)
        getPlayerChoice(button.id)
    })
})

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    const selection = choices.at(choice)
    document.getElementById('computerSelection').textContent = selection
    return selection
}

function getPlayerChoice(selectedButton) {
    if (selectedButton == 'reset') {
        location.reload()
    } else {
        document.getElementById('playerSelection').textContent = selectedButton
        winner = playRound(selectedButton)    
    }
    score[winner]++
    updateScoreboard()   
    if (score[winner] == 5) {
        alert(winner + ' wins!')

    } 
    
    
}

function updateScoreboard() {
    document.getElementById('playerWins').textContent = score['player']
    document.getElementById('computerWins').textContent = score['computer']
    document.getElementById('draws').textContent = score['draw']
    
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice()
    
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
    document.getElementById('result').textContent = winner + ' wins round'
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

