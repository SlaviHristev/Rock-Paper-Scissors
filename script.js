
function computerMove(){
    const randomNumber = Math.floor(Math.random() * 3);
    
    const choises = ["Rock", "Paper", "Scissors"];
    const compChoice = choises[randomNumber];
    
    return compChoice;
}

document.querySelector('.rock').addEventListener('click', playerMoveRock)
function playerMoveRock(){
    
    const computerChoice = computerMove();
    if(computerChoice === "Paper"){

    }else if(computerChoice === "Scissors"){
        
    }else{
        
    }
}