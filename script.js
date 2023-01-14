const images = [
    'C:/Users/efloresa/Downloads/1.jpeg',
    'C:/Users/efloresa/Downloads/2.jpeg',
    'C:/Users/efloresa/Downloads/3.jpeg',
    'C:/Users/efloresa/Downloads/familia.jpeg',
    'C:/Users/efloresa/Downloads/3.jpeg'
  ];
  
  const carousel = document.querySelector('#carousel');
let currentIndex = 0;

const createImg = () => {
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.alt = `Imagen ${currentIndex + 1}`;
    img.style.animationName = 'fade';
    img.style.animationDuration = '2s';
    carousel.appendChild(img);
}

createImg();

setInterval(() => {
  carousel.firstChild.remove();
  currentIndex = (currentIndex + 1) % images.length;
  createImg();
}, 2000);