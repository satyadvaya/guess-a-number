// import functions and grab DOM elements

// initialize state
const guessInput = document.getElementById('guess-input-id');
const button = document.getElementById('button-id');
const comparisonSpan = document.getElementById('comparison-span-id');
const attemptsSpan = document.getElementById('attempts-span-id');


let randomNumber = Math.ceil(Math.random() * 20);
let remainingGuesses = 4;

// set event listeners
button.addEventListener('click', () => {

    let guessedNumber = Number(guessInput.value);

    if (guessedNumber === randomNumber) {
        comparisonSpan.textContent = 'You guessed correctly!';
    }
    else if (guessedNumber > randomNumber) {
        comparisonSpan.textContent = 'Your guess is TOO HIGH — guess lower!';
        remainingGuesses --;
    } else {
        comparisonSpan.textContent = 'Your guess is TOO LOW — guess higher!';
        remainingGuesses --;
    }
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

