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

const hideMole = () => {
  cells.forEach((cell) => {
    cell.textContent= "";
  })
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max- min) + min);
}

const handleCellClick = (cell) => {
  if(cell.textContent === "🐹") {
    score += 1;
    rounds -= 1;
    updateLabels();
    if (score > 2) {
      endGame(true);
    } else {
      hideMole();
      showMole();
    }
  } else {
    endGame(false);
  }
  
}

const resetGame = () => {
  let score = 0;
  let rounds = 3;
  updateLabels();
  hideMole();
}

const updateLabels = () => {
  scoreElement.textContent = `Счёт: ${score}`
  roundsElement.textContent =  `Осталось раундов: ${rounds}`
}

const endGame = (win) => {
  isGameActive = false;
  startButton.disabled = false;
  if(win) {
    alert("Вы выиграли! 🎉");
    messageElement.textContent = "Вы выиграли! Нажмите кнопку Старт, чтобы начать игру";
  } else {
    alert("Вы проиграли! 😢");
    messageElement.textContent = "Вы проиграли! Нажмите кнопку Старт, чтобы начать игру";
  }
  resetGame();
}

startButton.addEventListener('click', () => {
  startGame();
})

cells.forEach((cell) => {
  cell.addEventListener("click", () =>  {
    if(isGameActive) {
    
      handleCellClick(cell);
    }
  });
})