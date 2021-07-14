'use strict';


const answer = Math.trunc(Math.random()*20) + 1
document.querySelector('.number').textContent = answer

//?NOTE an event is something that happens on the page EX) mouse click, mouse moving, key press, button press. 
//?NOTE an event listener is when we wait for an event to happen and then react to it

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = "🚫 No Number!"
  } else if (guess === answer) {
    document.querySelector('.message').textContent = "YOU WIN 🎊"
  } else if (guess < answer) {
    document.querySelector('.message').textContent = "⏬Guess was too low"
  } else {
    document.querySelector('.message').textContent = "⏫Guess was too high"
  }
});

//?NOTE because we are waiting for an event , the function won't run until the event happens