// Selecionando os elementos do DOM
export const timerDisplay = document.getElementById("timer");
export const startBtn = document.getElementById("start");
export const pauseBtn = document.getElementById("pause");
export const resetBtn = document.getElementById("reset");

export let timeLeft = 25 * 60; // 25 minutos em segundos
export let interval;
export let isRunning = false;

// Função para formatar o tempo no formato mm:ss
export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  return `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
}

// Atualiza o display do timer
export function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

// Função para iniciar o timer
export function startTimer() {
  if (!isRunning) {
    interval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(interval);
        alert("Pomodoro completo!");
      }
    }, 1000);
    isRunning = true;
    startBtn.disabled = true; // Desativa o botão Start
  }
}

// Pausa o timer
export function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
  startBtn.disabled = false; // Habilita o botão Start novamente
}

// Reseta o timer para 25 minutos
export function resetTimer() {
  clearInterval(interval);
  timeLeft = 25 * 60;
  updateTimerDisplay();
  isRunning = false;
  startBtn.disabled = false; // Habilita o botão Start novamente
}
