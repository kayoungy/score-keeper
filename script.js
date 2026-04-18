let teamAScore = 0;
let teamBScore = 0;

let teamADisplay;
let teamBDisplay;

function updateScores() {
  teamADisplay.textContent = String(teamAScore);
  teamBDisplay.textContent = String(teamBScore);
}

function initScorekeeper() {
  const device = document.querySelector(".device");
  teamADisplay = document.querySelector("#team-a-display");
  teamBDisplay = document.querySelector("#team-b-display");

  const teamAPanel = teamADisplay && teamADisplay.closest(".panel");
  const teamBPanel = teamBDisplay && teamBDisplay.closest(".panel");
  const resetButton = device && device.querySelector(".reset");

  if (!device || !teamADisplay || !teamBDisplay || !teamAPanel || !teamBPanel || !resetButton) {
    return;
  }

  teamAPanel.querySelector(".increment").addEventListener("click", function () {
    teamAScore += 1;
    updateScores();
  });

  teamAPanel.querySelector(".decrement").addEventListener("click", function () {
    teamAScore -= 1;
    updateScores();
  });

  teamBPanel.querySelector(".increment").addEventListener("click", function () {
    teamBScore += 1;
    updateScores();
  });

  teamBPanel.querySelector(".decrement").addEventListener("click", function () {
    teamBScore -= 1;
    updateScores();
  });

  resetButton.addEventListener("click", function () {
    teamAScore = 0;
    teamBScore = 0;
    updateScores();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScorekeeper);
} else {
  initScorekeeper();
}
