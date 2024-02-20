let playerSelection;
let computerSelection;
getPlayerChoice();
console.log(playGame());

function getPlayerChoice(){
    playerSelection=(prompt("Select Rock,Paper,or Scissors")).toLowerCase()
    getComputerChoice();
}

function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    computerSelection=choices[Math.floor(Math.random()*3)];
}

function getRoundWinner(playerSelection,computerSelection){
    let winner="";
    if(playerSelection==="rock"||playerSelection==="paper"||playerSelection==="scissors"){
        if(playerSelection==="rock"&&computerSelection==="paper"){
            console.log("round winner is Computer ,paper beats rock");
            return(winner+="computer");
        }
        else if(playerSelection==="rock"&&computerSelection==="scissors"){
            console.log("round winner is Player ,rock beats scissors");
            return(winner+="player");
        }
        else if(playerSelection==="paper"&&computerSelection==="rock"){
            console.log("round winner is Player ,paper beats rock");
            return(winner+="player");
        }
        else if(playerSelection==="paper"&&computerSelection==="scissors"){
            console.log("round winner is Computer ,scissors beat paper");
            return(winner+="computer");
        }
        else if(playerSelection==="scissors"&&computerSelection==="rock"){
            console.log("round winner is Computer ,rock beats scissors");
            return(winner+="computer");
        }
        else if(playerSelection==="scissors"&&computerSelection==="paper"){
            console.log("round winner is Player ,scissors beat paper");
            return(winner+="player")   
        }
        else if(computerSelection===playerSelection){
            console.log("The is no round winner its a tie");
            return(winner+="tie");
        }
    }
    else{
        return("please enter a valid input among rock,paper,scissors");
    }
}

function playGame(){
    let playerCounter=0;
    let computerCounter=0;
    let round=1;
    for(let i=0;i<5;i++){
        if(round!==1){
            getPlayerChoice();;
        }

        let roundWinner=getRoundWinner(playerSelection,computerSelection);

        if(roundWinner=="computer"){
            computerCounter+=1;       
        }
        else if(roundWinner=="player"){
            playerCounter+=1;
        }
        else if(roundWinner=="tie"){
            playerCounter+=1;
            computerCounter+=1;
        }
        else{
            i-=1;
            console.log(roundWinner);
        }
        round+=1;
    }
    if(playerCounter>computerCounter){
        return ("Player is the winner of the game, game over Computer!");
    }
    else if(computerCounter>playerCounter){
        return("Computer is the winner of the game, game over player!");
    }
    else{
        return("Its a tie ,you need to play another game!");
    }
}