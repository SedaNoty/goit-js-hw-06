const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const liAll = [];

ingredients.forEach(ingredient => {
	const li = document.createElement('li')
	li.className = 'item'
	li.textContent = ingredient
	liAll.push(li)
})

list.append(...liAll)
