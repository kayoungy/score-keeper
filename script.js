let teamAScore = 0;
let teamBScore = 0;

let teamADisplay;
let teamBDisplay;

function saveScores() {
  localStorage.setItem("teamAScore", teamAScore);
  localStorage.setItem("teamBScore", teamBScore);
}

function loadScores() {
  teamAScore = parseInt(localStorage.getItem("teamAScore")) || 0;
  teamBScore = parseInt(localStorage.getItem("teamBScore")) || 0;
}

function updateScores() {
  teamADisplay.textContent = String(teamAScore);
  teamBDisplay.textContent = String(teamBScore);
}

function updateAndSave() {
  updateScores();
  saveScores();
}

function initScorekeeper() {
  loadScores();

  const device = document.querySelector(".device");
  teamADisplay = document.querySelector("#team-a-display");
  teamBDisplay = document.querySelector("#team-b-display");

  const teamAPanel = teamADisplay && teamADisplay.closest(".panel");
  const teamBPanel = teamBDisplay && teamBDisplay.closest(".panel");
  const resetButton = device && device.querySelector(".reset");

  if (!device || !teamADisplay || !teamBDisplay || !teamAPanel || !teamBPanel || !resetButton) {
    return;
  }

  updateScores();

  teamAPanel.querySelector(".increment").addEventListener("click", function () {
    teamAScore += 1;
    updateAndSave();
  });

  teamAPanel.querySelector(".decrement").addEventListener("click", function () {
    teamAScore -= 1;
    updateAndSave();
  });

  teamBPanel.querySelector(".increment").addEventListener("click", function () {
    teamBScore += 1;
    updateAndSave();
  });

  teamBPanel.querySelector(".decrement").addEventListener("click", function () {
    teamBScore -= 1;
    updateAndSave();
  });

  resetButton.addEventListener("click", function () {
    teamAScore = 0;
    teamBScore = 0;
    updateAndSave();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScorekeeper);
} else {
  initScorekeeper();
}
