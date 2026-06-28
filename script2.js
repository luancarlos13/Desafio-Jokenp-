const resultado = document.querySelector('.result');
const humanScore = document.querySelector('#human-point');
const machineScore = document.querySelector('#machine-point');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {

  playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]
}

const playTheGame = (human, machine) => {
  console.log('Humano: ' + human + 'Máquina: ' + machine)

  if (human === machine) {
    resultado.innerHTML = "Empate! 🧿"

  } else if ((human === 'rock' && machine === 'scissors') ||
    (human === 'paper' && machine === 'rock') ||
    (human === 'scissors' && machine === 'paper')
            
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    resultado.innerHTML = "Você ganhou! 🥳"

} else {
  machineScoreNumber++
  machineScore.innerHTML = machineScoreNumber
  resultado.innerHTML = "A máquina venceu! 🤖"
}
}