// 🐹 🎉 😢
let isGameActive = false;
let score = 0;
let rounds = 3;

const startButton = document.getElementById('start-button');
const cells = document.querySelectorAll('.cell');
const scoreElement = document.getElementById('score');
const roundsElement = document.getElementById('rounds');
const messageElement = document.getElementById('message');

const startGame = () =>  {
  isGameActive = true;
  startButton.disabled = true;
  showMole();
}

const showMole = () => {
  const randomIndex = getRandomNumber(0, 9);
  cells[randomIndex].textContent = "🐹";
  
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max- min) + min);
}

startButton.addEventListener('click', () => {
  startGame();
})