const numbers = {
  b: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  i: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  n: [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
  g: [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
  o: [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
}

let chosenNumbers = {
  b: [],
  i: [],
  n: [],
  g: [],
  o: [],
}

function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function pickFiveUniqueNumbers(letter) {
    // First, shuffle the array
    const shuffledArray = shuffleArray([...numbers[letter]]); // Use a copy of the array to avoid modifying the original

    // Then, slice the first 5 elements
    return shuffledArray.slice(0, 5);
}

function pickFiveUniqueNumbers(letter) {
    // First, shuffle the array
    const shuffledArray = shuffleArray([...numbers[letter]]); // Use a copy of the array to avoid modifying the original

    // Then, slice the first 5 elements
    return shuffledArray.slice(0, 5);
}



let correctNumbers = 

chosenNumbers.b = pickFiveUniqueNumbers('b');
chosenNumbers.i = pickFiveUniqueNumbers('i');
chosenNumbers.n = pickFiveUniqueNumbers('n');
chosenNumbers.g = pickFiveUniqueNumbers('g');
chosenNumbers.o = pickFiveUniqueNumbers('o');

['b','i','n','g','o'].forEach ( letter => {
  document.querySelector(`#${letter}-0`).innerHTML = chosenNumbers[letter][0]
  document.querySelector(`#${letter}-1`).innerHTML = chosenNumbers[letter][1]
  document.querySelector(`#${letter}-2`).innerHTML = chosenNumbers[letter][2]
  document.querySelector(`#${letter}-3`).innerHTML = chosenNumbers[letter][3]
  document.querySelector(`#${letter}-4`).innerHTML = chosenNumbers[letter][4]
})