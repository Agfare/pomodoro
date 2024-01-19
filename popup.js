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

  // Initial setup
  switchTab(activeTab);

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
});
