// import functions and grab DOM elements

// initialize state
const guessInput = document.getElementById('guess-input-id');
const guessButton = document.getElementById('guess-button-id');
const comparisonSpan = document.getElementById('comparison-span-id');
const attemptsSpan = document.getElementById('attempts-span-id');
const resetButton = document.getElementById('reset-button-id');

let randomNumber = Math.ceil(Math.random() * 20);
let remainingGuesses = 3;

// set event listeners
guessButton.addEventListener('click', () => {

    let guessedNumber = Number(guessInput.value);
    console.log(randomNumber);

    if (remainingGuesses === 0) {
        comparisonSpan.textContent = 'Game Over';
        attemptsSpan.textContent = `You have ${remainingGuesses} guesses remaining!`;
        guessButton.disabled = true;
        resetButton.disabled = false;
        return;
    }

    if (guessedNumber > randomNumber) {
        comparisonSpan.textContent = 'Your guess is TOO HIGH — guess lower!';
        attemptsSpan.textContent = `You have ${remainingGuesses} guesses remaining!`;
        remainingGuesses--;

    } else if (guessedNumber < randomNumber){
        comparisonSpan.textContent = 'Your guess is TOO LOW — guess higher!';
        attemptsSpan.textContent = `You have ${remainingGuesses} guesses remaining!`;        
        remainingGuesses--;

    } else {
        comparisonSpan.textContent = 'You guessed correctly!';
        attemptsSpan.textContent = 'No need to guess any further — YOU WON!';
        guessButton.disabled = true;
        resetButton.disabled = false;
        return;
    }
});

resetButton.addEventListener('click', () => {

    randomNumber = Math.ceil(Math.random() * 20);
    remainingGuesses = 4;
    guessInput.value = '';
    comparisonSpan.textContent = 'I will tell you if you need to guess higher or lower ...';
    attemptsSpan.textContent = `You have ${remainingGuesses} guesses remaining!`;
    guessButton.disabled = false;
    resetButton.disabled = true;
    remainingGuesses--;
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

