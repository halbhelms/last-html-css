let nextBoard = 0
const boards = [
  "LUDWIG VAN BEETHOVEN",
  "WOLFGANG AMADEUS MOZART",
  "JOSEPH HAYDN",
  "FRANZ SCHUBERT"
];

function processGuess(el) {
  const guessedLetter = el.target.innerHTML;

  // Find all the indices of the guessed letter
  let foundIndices = [...boards[nextBoard-1]].reduce((acc, letter, index) => {
    if (letter === guessedLetter) acc.push(index);
    return acc;
  }, []);

  foundIndices.forEach(index => {
    document.querySelector(`#board .letter:nth-child(${index + 1})`).classList.remove('blank');
  });
}

function addEventListeners() {
  document.querySelectorAll('.guess').forEach( el => {
    el.addEventListener('click', processGuess)
  })
}

const createLetter = (letter => {
  let el = document.createElement('div')
  el.innerHTML = letter;
  el.classList.add('letter')
  el.classList.add('blank')
  document.querySelector('section#board').appendChild(el)
})

function createBoard() {
  document.querySelector('section#board').innerHTML = ''
  boards[nextBoard].split('').forEach(letter => { createLetter(letter)})
  addEventListeners()
  nextBoard++
}
