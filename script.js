'use strict';


const answer = Math.trunc(Math.random()*20) + 1
document.querySelector('.number').textContent = answer

let score = 20;

//?NOTE an event is something that happens on the page EX) mouse click, mouse moving, key press, button press. 
//?NOTE an event listener is when we wait for an event to happen and then react to it

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = "🚫 No Number!"
  } else if (guess === answer) {
    document.querySelector('.message').textContent = "YOU WIN 🎊"
  } else if (guess < answer) {
    score > 1 ? (
      document.querySelector('.message').textContent = "⏬Guess was too low",
      score-- ,
      document.querySelector('.score').textContent = score
      ) : (
        document.querySelector('.message').textContent = "YOU LOSE 🥱" ,
        document.querySelector('.score').textContent = 0
      )
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

//?NOTE because we are waiting for an event , the function won't run until the event happens