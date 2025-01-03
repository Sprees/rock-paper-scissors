let options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    return options[randomNum]
}

function getHumanChoice() {
    let input = prompt('Rock, Paper, or Scissors?')
    input = input.toLowerCase();
    
    if(options.includes(input)) return input
    console.log('Please type a valid option.')
    return getHumanChoice()
}


(function playGame() {
    let roundCount = 5
    let humanScore = 0, computerScore = 0
    
    console.log(
        "Let's play a game of Rock, Paper, Scissors!",
        "After 5 rounds, the highest score wins!"
    )
    
    function playRound(humanChoice, computerChoice) {
        if(
            humanChoice === 'rock' && computerChoice === 'paper' ||
            humanChoice === 'paper' && computerChoice === 'scissors' ||
            humanChoice === 'scissors' && computerChoice === 'rock'
        ) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore += 1
        } else if(
            humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' && computerChoice === 'paper'
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore += 1
        } else {
            console.log("It's a draw!")
        }
        // console.log(`Player Score: ${humanScore} Computer Score: ${computerScore}`)
    }

    while(roundCount > 0) {
        playRound(humanSelection = getHumanChoice(), computerSelection = getComputerChoice())
        roundCount--
    }

    if(humanScore > computerScore) {
        console.log(`You win the game! ${humanScore} to ${computerScore}`)
    } else if(humanScore < computerScore) {
        console.log(`You lose the game! ${humanScore} to ${computerScore}`)
    } else {
        console.log(`You've ended the game in a draw. ${humanScore} to ${computerScore}`)
    }
    
    if(confirm('Play again?')) {
        playGame()
    }

    console.log('Thanks for playing!')
})()