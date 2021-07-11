const buttons = document.querySelectorAll(".choice");
const playerScoreDis = document.querySelector("#playerScore");
const computerScoreDis = document.querySelector("#computerScore");
const outcome = document.querySelector("#outcome");
let userScore = 0;
let computerScore = 0;
let userMove;

computerPlay = () => {
  let moves = ["r", "p", "s"];
  return moves[Math.floor(Math.random() * 3)];
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    userMove = e.target.value;
    playRound(userMove, computerPlay());
  });
});
function playRound(player, computer) {
  switch (player + computer) {
    case "rs":
    case "pr":
    case "sp":
      userScore++;
      playerScoreDis.textContent = userScore;
      break;
    case "sr":
    case "rp":
    case "ps":
      computerScore++;
      computerScoreDis.textContent = computerScore;
      break;
    case "ss":
    case "rr":
    case "pp":
      break;
  }
  if (userScore >= 5) {
    outcome.textContent = "You win!";
    buttons.forEach((button) => {
      button.removeEventListener("click");
    });
  } else if (computerScore >= 5) {
    outcome.textContent = "You lose!";
  }
}
