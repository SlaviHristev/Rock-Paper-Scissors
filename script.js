
function computerMove(){
    const randomNumber = Math.floor(Math.random() * 3);
    
    const choises = ["Rock", "Paper", "Scissors"];
    const compChoice = choises[randomNumber];
    
    return compChoice;
}
let choicesDiv = document.getElementById('choices');
let playerMove = '';
let result = '';

document.querySelector('.rock').addEventListener('click', playerMoveRock)
function playerMoveRock(){
    playerMove = "Rock";
    const computerChoice = computerMove();
    if(computerChoice === "Paper"){
        result = "Computer Wins!!!";
    }else if(computerChoice === "Scissors"){
        result = "Player Wins!!!";
    }else{
        result = "It's a Draw!!!";
    };
};

document.querySelector('.paper').addEventListener('click', playerMovePaper)
function playerMovePaper(){
    playerMove = "Paper";
    const computerChoice = computerMove();
    if(computerChoice === "Paper"){
        result = "It's a Draw!!!";
    }else if(computerChoice === "Scissors"){
        result = "Computer Wins!!!";
    }else{
        result = "Player Wins!!!";
    };
};

document.querySelector('.scissors').addEventListener('click', playerMoveScissors)
function playerMoveScissors(){
    playerMove = "Scissors";
    const computerChoice = computerMove();
    if(computerChoice === "Paper"){
        result = "Player Wins!!!";
    }else if(computerChoice === "Scissors"){
        result = "It's a Draw!!!";
    }else{
        result = "Computer Wins!!!";
    };
};




// let newPElement = document.createElement('p');
// newPElement.textContent = `Player chooses Rock, Computer chooses ${computerChoice}`;
// choicesDiv.appendChild(newPElement)