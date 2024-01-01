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
};

var i = 0;

scoreFunction = () => {
  document.getElementById("myScore").value = ++i;
};

displayScoreBoard = () => {

  let previousScore = [],
  keys = Object.keys(localStorage)
  i = keys.length
  while ( i-- ){
    previousScore.push( localStorage.getItem(keys[i]))
  }

  
  Object.entries(window.localStorage).forEach(([key, val]) => {

    const playerArr = []
    let stringScore = val;
    playerArr.push(val)
    // console.log(playerArr)
    
    let sortedArr = playerArr 
    .map(function (str) {
      var match = str.match(/\d+/);
  
      return match ? parseInt(match[0]) : 0;

    })

    .map(function (score, index) {
      console.log( { original: playerArr[index], score: score})
      return { original: playerArr[index], score: score}
    })

    .sort(function (a, b) {
      return b.score - a.score
    })

    .map(function (item) {
  
      return item.original
      
    })

    
    
    
    let previousPlayerScore = document.createElement('li')
    previousPlayerScore.innerHTML = sortedArr
    scoreList.appendChild(previousPlayerScore)
  })
  
  
  console.log('this is a string')
    
  let player = window.prompt("Player Name?")
  var li = document.createElement('li')
  console.log(`${player} | score ${document.getElementById("myScore").value }`)
  localStorage.setItem(`${player}`, `${player} | score ${document.getElementById("myScore").value }`)
  li.appendChild(document.createTextNode(localStorage.getItem(`${player}`)))

  scoreList.appendChild(li)

  
  scoreBoard.style.display = 'block'
  gameBtn.style.display = 'none'
};




restartGame = () => {

  scoreBoard.style.display = 'none'
  clearInterval(countDown)
  resetTimer();
  gameBtn.style.display = 'none'
  startBtn.style.display = 'block'
  document.getElementById('myScore').value = 0
  

  gameBtn.style.fontSize = '30px';
  gameBtn.style.height = '100px';
  gameBtn.style.width = '200px';

  initalFont = 30 * 0.9;
  initalHeight = 100 - 5;
  initalWidth = 200 - 10;

  i = 0
  resetScore = i 
  document.getElementById('myScore').value = resetScore

  countDownTimer.value = 10;
};



let seconds = 10;

myCountDown = () => {
 countDown = setInterval(function() {
    seconds--;
    countDownTimer.value = seconds;
    if (seconds == 0) {
      clearInterval(countDown)
      displayScoreBoard()
    }
  }, 1000)
  
};

resetTimer = () => {
  seconds = 10;
}

startBtn.addEventListener("click", startGame);
gameBtn.addEventListener("click", playBtn);
restartBtn.addEventListener('click', restartGame)

