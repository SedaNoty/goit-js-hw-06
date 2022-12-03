let counterValue = 0;

const digitalCounter = document.querySelector('#value');
const buttonDown = document.querySelector('button[data-action="decrement"]');
const buttonUp = document.querySelector('button[data-action="increment"]');

buttonDown.addEventListener('click', () => {
	counterValue -=1
	digitalCounter.textContent = counterValue
});

buttonUp.addEventListener('click', () => {
	counterValue +=1
	digitalCounter.textContent = counterValue
});