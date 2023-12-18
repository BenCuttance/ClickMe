const startBtn = document.getElementById('startBtn')
const gameBtn = document.getElementById('gameBtn')
const restartBtn = document.getElementById('restartBtn')

startGame = () => {
startBtn.style.display = 'none'
gameBtn.style.display = 'block'
restartBtn.style.display = 'block'
}

playBtn = () => {
const myTop = Math.floor(Math.random() * (850 - 85) + 85)
const myLeft = Math.floor(Math.random() * (1730 - 0) + 0)
newTopValue = myTop + 'px'
newLeftValue = myLeft + 'px'
console.log(newLeftValue)
gameBtn.style.top = newTopValue
gameBtn.style.left = newLeftValue


}

var i = 0 
scoreFunction = () => {
document.getElementById('myScore').value = ++i;
}

displayScoreBoard = () => {

};

restartGame = () => {

}

startBtn.addEventListener('click', startGame)
gameBtn.addEventListener('click', playBtn)