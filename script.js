'use strict';


document.querySelector('.number').textContent = "?"

let answer = Math.trunc(Math.random()*20) + 1
let score = 20;
let highscore = 0;

//?NOTE an event is something that happens on the page EX) mouse click, mouse moving, key press, button press. 
//?NOTE an event listener is when we wait for an event to happen and then react to it

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no number input
  if (!guess) {
    document.querySelector('.message').textContent = "🚫 No Number!";


    // When the answer is correct
  } else if (guess === answer) {
    document.querySelector('.message').textContent = "YOU WIN 🎊";
    document.querySelector('.number').textContent = answer;
    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score > highscore ? (
      highscore = score,
      document.querySelector('.highscore').textContent = highscore
      ) : null

    // When guess is too low
  } else if (guess < answer) {
    score > 1 ? (
      document.querySelector('.message').textContent = "⏬Guess was too low",
      score-- ,
      document.querySelector('.score').textContent = score
      ) : (
        document.querySelector('.message').textContent = "YOU LOSE 🥱" ,
        document.querySelector('.score').textContent = 0
      )

      // When guess is too high
  } else {
    score > 1 ? (
      document.querySelector('.message').textContent = "⏫Guess was too high",
      score--,
      document.querySelector('.score').textContent = score
    ) : (
      document.querySelector('.message').textContent = "YOU LOSE 🥱" ,
      document.querySelector('.score').textContent = 0
    )
  }
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  answer = Math.trunc(Math.random()*20) + 1;
  document.querySelector('.message').textContent = "Start guessing..."
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = "#222"
  document.querySelector('.number').style.width = "15rem"
});

//?NOTE because we are waiting for an event , the function won't run until the event happens