let timerInterval;
let isBreak = false;
let minutes, seconds;

function startTimer() {
  timerInterval = setInterval(function() {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      seconds = 59;
      minutes--;
    } else {
      clearInterval(timerInterval);
      if (isBreak) {
        startBreak();
      } else {
        startLongBreak();
      }
    }

    updateTimerDisplay();
  }, 1000);
}

function startBreak() {
  isBreak = false;
  minutes = 5;
  seconds = 0;
  startTimer();
}

function startLongBreak() {
  isBreak = true;
  minutes = 25;
  seconds = 0;
  startTimer();
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function stopTimer() {
  clearInterval(timerInterval);
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  document.getElementById('minutes').innerText = padNumber(minutes);
  document.getElementById('seconds').innerText = padNumber(seconds);
}

function padNumber(num) {
  return num.toString().padStart(2, '0');
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('stop').addEventListener('click', stopTimer);

// Initialize the timer display
minutes = 25;
seconds = 0;
updateTimerDisplay();
