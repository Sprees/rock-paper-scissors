const btns = document.querySelectorAll('.weapon')

const playerScoreDisplay = document.getElementById('player-score')
const computerScoreDisplay = document.getElementById('computer-score')
const commentDisplay = document.getElementById('comment')
const winOrLoseCommentDisplay = document.getElementById('win-or-lose')
const playBtn = document.getElementById('play')

let humanChoice = '', computerChoice = '', playerScore = 0, computerScore = 0
let playerGameWin = "You win the game! Play again?"
let computerGameWin = "You lose the game! Play again?"
let draw = "It's a draw!"
let playAgain = "Choosing to play again, let's do this!"

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => playRound(e.target.innerText))
    playBtn.addEventListener('click', () => {
        if(playerScore > 0 || computerScore > 0) {
            commentDisplay.innerText = playAgain
            playerScoreDisplay.innerText = 0
            computerScoreDisplay.innerText = 0
            playerScore = 0
            computerScore = 0
            btns.forEach(btn => btn.disabled = false)
            winOrLoseCommentDisplay.setAttribute('class', 'hide')
        }
        playBtn.setAttribute('class', 'hide')
        btns.forEach(btn => btn.removeAttribute('class', 'hide'))
    })
})


function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let randomNum = Math.floor(Math.random() * 3)
    return options[randomNum]
}

function getRoundDisplay(winner) {
    playerScoreDisplay.innerText = playerScore
    computerScoreDisplay.innerText = computerScore
    if(winner === 'player') {
        commentDisplay.innerText = `You win this round! ${humanChoice} beats ${computerChoice}`
    } else if (winner === 'computer') {
        commentDisplay.innerText = `You lose this round! ${computerChoice} beats ${humanChoice}`
    } else {
        commentDisplay.innerText = draw
    }

    if(playerScore === 5 || computerScore === 5) {
        btns.forEach(btn => btn.disabled = true)
        playBtn.innerText = 'Play again'
        playBtn.removeAttribute('class', 'hide')
        winOrLoseCommentDisplay.removeAttribute('class', 'hide')
        if(playerScore > computerScore) {
            winOrLoseCommentDisplay.innerText = playerGameWin
        }
        if(playerScore < computerScore) {
            winOrLoseCommentDisplay.innerText = computerGameWin
        }
    }
}

function playRound(event) {
    humanChoice = event 
    computerChoice = getComputerChoice()
    if (
        humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock'
    ) {
        computerScore += 1
        getRoundDisplay('computer')
    } else if (
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        playerScore += 1
        getRoundDisplay('player')
    } else {
        getRoundDisplay('draw')
    }
}