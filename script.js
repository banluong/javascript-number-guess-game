'use strict';

// Define secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Set score
let score = 20;

// Set high score
let highScore = 0;

// display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// display score
const displayScore = function (showScore) {
  document.querySelector('.score').textContent = showScore;
};

// addEventListener works when .check is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If there is no number
  if (!guess) {
    displayMessage('⛔ No number!');

    // If guess is correct
  } else if (guess === secretNumber) {
    displayMessage('💪 Correct!');
    document.querySelector('.number').textContent = secretNumber;
    // Save high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // Change background color when correct, manipulate CSS
    document.querySelector('body').style.backgroundColor = '#1affb2';
    // Double width of number background, manipulate CSS
    document.querySelector('.number').style.width = '30rem';

    // If guess isn't secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📉 Go lower!' : '📈 Go higher!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lose!');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = '#f30101';
    }
  }
});

// Again event handler
document.querySelector('.again').addEventListener('click', function () {
  // Restore score and reset secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset message and score
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Change background color when correct, manipulate CSS
  document.querySelector('body').style.backgroundColor = '#01f321';
  // Reset width of number background, manipulate CSS
  document.querySelector('.number').style.width = '15rem';
});
