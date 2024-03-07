let playerSelection;
let computerSelection;
let playerCounter=0;//For counting the wins by the player
let computerCounter=0;//For counting the wins by the computer
let round=0;//For counting the number of rounds played
let result=document.querySelector("#result");
let finalResult=document.querySelector("#finalResult");
let runningScore=document.querySelector("#runningScore");

//Creating the buttons(rock,paper,scissors)
let div1=document.querySelector(".div1");
let rock=document.createElement("button");
let paper=document.createElement("button");
let scissors=document.createElement("button");
rock.textContent="rock";
paper.textContent="paper";
scissors.textContent="scissors";
rock.setAttribute("id","rock");
paper.setAttribute("id","paper");
scissors.setAttribute("id","scissors");
div1.appendChild(rock);
div1.appendChild(paper);
div1.appendChild(scissors);

//Action listener for the pressed button
let buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",getPlayerChoice);
});

function getPlayerChoice(button){
    if(button.target.id==="rock"){
        playerSelection="rock";
    }
    else if(button.target.id==="paper"){
        playerSelection="paper";
    }
    else{
        playerSelection="scissors";
    }
    round+=1;
    getComputerChoice();
    playGame();
}

function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    computerSelection=choices[Math.floor(Math.random()*3)];
}

function getRoundWinner(playerSelection,computerSelection){
    let winner="";
    if(playerSelection==="rock"||playerSelection==="paper"||playerSelection==="scissors"){
        if(playerSelection==="rock"&&computerSelection==="paper"){
            result.textContent="round winner is Computer ,paper beats rock";
            return(winner+="computer");
        }
        else if(playerSelection==="rock"&&computerSelection==="scissors"){
            result.textContent="round winner is Player ,rock beats scissors";
            return(winner+="player");
        }
        else if(playerSelection==="paper"&&computerSelection==="rock"){
            result.textContent="round winner is Player ,paper beats rock";
            return(winner+="player");
        }
        else if(playerSelection==="paper"&&computerSelection==="scissors"){
            result.textContent="round winner is Computer ,scissors beat paper";
            return(winner+="computer");
        }
        else if(playerSelection==="scissors"&&computerSelection==="rock"){
            result.textContent="round winner is Computer ,rock beats scissors";
            return(winner+="computer");
        }
        else if(playerSelection==="scissors"&&computerSelection==="paper"){
            result.textContent="round winner is Player ,scissors beat paper";
            return(winner+="player")   
        }
        else if(computerSelection===playerSelection){
            result.textContent="The is no round winner its a tie";
            return(winner+="tie");
        }
    }
}

function playGame(){
        
    let roundWinner=getRoundWinner(playerSelection,computerSelection);

    if(roundWinner=="computer"){
        computerCounter+=1;
        runningScore.textContent=`Player Score: ${playerCounter} -------Computer Score: ${computerCounter}`;      
    }
    else if(roundWinner=="player"){
        playerCounter+=1;
        runningScore.textContent=`Player Score: ${playerCounter} -------Computer Score: ${computerCounter}`;
    }
    else if(roundWinner=="tie"){
        playerCounter+=1;
        computerCounter+=1;
        runningScore.textContent=`Player Score: ${playerCounter} -------Computer Score: ${computerCounter}`;
    }
    //For stopping the game when the number of rounds reach 5
    if(round===5){
        let selection=document.querySelector("#selection");
        selection.textContent="";
        
        //Creating the restart button as soon as the game reaches round 5
        let div2=document.querySelector(".div2");
        let restartButton=document.createElement("button");
        restartButton.textContent="Restart Game";
        div2.appendChild(restartButton);
        
        //Removing all the player selection buttons as soon as the game is finished 
        div1.removeChild(rock);
        div1.removeChild(paper);
        div1.removeChild(scissors);
        
        //Setting action listener for the restart button
        restartButton.addEventListener("click",()=>{
            div2.removeChild(restartButton);
            selection.textContent="Please make your selection!!";
            finalResult.textContent="";
            result.textContent="";
            runningScore.textContent="";
            playerCounter=0;
            computerCounter=0;
            round=0;
            div1.appendChild(rock);
            div1.appendChild(paper);
            div1.appendChild(scissors);
        })

        //Confirming the winner of the game after 5 rounds
        if(playerCounter>computerCounter){
            finalResult.textContent="Player is the winner of the game, game over computer!";

        }
        else if(computerCounter>playerCounter){
            finalResult.textContent="Computer is the winner of the game, game over player!";
        }
        else{
            finalResult.textContent="Wow game is a tie, play another one!";
        }
    }
}


