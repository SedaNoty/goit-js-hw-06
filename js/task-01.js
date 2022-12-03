const list = document.querySelectorAll('.item');

console.log(`Number of categories: ${list.length}`);

Array.prototype.forEach.call(list, (element) => {
    const chapter = element.querySelector('h2').innerHTML;
    const listLength = element.querySelectorAll('li').length;

    console.log(`Category: ${chapter}`);
    console.log(`Elements: ${listLength}`);
});

