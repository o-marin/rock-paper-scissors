let choices = ["ROCK", "PAPER", "SCISSORS"];

console.log("Computer Turn");
//step 2: computer choice logic
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

//step 3: human choice logic.

console.log("Human turn");
function getHumanChoice(){
    let human_choice = prompt("Please choose Rock, Paper or Scissors")
    human_choice = human_choice.toUpperCase();
    while (!(choices.includes(human_choice))){
        human_choice =  prompt("Please choose a valid option(Rock, Paper or Scissors)");
        human_choice = human_choice.toUpperCase();
    }

    return human_choice;
}

//step 4: keeping scores

let humanScore = 0;
let computerScore = 0;


//step 5: Write the logic to play a single round

function playRound(computerChoice, humanChoice){
    
    let beats = {"PAPER":"ROCK","ROCK":"SCISSORS","SCISSORS":"PAPER"}
    
    if(humanChoice == computerChoice){
        console.log(`Computer chose ${computerChoice} - Humano chose ${humanChoice}`);
        return "Draw"
    }

    if (beats[computerChoice] == humanChoice){
        computerScore += 1;
        console.log(`Computer chose ${computerChoice} - Humano chose ${humanChoice}`);
        return "The computer has won this match";
    }else{
        humanScore += 1;
        console.log(`Computer chose ${computerChoice} - Humano chose ${humanChoice}`);
        return "The human has won this match";
    }
    
}


// I used 5 rounds for testing

for(let i = 0; i<5;i++){
    console.log(playRound(getComputerChoice(),getHumanChoice()));
    console.log(`the score is: human: ${humanScore} computer: ${computerScore}`);
}

