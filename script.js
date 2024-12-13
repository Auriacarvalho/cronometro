let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function formatTime() {
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedHours = hours < 10 ? '0' + hours : hours;
  
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
  if (running) return; // Impede iniciar o cronômetro se já estiver em execução
  running = true;

  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    document.getElementById('timer').textContent = formatTime();
  }, 1000);

  // Altera o texto do botão para "Pausar"
  document.getElementById('start').textContent = 'Pausar';
}

function stopTimer() {
  running = false;
  clearInterval(timer);

  // Altera o texto do botão para "Iniciar"
  document.getElementById('start').textContent = 'Iniciar';
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('timer').textContent = formatTime();

  // Altera o texto do botão para "Iniciar"
  document.getElementById('start').textContent = 'Iniciar';
}
