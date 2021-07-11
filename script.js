computerPlay = () => {
  let moves = ["r", "p", "s"];
  return moves[Math.floor(Math.random() * 3)];
};
let userScore = 0;
let computerScore = 0;
function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("only give me the first letter");
    playRound(playerSelection, computerPlay());
    console.log(userScore + " - " + computerScore);
  }
}
function playRound(player, computer) {
  switch (player + computer) {
    case "rs":
    case "pr":
    case "sp":
      console.log("you win!");
      userScore++;
      break;
    case "sr":
    case "rp":
    case "sp":
      console.log("you lose!");
      computerScore++;
      break;
    case "ss":
    case "rr":
    case "pp":
      console.log("its a tie!");
      break;
  }
}
game();
