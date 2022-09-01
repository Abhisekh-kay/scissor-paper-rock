function getComputerChoice(){
   let result= Math.floor(Math.random()*3)+1;
    if (result==1){
        return "scissors";
    }
    else if(result==2){
        return "paper";
    }
    else{
        return "rock";
    }
}


function playRound(playerSelection,computerSelection){
   if (playerSelection==computerSelection){
    return "Draw";
   }
   if (playerSelection=="scissors" && computerSelection=="paper"){
    return "You win! Scissors beats paper";
   }
    else if (playerSelection=="scissors" && computerSelection=="rock"){
    return "You lose! Rock beats scissors";
   }
   else if (playerSelection=="paper" && computerSelection=="scissors"){
    return "You lose! scissors beats paper";
   }
   else if (playerSelection=="paper" && computerSelection=="rock"){
    return "You win! Paper beats rock";
   }
   else if (playerSelection=="rock" && computerSelection=="scissors"){
    return "You win! Rock beats scissors";
   }
   else if (playerSelection=="rock" && computerSelection=="paper"){
    return "You lose! Paper beats rock";
   }
}

const playerSelection = prompt("Enter your choice").toLowerCase();
const computerSelection= getComputerChoice();
console.log(playerSelection)
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));