
const textLength = document.querySelector('#validation-input')

textLength.addEventListener('blur', event => {
	if (event.target.value.length == textLength.getAttribute('data-length')) {
		textLength.classList.add('valid')
		if (textLength.classList.contains('invalid')) {
			textLength.classList.remove('invalid')
		}
	} else {
		if (textLength.classList.contains('valid')) {
			textLength.classList.remove('valid')
		}
		textLength.classList.add('invalid')
	}
});

