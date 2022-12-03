const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imageGallery = document.querySelector('.gallery')
const galleryImg = images.map((element) =>
`<li><img src='${element.url}' alt='${element.alt}' width = '150' height = '100'></li>`);
imageGallery.insertAdjacentHTML('beforeend', galleryImg);
imageGallery.setAttribute('style', 'list-style-type: none; display: flex');
imageGallery.innerHTML = galleryImg.join('');
console.log(imageGallery);

