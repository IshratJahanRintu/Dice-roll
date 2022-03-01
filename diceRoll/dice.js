const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const totalScore0 = document.getElementById("total-score-0");
const totalScore1 = document.getElementById("total-score-1");
const currentScore0 = document.getElementById("current-score-0");
const currentScore1 = document.getElementById("current-score-1");
const diceFace = document.getElementById("dice-face");
const newGame = document.querySelector(".new-game");

let active = 0;

let currentScore = [0, 0];
let totalScore = [0, 0];

rollDice.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6 + 1);
  diceFace.src = `dice${dice}.png`;
  diceFace.classList.remove("hidden-dice-face");

  if (dice === 1) {
    switchPlayer();
  } else {
    currentScore[active] += dice;
    document.getElementById(
      `current-score-${active}`
    ).innerText = `${currentScore[active]}`;
  }
});

hold.addEventListener("click", () => {
  totalScore[active] += currentScore[active];
  if (totalScore[active] >= 25) {
    if (active === 0) {
      totalScore0.innerText = "WON!🎉";
      totalScore1.innerText = "LOST!😣";
    } else {
      totalScore1.innerText = "WON!🎉";
      totalScore0.innerText = "LOST!😣";
    }
    rollDice.disabled = true;
    hold.disabled = true;
    diceFace.classList.add("hidden-dice-face");
    document.getElementById(`current-score-${active}`).innerText = "0";
  } else {
    document.getElementById(`total-score-${active}`).textContent =
      totalScore[active];
    switchPlayer();
  }
});

newGame.addEventListener("click", () => {
  currentScore = [0, 0];
  totalScore = [0, 0];
  totalScore0.innerText = "0";
  totalScore1.innerText = "0";
  currentScore0.innerText = "0";
  currentScore1.innerText = "0";
  rollDice.disabled = false;
  hold.disabled = false;
  diceFace.classList.add("hidden-dice-face");
});

function switchPlayer() {
  currentScore[active] = 0;
  document.getElementById(`current-score-${active}`).innerText = "0";
  player0.classList.toggle("active");
  player1.classList.toggle("active");
  active = active === 0 ? 1 : 0;
}
