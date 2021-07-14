'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value);

//?NOTE an event is something that happens on the page EX) mouse click, mouse moving, key press, button press. 
//?NOTE an event listener is when we wait for an event to happen and then react to it