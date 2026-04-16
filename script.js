let teamAScore = 0;
let teamBScore = 0;

function saveScores() {
  localStorage.setItem("teamAScore", String(teamAScore));
  localStorage.setItem("teamBScore", String(teamBScore));
}

function loadScores() {
  const savedTeamAScore = parseInt(localStorage.getItem("teamAScore"), 10);
  const savedTeamBScore = parseInt(localStorage.getItem("teamBScore"), 10);

  if (!Number.isNaN(savedTeamAScore)) {
    teamAScore = savedTeamAScore;
  }

  if (!Number.isNaN(savedTeamBScore)) {
    teamBScore = savedTeamBScore;
  }
}

function updateScores() {
  document.getElementById("team-a-score").textContent = teamAScore;
  document.getElementById("team-b-score").textContent = teamBScore;
  saveScores();
}

function incrementTeamA() {
  teamAScore += 1;
  updateScores();
}

function decrementTeamA() {
  teamAScore -= 1;
  updateScores();
}

function incrementTeamB() {
  teamBScore += 1;
  updateScores();
}

function decrementTeamB() {
  teamBScore -= 1;
  updateScores();
}

loadScores();
updateScores();
