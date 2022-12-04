function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const pressTheButton = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorBody = document.querySelector('span.color')


pressTheButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorBody.textContent = color;
});
