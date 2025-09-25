'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// just for test log:
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // log guess
  console.log(typeof guess, guess);

  if (!guess) {
    displayMessage('⛔ No number!');
  }
  // 🎉 الحالة ديال الفوز
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number! Click Again ⏩');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // تعطيل check حتى يضغط again
    checkBtn.disabled = true;
  }
  // 📉 الحالة ديال الخطأ
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👾 You lost the game! Click Again ⏩');
      document.querySelector('.score').textContent = 0;

      // تعطيل check حتى يضغط again
      checkBtn.disabled = true;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`new number : ${secretNumber}`);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // إعادة تفعيل زر check
  checkBtn.disabled = false;
});
