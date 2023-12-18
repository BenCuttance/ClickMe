const startBtn = document.getElementById("startBtn");
const gameBtn = document.getElementById("gameBtn");
const restartBtn = document.getElementById("restartBtn");

startGame = () => {
  startBtn.style.display = "none";
  gameBtn.style.display = "block";
  restartBtn.style.display = "block";
  myCountDown()

  setInterval(myCountDown, 1000);
};

playBtn = () => {
  const myTop = Math.floor(Math.random() * (850 - 85) + 85);
  const myLeft = Math.floor(Math.random() * (1730 - 0) + 0);
  newTopValue = myTop + "px";
  newLeftValue = myLeft + "px";
  gameBtn.style.top = newTopValue;
  gameBtn.style.left = newLeftValue;
  decreaseSize();
};

var initalHeight = 100;
var initalWidth = 200;
var initalFont = 30;

decreaseSize = () => {
  initalFont = initalFont * 0.9;
  initalHeight = initalHeight - 5;
  initalWidth = initalWidth - 10;

  var updatedFont = initalFont + "px";
  var updatedHeight = initalHeight + "px";
  var updatedWidth = initalWidth + "px";

  console.log(updatedHeight);
  gameBtn.style.fontSize = updatedFont;
  gameBtn.style.height = updatedHeight;
  gameBtn.style.width = updatedWidth;
};

var i = 0;
scoreFunction = () => {
  document.getElementById("myScore").value = ++i;
};

displayScoreBoard = () => {};

restartGame = () => {};

startBtn.addEventListener("click", startGame);
gameBtn.addEventListener("click", playBtn);

const countDownTimer = document.getElementById("myCountdown");
var seconds = 30;

myCountDown = () => {
  seconds = seconds;
  seconds--;
  countDownTimer.value = seconds;
};


