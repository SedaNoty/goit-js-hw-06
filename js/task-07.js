const sliderMovement = document.querySelector('input#font-size-control')
const textSize = document.querySelector('span#text')

sliderMovement.addEventListener('change', e => {
    textSize.style.fontSize = `${e.target.value }px`
});
