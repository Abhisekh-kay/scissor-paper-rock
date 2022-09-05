//Computer chooses from "ROCK, PAPER, SCISSORS"
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

//PLAYS ONE ROUND OF GAME
function playRound(playerSelection,computerSelection)
{
   if (playerSelection==computerSelection)
   {
    console.log("Draw") ;
   }
   if (playerSelection=="scissors" && computerSelection=="paper")
   {
    console.log("You win! Scissors beats paper") ;
   }
    else if (playerSelection=="scissors" && computerSelection=="rock")
    {
    console.log("You lose! Rock beats scissors");
   }
   else if (playerSelection=="paper" && computerSelection=="scissors")
   {
    console.log("You lose! scissors beats paper") ;
   }
   else if (playerSelection=="paper" && computerSelection=="rock")
   {
    console.log("You win! Paper beats rock") ;
   }
   else if (playerSelection=="rock" && computerSelection=="scissors")
   {
    console.log("You win! Rock beats scissors") ;
   }
   else if (playerSelection=="rock" && computerSelection=="paper")
   {
    console.log("You lose! Paper beats rock") ;
   }
}

//PLAYS 5 ROUNDS OF GAME
function game(){}



const playerSelection = prompt("Enter your choice").toLowerCase();
const computerSelection= getComputerChoice();
console.log(playerSelection)
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));