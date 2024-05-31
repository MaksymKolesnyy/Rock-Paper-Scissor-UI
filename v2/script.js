// pulsanti e visualizzazioni UI  
const rock = document.querySelector('.btnRock');
const paper = document.querySelector('.btnPaper');
const scissors = document.querySelector('.btnScissors');
const pcDisplay = document.querySelector('.pcDisplay img');
const playerDisplay = document.querySelector('.playerDisplay img');
const result = document.querySelector('.result');
const round = document.querySelector('.round');
const yourScore = document.querySelector('.yourScore');
const pcScore = document.querySelector('.pcScore');

// Nascondi le visualizzazioni del computer e del giocatore all'avvio
pcDisplay.classList.add('hidden');
playerDisplay.classList.add('hidden');

// Variabili per lo score e il round
let humanScore = 0;
let computerScore = 0;
let roundNum = 0;

// Eventi di click per i pulsanti rock, paper e scissors
rock.addEventListener('click', function () {
  playerDisplay.classList.remove('hidden');
  pcDisplay.classList.remove('hidden');
  playerDisplay.src = 'img/rock-removebg-preview.png';
  playRound('rock');
});

paper.addEventListener('click', function () {
  playerDisplay.classList.remove('hidden');
  pcDisplay.classList.remove('hidden');
  playerDisplay.src = 'img/paper-removebg-preview.png';
  playRound('paper');
});

scissors.addEventListener('click', function () {
  playerDisplay.classList.remove('hidden');
  pcDisplay.classList.remove('hidden');
  playerDisplay.src = 'img/scissors-removebg-preview.png';
  playRound('scissors');
});

// Funzione per giocare un round
function playRound(humanChoice) {
  roundNum++; // Incrementa il numero del round
  round.textContent = `Round: ${roundNum}`; // Aggiorna il testo del round

  // Ottieni la scelta del computer
  const computerChoice = getComputerChoice();

  // Mostra la scelta del computer
  pcDisplay.src = `img/${computerChoice}-removebg-preview.png`;

  // Risultato del round e aggiornamento del testo del risultato
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result.textContent = '>';
    humanScore++; // Incremento lo score del giocatore
  } else if (
    (humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')
  ) {
    result.textContent = '<';
    computerScore++; // Incremento lo score del computer
  } else {
    result.textContent = '=';
  }

  // Aggiornamento del testo degli score
  yourScore.textContent = `You: ${humanScore}`;
  pcScore.textContent = `Computer: ${computerScore}`;
}

// Funzione per ottenere la scelta del computer
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}














