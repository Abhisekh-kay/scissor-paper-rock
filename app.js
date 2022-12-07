//Computer chooses from "SCISSORS, PAPER, ROCK"
function getComputerChoice() {
    let choices = ['scissors', 'paper', 'rock']
    return choices[Math.floor(Math.random() * choices.length)]
}

let UserScore = 0;
let ComputerScore = 0;
const buttons = document.querySelectorAll('input')
let result = ''


//PLAYS ONE ROUND OF GAME
function playRound(playerSelection) {
    const computerSelection = getComputerChoice()

    if (playerSelection == computerSelection) {
        resultsContent.textContent = ('It\'s a tie. You both chose \n\n\n' + playerSelection
            + "\tPlayer score: \n" + UserScore + "\n  Computer score: " + ComputerScore)
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        UserScore++;
        resultsContent.textContent = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "\tPlayer score: " + UserScore + "Computer score: " + ComputerScore)
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        ComputerScore++;
        resultsContent.textContent = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "Player score: " + UserScore + "Computer score: " + ComputerScore)
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        ComputerScore++;
        resultsContent.textContent = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "Player score: " + UserScore + "Computer score: " + ComputerScore)
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        UserScore++;
        resultsContent.textContent = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "Player score: " + UserScore + "Computer score: " + ComputerScore)
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        UserScore++;
        resultsContent.textContent = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "Player score: " + UserScore + "Computer score: " + ComputerScore)
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        ComputerScore++;
        resultsContent.textContent = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "Player score: " + UserScore + "Computer score: " + ComputerScore)
    }
    if (UserScore == 5) {
        resultsContent.textContent = 'You won the game! Reload the page to play again'
        alert('Your score: ' + UserScore + '\nComputer Score: ' + ComputerScore)
        disableButtons()
    }

    else if (ComputerScore == 5) {
        resultsContent.textContent = 'I won the game! Reload the page to play again'
        alert('Your score: ' + UserScore + '\nComputer Score: ' + ComputerScore)
        disableButtons()
    }

}

// Event-listeners to the buttons.
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})

// For disabling the buttons to play it more times.
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

// Displaying the status in the DOM.
const gamestatus = document.querySelector('#status');
const statusContent = document.createElement('div');
statusContent.classList.add('statusContent');
gamestatus.appendChild(statusContent);

// Displaying the reuslts in the DOM.
const results = document.querySelector('#result');
const resultsContent = document.createElement('div');
resultsContent.classList.add('resultsContent');
results.appendChild(resultsContent);