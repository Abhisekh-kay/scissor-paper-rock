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
    console.log("Draw")
   }
   if (playerSelection=="scissors" && computerSelection=="paper")
   {
    console.log("You win! Scissors beats paper") ;
    UserScore++;
   }
    else if (playerSelection=="scissors" && computerSelection=="rock")
    {
    console.log("You lose! Rock beats scissors");
    ComputerScore++;
   }
   else if (playerSelection=="paper" && computerSelection=="scissors")
   {
    console.log("You lose! scissors beats paper") ;
    ComputerScore++;
   }
   else if (playerSelection=="paper" && computerSelection=="rock")
   {
    console.log("You win! Paper beats rock") ;
    UserScore++;
   }
   else if (playerSelection=="rock" && computerSelection=="scissors")
   {
    console.log("You win! Rock beats scissors") ;
    UserScore++;
   }
   else if (playerSelection=="rock" && computerSelection=="paper")
   {
    console.log("You lose! Paper beats rock") ;
    ComputerScore++;
   }
}

//PLAYS 5 ROUNDS OF GAME
function game(){
    for (i=0; i<5; i++){

        const playerSelection = prompt("Enter your choice").toLowerCase();
        console.log(playerSelection)
        const computerSelection= getComputerChoice();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
    }
    if (UserScore ==5 || ComputerScore!= 5){
        console.log("You won");
        console.log(UserScore);
    }
    else if (ComputerScore==5 || UserScore!=5){
       console.log("Computer won");
    }
    else{
        console.log("No one won");
    }
}



let UserScore =0;
let ComputerScore =0;
// console.log(playRound(playerSelection, computerSelection));
game();