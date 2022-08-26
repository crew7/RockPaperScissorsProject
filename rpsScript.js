function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3) + 1;
    switch (computerChoice) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
    }
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        gameResultsMessage = document.createElement('p');
        gameResultsMessage.textContent = 'You Lose! Paper beats Rock'
        gameResultsMessage.classList.add('loserIsRed');
        touchGameResults.prepend(gameResultsMessage);

        return 'lose';

    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        gameResultsMessage = document.createElement('p');
        gameResultsMessage.textContent = 'You Lose! Scissors beats Paper'
        gameResultsMessage.classList.add('loserIsRed');
        touchGameResults.prepend(gameResultsMessage);

        return 'lose';

    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        gameResultsMessage = document.createElement('p');
        gameResultsMessage.textContent = 'You Lose! Rock beats Scissors'
        gameResultsMessage.classList.add('loserIsRed');
        touchGameResults.prepend(gameResultsMessage);

        return 'lose';
    }

    if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        gameResultsMessage = document.createElement('p');
        gameResultsMessage.textContent = 'You Win! Rock beats Scissors'
        gameResultsMessage.classList.add('winnerIsGreen');
        touchGameResults.prepend(gameResultsMessage);

        return 'win';

    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        gameResultsMessage = document.createElement('p');
        gameResultsMessage.textContent = 'You Win! Paper beats Rock'
        gameResultsMessage.classList.add('winnerIsGreen');
        touchGameResults.prepend(gameResultsMessage);

        return 'win';

    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        gameResultsMessage = document.createElement('p');
        gameResultsMessage.textContent = 'You Win! Scissors beats Paper'
        gameResultsMessage.classList.add('winnerIsGreen');
        touchGameResults.prepend(gameResultsMessage);

        return 'win';
    } 
    
    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        
        gameResultsMessage = document.createElement('p');
        gameResultsMessage.textContent = 'You tied! Rock ties with Rock'
        gameResultsMessage.classList.add('tieIsGray');
        touchGameResults.prepend(gameResultsMessage);

        return 'tie';

    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        gameResultsMessage = document.createElement('p');
        gameResultsMessage.textContent = 'You tied! Paper ties with Paper'
        gameResultsMessage.classList.add('tieIsGray');
        touchGameResults.prepend(gameResultsMessage);

        return 'tie';

    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        gameResultsMessage = document.createElement('p');
        gameResultsMessage.textContent = 'You tied! Scissors ties with Scissors'
        gameResultsMessage.classList.add('tieIsGray');
        touchGameResults.prepend(gameResultsMessage);

        return 'tie';
    }


    else {
        return 'You didn\'t click either rock, paper or scissors.'
    }
}

function scoreConverter(roundData) {
    if (winCounter === 6 || loseCounter === 6) {
        winCounter = 0;
        loseCounter = 0;
        tieCounter = 0;
        touchGameResults.textContent = '';
        touchGameResultsMessage.textContent = '';

        touchPlayerWins.textContent = '0';
        touchComputerWins.textContent = '0';
        touchGameTies.textContent = '0';

        touchGameResultsMessage.className = '';
        return;
    }

    if (roundData === 'win') {
        ++winCounter;
        touchPlayerWins.textContent = winCounter;
    } else if (roundData === 'lose') {
        ++loseCounter;
        touchComputerWins.textContent = loseCounter;
    } else if (roundData === 'tie') {
        ++tieCounter;
        touchGameTies.textContent = tieCounter;
    }

    if (winCounter === 5 || loseCounter === 5) {
        if (winCounter > loseCounter) {
            touchGameResultsMessage.textContent = 'YOU WIN!'

            const smileyImg = document.createElement('img');
            smileyImg.src = "./smiley.png"
            touchGameResultsMessage.appendChild(smileyImg);

            touchGameResultsMessage.classList.add('winnerIsGreen')


        } else if (loseCounter > winCounter) {
            touchGameResultsMessage.textContent = 'YOU LOST!'

            const sadFaceImg = document.createElement('img');
            sadFaceImg.src = "./sadface.png"
            touchGameResultsMessage.appendChild(sadFaceImg);

            touchGameResultsMessage.classList.add('loserIsRed')
        }
        ++loseCounter
        ++winCounter /* The point of this is to loop back to a new game */
    }
}
let winCounter = 0;
let loseCounter = 0;
let tieCounter = 0;
let clearCounter = 0;

const touchRockButton = document.querySelector('#rockButton');
const touchPaperButton = document.querySelector('#paperButton');
const touchScissorsButton = document.querySelector('#scissorsButton');

const touchGameResults = document.querySelector('#gameResults');
const touchGameResultsMessage = document.querySelector('#gameResultsMessage');

const touchPlayerWins = document.querySelector('#playerWins');
const touchComputerWins = document.querySelector('#computerWins');
const touchGameTies = document.querySelector('#gameTies');


const arrayOfButtons = document.querySelectorAll('button');


arrayOfButtons.forEach( (gameButton) => {
    gameButton.addEventListener('click', (buttonClick) => {
        buttonClick.target.classList.add('buttonClickNotif');
        setTimeout( () => buttonClick.target.classList.remove('buttonClickNotif'), 100 ) /* This makes click noticeable */
    })
})

touchRockButton.addEventListener('click', () => {
const computerSelection = computerPlay();
const winner = playRound('rock', computerSelection);

scoreConverter(winner);
})

touchPaperButton.addEventListener('click', () => {
const computerSelection = computerPlay();
const winner = playRound('paper', computerSelection);

scoreConverter(winner);
})

touchScissorsButton.addEventListener('click', () => {
const computerSelection = computerPlay();
const winner = playRound('scissors', computerSelection);  

scoreConverter(winner);
})