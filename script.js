
function computerMove() {
    const randomNumber = Math.floor(Math.random() * 3);

    const choises = ["Rock", "Paper", "Scissors"];
    const compChoice = choises[randomNumber];

    return compChoice;
}
let computerChoice = computerMove();

const choicesDiv = document.getElementById('choices');

let playerMove = '';
let result = '';
let moves = '';
let playerScore = 0;
let computerScore = 0;
let draws = 0;



document.querySelector('.rock').addEventListener('click', playerMoveRock)
function playerMoveRock() {
    computerChoice = computerMove();
    choicesDiv.innerHTML = '';
    playerMove = "Rock";
    if (computerChoice === "Paper") {
        result = "Computer Wins!!!";
        computerScore++;
    } else if (computerChoice === "Scissors") {
        result = "Player Wins!!!";
        playerScore++;
    } else {
        result = "It's a Draw!!!";
        draws++;
    };
    moves = `Player chooses ${playerMove}, Computer chooses ${computerChoice}`;
    let newPElement = document.createElement('p');
    let resultPElement = document.createElement('p');
    newPElement.textContent = `${moves}`;
    resultPElement.textContent = `${result}`
    choicesDiv.appendChild(newPElement);
    choicesDiv.appendChild(resultPElement);

    document.getElementById('player-score').textContent = `Player Score = ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer Score = ${computerScore}`;
    document.getElementById('draws-score').textContent = `Draws = ${draws}`


};

document.querySelector('.paper').addEventListener('click', playerMovePaper)
function playerMovePaper() {
    computerChoice = computerMove();
    choicesDiv.innerHTML = '';
    playerMove = "Paper";

    if (computerChoice === "Paper") {
        result = "It's a Draw!!!";
        draws++;
    } else if (computerChoice === "Scissors") {
        result = "Computer Wins!!!";
        computerScore++;
    } else {
        result = "Player Wins!!!";
        playerScore++;
    };
    moves = `Player chooses ${playerMove}, Computer chooses ${computerChoice}`;
    let newPElement = document.createElement('p');
    let resultPElement = document.createElement('p')
    newPElement.textContent = `${moves}`;
    resultPElement.textContent = `${result}`
    choicesDiv.appendChild(newPElement);
    choicesDiv.appendChild(resultPElement);

    document.getElementById('player-score').textContent = `Player Score = ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer Score = ${computerScore}`;
    document.getElementById('draws-score').textContent = `Draws = ${draws}`


};

document.querySelector('.scissors').addEventListener('click', playerMoveScissors)
function playerMoveScissors() {
    computerChoice = computerMove();
    choicesDiv.innerHTML = '';
    playerMove = "Scissors";
    if (computerChoice === "Paper") {
        result = "Player Wins!!!";
        playerScore++;
    } else if (computerChoice === "Scissors") {
        result = "It's a Draw!!!";
        draws++;
    } else {
        result = "Computer Wins!!!";
        computerScore++;
    };
    moves = `Player chooses ${playerMove}, Computer chooses ${computerChoice}`;
    let newPElement = document.createElement('p');
    let resultPElement = document.createElement('p');
    newPElement.textContent = `${moves}`;
    resultPElement.textContent = `${result}`
    choicesDiv.appendChild(newPElement);
    choicesDiv.appendChild(resultPElement);
    document.getElementById('player-score').textContent = `Player Score = ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer Score = ${computerScore}`;
    document.getElementById('draws-score').textContent = `Draws = ${draws}`


};
