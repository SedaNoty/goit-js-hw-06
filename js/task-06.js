
const textLength = document.querySelector('#validation-input');

const numberOfValues = Number(textLength.dataset.length);

textLength.addEventListener('blur', () => {
  if (textLength.value.length === numberOfValues) {
	 textLength.classList.replace('invalid', 'valid');
    } else {
    textLength.classList.add('invalid');
	}
});
