const buttons = document.querySelectorAll(".choice");
const playerScoreDis = document.querySelector("#playerScore");
const computerScoreDis = document.querySelector("#computerScore");
const outcome = document.querySelector("#outcome");
let userScore = 0;
let computerScore = 0;
let userMove;

// randomizing computer move
computerPlay = () => {
  let moves = ["r", "p", "s"];
  return moves[Math.floor(Math.random() * 3)];
};

// plays the round when user clicks a button
function handleClick(e) {
  userMove = e.target.value;
  playRound(userMove, computerPlay());
}
// informs user that he won
youWin = () => {
  outcome.textContent = "You win!";
  buttons.forEach((button) => {
    button.removeEventListener("click", handleClick);
    button.style.border = "5px solid green";
  });
};
// informs user that he lost
youLose = () => {
  outcome.textContent = "You lose!";
  buttons.forEach((button) => {
    button.removeEventListener("click", handleClick);
    button.style.border = "5px solid red";
  });
};
// round logic
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
    youWin();
  } else if (computerScore >= 5) {
    youLose();
  }
}

// makes buttons clickable
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
