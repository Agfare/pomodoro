document.addEventListener('DOMContentLoaded', function () {
  let timerContainer = document.getElementById('timer');
  let buttonsContainer = document.getElementById('buttons-container');
  let tabsContainer = document.getElementById('tabs');

  let tabs = {
    timer: document.getElementById('timer-tab'),
    insights: document.getElementById('insights-tab'),
    donate: document.getElementById('donate-tab')
  };

  let activeTab = 'timer';
  let timerInterval;
  let isBreak = false;
  let minutes, seconds;

  function switchTab(tab) {
    if (activeTab === tab) return;

    // Hide previous content
    if (activeTab === 'timer') {
      timerContainer.style.display = 'none';
      buttonsContainer.style.display = 'none';
    }

    // Reset active tab styling
    tabs[activeTab].classList.remove('active-tab');

    // Show new content
    if (tab === 'timer') {
      timerContainer.style.display = 'block';
      buttonsContainer.style.display = 'flex';
    }

    // Set new active tab
    tabs[tab].classList.add('active-tab');
    activeTab = tab;
  }

  function startTimer() {
    timerInterval = setInterval(function () {
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

  // Event listeners for button actions
  document.getElementById('start').addEventListener('click', startTimer);
  document.getElementById('pause').addEventListener('click', pauseTimer);
  document.getElementById('stop').addEventListener('click', stopTimer);

  // Event listeners for tab switching
  tabs.timer.addEventListener('click', function () {
    switchTab('timer');
  });

  tabs.insights.addEventListener('click', function () {
    switchTab('insights');
    // You can add additional logic for the 'Insights' tab if needed
  });

  tabs.donate.addEventListener('click', function () {
    switchTab('donate');
    // You can add additional logic for the 'Donate' tab if needed
  });

  // Initial setup
  switchTab(activeTab);
});

