let secretNumber
let arrow = document.querySelector('#arrow')
let score = 100

const pointsAvailable = document.querySelector('#points-available')
const input = document.querySelector('input[name="guess"]');
const gameplay = document.querySelector('#gameplay')
const message = document.querySelector('h3')

document.querySelector('input').addEventListener('keydown', checkAnswer)
document.querySelector('button').addEventListener('click', start)

function generateSecretNumber() {
   return Math.floor(Math.random() * 20) + 1;
}

function displayScore() {
  pointsAvailable.innerHTML = score
}

function start() {
  secretNumber = generateSecretNumber()
  message.innerHTML = 'Good luck!'
  console.log('secretNumber', secretNumber)
  input.disabled = false
  arrow.classList.add('blank')
  input.value = ''
  score = 100
  displayScore()
}

function correct(guess) {
  message.innerHTML = `Yes!! ${guess} is the right answer. You scored ${score}`
  arrow.classList.add('blank')
  input.disabled = true;
}

function tooHigh() {
  arrow.classList.remove('blank')
  arrow.src = '../number-guess/images/arrow-down.png'
  message.innerHTML = "Too high"
  score -= 10
  displayScore()
}

function tooLow() {
  arrow.classList.remove('blank')
  arrow.src = '../number-guess/images/arrow-up.png'
  message.innerHTML = "Too low"
  score -= 10
  displayScore()
}

function checkAnswer(event) {
  // make sure the user in entering their response
  if (event.key === 'Enter') {
    let guess = event.target.value
    console.log('guess', guess)
    event.target.value = ''
    
    if (guess == secretNumber) {
      correct(guess)
    } else if (guess > secretNumber) {
      tooHigh()
    } else {
      tooLow()
    }
    document.querySelector('input[name="guess"]').value = ''
    document.querySelector('input[name="guess"]').focus()
  } 
}

start()
