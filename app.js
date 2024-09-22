'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value;);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displatMessege = function(messege) {
    document.querySelector('.message').textContent = messege;
};

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number 🚫';
        displatMessege('No Number 🚫');

        //when player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'correct Number🍸';
        displatMessege("'correct Number🍸'");
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        //highscore
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //when guess is wrong
    } else if (guess != secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? 'Too high📈' : 'Too low';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost the Game! 💥';
            document.querySelector('.score').textContent = 0;
        }
    }

    //   //when guess is too high
    //   else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too high📈';
    //       score = score - 1;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'you lost the Game! 💥';
    //       document.querySelector('.score').textContent = 0;
    //     }

    //   }
    //    //when guess is too low
    //   else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too low 📉';
    //       score = score - 1;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'you lost the Game! 💥';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //   }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
});