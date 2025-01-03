const btns = document.querySelectorAll('.weapon')
let playerScore = 0, computerScore = 0
// CONSTRUCT HTML
const container = document.querySelector('.container')
const gameInfoDiv = document.querySelector('.game-info')
const playerScoreDisplay = document.getElementById('player-score')
const computerScoreDisplay = document.getElementById('computer-score')
const commentDisplay = document.getElementById('comment')
const playBtn = document.getElementById('play')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => playRound(e.target.innerText, getComputerChoice()))
})
playBtn.addEventListener('click', () => {
    if(playerScore > 0 || computerScore > 0) {
        commentDisplay.innerText = "Choosing to play again, let's do this!"
        playerScoreDisplay.innerText = 0
        computerScoreDisplay.innerText = 0
        playerScore = 0
        computerScore = 0
        btns.forEach(btn => btn.disabled = false)
    }
    playBtn.setAttribute('class', 'hide')
    btns.forEach(btn => btn.removeAttribute('class', 'hide'))
})


function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let randomNum = Math.floor(Math.random() * 3)
    return options[randomNum]
}

function playRound(humanChoice, computerChoice) {
    if (
        humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock'
    ) {
        computerScore += 1
        computerScoreDisplay.innerText = computerScore
        if(computerScore < 5) {
            commentDisplay.innerText = `You lose this round! ${computerChoice} beats ${humanChoice}`
        } else {
            btns.forEach(btn => btn.disabled = true)
            commentDisplay.innerText = `You lose the game! Play again?`
            playBtn.innerText = 'Play again'
            playBtn.removeAttribute('class', 'hide')
        }
    } else if (
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        playerScore += 1
        playerScoreDisplay.innerText = playerScore
        if(playerScore < 5) {
            commentDisplay.innerText = `You win this round! ${humanChoice} beats ${computerChoice}`
        } else {
            btns.forEach(btn => btn.disabled = true)
            commentDisplay.innerText = `You win the game! Play again?`
            playBtn.innerText = 'Play again'
            playBtn.removeAttribute('class', 'hide')
        }
    } else {
        commentDisplay.innerText = "It's a draw!"
    }
}