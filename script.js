'use strict';


document.querySelector('.number').textContent = "?"

let answer = Math.trunc(Math.random()*20) + 1
let score = 20;
let highscore = 0;

//?NOTE an event is something that happens on the page EX) mouse click, mouse moving, key press, button press. 
//?NOTE an event listener is when we wait for an event to happen and then react to it

const displayMessage = (DOMString, arr) => {
  return document.querySelector(DOMString).textContent = arr
}

const checkIfLose = (guess) => {
  score > 1 ? (
    (document.querySelector('.message').textContent = guess < answer ? "⏬Guess was too low" : "⏫Guess was too high"),
    score-- ,
    // document.querySelector('.score').textContent = score
    displayMessage('.score', score)
    ) : (
      displayMessage('.message', "YOU LOSE 🥱"),
      displayMessage('.score', 0)
    )
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no number input
  if (!guess) {
    displayMessage('.message', "🚫 No Number!");


    // When the answer is correct
  } else if (guess === answer) {
    displayMessage('.message', "YOU WIN 🎊");
    displayMessage('.number', answer);
    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score > highscore ? (
      highscore = score,
      displayMessage('.highscore', highscore)
      ) : null

    // When guess is incorrect
  } else if (guess !== answer) {
    checkIfLose(guess);
  }
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  answer = Math.trunc(Math.random()*20) + 1;
  displayMessage('.message', "Start guessing...");
  displayMessage('.score', score);
  displayMessage('.number', "?");
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = "#222"
  document.querySelector('.number').style.width = "15rem"
});

//?NOTE because we are waiting for an event , the function won't run until the event happens