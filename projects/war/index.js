const pips = [2,3,4,5,6,7,8,9,10,'jack', 'queen', 'king', 'ace']
const suits = ["clubs", "diamonds", "hearts", "spades"]

// create a deck of cards
let deck = []
pips.forEach(pip => {
  suits.forEach(suit => {
    deck.push(`${suit}_${pip}`)
  })
})

let scores = {
  a: 0,
  b: 0
}

function drawRandomCards() {
  if (deck.length) {
    let indexA = Math.floor(Math.random() * deck.length); // Get a random index
    let cardA = deck.splice(indexA, 1)[0]; 
    let aScore = pips.findIndex( pip => {
      return pip == cardA.split('_')[1]
    })// Remove the card from the deck and get the card name
    
    let indexB = Math.floor(Math.random() * deck.length); // Get a random index
    let cardB = deck.splice(indexB, 1)[0]; // Remove the card from the deck and get the card name
    let bScore = pips.findIndex( pip => {
      return pip == cardB.split('_')[1]
    })

    console.log('aScore', aScore)
    console.log('bScore', bScore)

    if (aScore > bScore) {
      scores.a++
    }

    if (bScore > aScore) {
      scores.b++
    }

    document.querySelector('#score-a').innerHTML = scores.a
    document.querySelector('#score-b').innerHTML = scores.b

    document.querySelector('#cardA').src=`./images/png/${cardA}.png`
    document.querySelector('#cardB').src=`./images/png/${cardB}.png`
  }
}