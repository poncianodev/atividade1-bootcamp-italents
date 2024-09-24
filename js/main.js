import {
  startBtn,
  pauseBtn,
  resetBtn,
  startTimer,
  pauseTimer,
  resetTimer,
  updateTimerDisplay,
} from "./module.js";

// Adicionando eventos aos botões
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Inicializa o display
updateTimerDisplay();
