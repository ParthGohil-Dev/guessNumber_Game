'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please guess an number.';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'your guess is absolutely Correct !!';
    document.body.style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').innerHTML = secretNumber;

    if (score > highScore) {
      document.querySelector('.highscore').innerText = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'your guess is too high';
      score--;
      document.querySelector('.score').innerText = score;
    } else {
      document.querySelector('.message').textContent = 'you loose the game.';
      document.querySelector('.score').textContent = '0';
      document.body.style.backgroundColor = 'red';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'your guess is too low';
      score--;
      document.querySelector('.score').innerText = score;
    } else {
      document.querySelector('.message').textContent = 'you loose the game.';
      document.querySelector('.score').textContent = '0';
      document.body.style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.body.style.backgroundColor = '#222222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').innerText = score;
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.number').style.width = '15rem';
});
