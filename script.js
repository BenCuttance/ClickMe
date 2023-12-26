const startBtn = document.getElementById("startBtn");
const gameBtn = document.getElementById("gameBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreBoard = document.getElementById('scoreBoard')
const scoreList = document.getElementById('scoreList')
const countDownTimer = document.getElementById("myCountdown");

const coloursArr = [
  {colour: 'green', hexa: '#0e6210'},
  {colour: 'red', hexa: '#ff0000'},
  {colour: 'blue', hexa: '#0000ff'},
  {colour: 'yellow', hexa:'#ffcc00' },
  {colour: 'purple', hexa: '#cc00cc'},

]

startGame = () => {
  const myTop = Math.floor(Math.random() * (850 - 85) + 85);
  const myLeft = Math.floor(Math.random() * (1730 - 0) + 0);
  newTopValue = myTop + "px";
  newLeftValue = myLeft + "px";
  gameBtn.style.top = newTopValue;
  gameBtn.style.left = newLeftValue;
  startBtn.style.display = "none";
  gameBtn.style.display = "block";
  restartBtn.style.display = "block";
  myCountDown()
  
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
  const randomColour = Math.floor(Math.random() * coloursArr.length)
  let newColour = coloursArr[randomColour]
  let updatedColour = newColour.hexa
  
  initalFont = initalFont * 0.9;
  initalHeight = initalHeight - 5;
  initalWidth = initalWidth - 10;

  let updatedFont = initalFont + "px";
  let updatedHeight = initalHeight + "px";
  let updatedWidth = initalWidth + "px";

  gameBtn.style.backgroundColor = updatedColour
  gameBtn.style.fontSize = updatedFont;
  gameBtn.style.height = updatedHeight;
  gameBtn.style.width = updatedWidth;


  console.log(`font = ${updatedFont}`, updatedHeight, updatedWidth)
  console.log(initalFont, initalHeight, initalWidth)
};

var i = 0;

scoreFunction = () => {
  document.getElementById("myScore").value = ++i;
};

displayScoreBoard = () => {

  let player = window.prompt("Player Name?")
  var li = document.createElement('li')
  li.appendChild(document.createTextNode(player + " score: " + (`${document.getElementById("myScore").value }`)));
  scoreList.appendChild(li)

  gameBtn.style.display = 'none'
};

restartGame = () => {
  gameBtn.style.display = 'none'
  startBtn.style.display = 'block'
  document.getElementById('myScore').value = 0
  

  gameBtn.style.fontSize = '30px';
  gameBtn.style.height = '100px';
  gameBtn.style.width = '200px';

  initalFont = 30 * 0.9;
  initalHeight = 100 - 5;
  initalWidth = 200 - 10;

  let updatedFont = initalFont + "px";
  let updatedHeight = initalHeight + "px";
  let updatedWidth = initalWidth + "px";

  console.log('--------------------reset---------------------')
  console.log(` font = ${updatedFont}`, updatedHeight, updatedWidth)
  console.log(initalFont, initalHeight, initalWidth)

  i = 0
  resetScore = i 
  document.getElementById('myScore').value = resetScore

  clearInterval(countDown)
  
  // countDownTimer.value = seconds;
  // updatedSeconds = seconds;

};



var seconds = 20;
// var updatedSeconds = seconds

myCountDown = () => {
 countDown = setInterval(function() {
    // var seconds = 20
    seconds--
    // updatedSeconds--;
    // countDownTimer.value = updatedSeconds;
    countDownTimer.value = seconds;
    if (seconds == 0) {
      clearInterval(countDown)
      console.log(`your score is ${document.getElementById("myScore").value }`)
      displayScoreBoard()
    }
  }, 1000)
  
};

startBtn.addEventListener("click", startGame);
gameBtn.addEventListener("click", playBtn);
restartBtn.addEventListener('click', restartGame)
