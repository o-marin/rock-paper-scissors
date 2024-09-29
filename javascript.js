let choices = ["ROCK", "PAPER", "SCISSORS"];

//step 2: computer choice logic
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//step 3: human choice logic.




//step 4: keeping scores

let humanScore = 0;
let computerScore = 0;

//step 5: Write the logic to play a single round

function playRound(computerChoice, humanChoice) {
  let beats = { PAPER: "ROCK", ROCK: "SCISSORS", SCISSORS: "PAPER" };

  if (humanChoice == computerChoice) {
    console.log(
      `Computer chose ${computerChoice} - Humano chose ${humanChoice}`
    );
    return "Draw";
  }

  if (beats[computerChoice] == humanChoice) {
    computerScore += 1;
    console.log(
      `Computer chose ${computerChoice} - Humano chose ${humanChoice}`
    );
    return "The computer has won this match";
  } else {
    humanScore += 1;
    console.log(
      `Computer chose ${computerChoice} - Humano chose ${humanChoice}`
    );
    return "The human has won this match";
  }
}





/**
   * 
   * tengo que agregar un listener que capture el textContent del boton, entonces un addEventListener,
   * que guarde en una variable el textContent del boton que se presiona
   * realiza una version prelimimnar sin for sino en singular a cada boton.
   * 
   * debo agregar a los botones un listener que ejecute playRound cuando apreto un boton y ahi capture el
   * textContent como playerChoice o humanChoice
   */



let botones = document.querySelectorAll('#buttons button')
console.log(buttons)


  let rock = document.querySelector('#rock');
  let paper = document.querySelector('#paper')
  let scissors = document.querySelector('#scissors')

  let human_choice = '' 
  // Como guardo dentro de cada boton el event listener
  botones.forEach(boton=>boton.addEventListener('click', (e)=>{
    human_choice = boton.textContent

    playRound(getComputerChoice(), human_choice.toUpperCase())
  }));
