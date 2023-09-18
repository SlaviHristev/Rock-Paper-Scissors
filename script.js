
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

document.querySelector('.rock').addEventListener('click', playerMoveRock)
function playerMoveRock() {
    computerChoice = computerMove();
    choicesDiv.innerHTML = '';
    playerMove = "Rock";
    if (computerChoice === "Paper") {
        result = "Computer Wins!!!";
    } else if (computerChoice === "Scissors") {
        result = "Player Wins!!!";
    } else {
        result = "It's a Draw!!!";
    };
    moves = `Player chooses ${playerMove}, Computer chooses ${computerChoice}`;
    let newPElement = document.createElement('p');
    let resultPElement = document.createElement('p');
    newPElement.textContent = `${moves}`;
    resultPElement.textContent = `${result}`
    choicesDiv.appendChild(newPElement);
    choicesDiv.appendChild(resultPElement);
};

document.querySelector('.paper').addEventListener('click', playerMovePaper)
function playerMovePaper() {
    computerChoice = computerMove();
    choicesDiv.innerHTML = '';
    playerMove = "Paper";
    
    if (computerChoice === "Paper") {
        result = "It's a Draw!!!";
    } else if (computerChoice === "Scissors") {
        result = "Computer Wins!!!";
    } else {
        result = "Player Wins!!!";
    };
    moves = `Player chooses ${playerMove}, Computer chooses ${computerChoice}`;
    let newPElement = document.createElement('p');
    let resultPElement = document.createElement('p')
    newPElement.textContent = `${moves}`;
    resultPElement.textContent = `${result}`
    choicesDiv.appendChild(newPElement);
    choicesDiv.appendChild(resultPElement);
};

document.querySelector('.scissors').addEventListener('click', playerMoveScissors)
function playerMoveScissors() {
    computerChoice = computerMove();
    choicesDiv.innerHTML = '';
    playerMove = "Scissors";
    if (computerChoice === "Paper") {
        result = "Player Wins!!!";
    } else if (computerChoice === "Scissors") {
        result = "It's a Draw!!!";
    } else {
        result = "Computer Wins!!!";
    };
    moves = `Player chooses ${playerMove}, Computer chooses ${computerChoice}`;
    let newPElement = document.createElement('p');
    let resultPElement = document.createElement('p');
    newPElement.textContent = `${moves}`;
    resultPElement.textContent = `${result}`
    choicesDiv.appendChild(newPElement);
    choicesDiv.appendChild(resultPElement);
};


