const images = [
    './img/1.jpeg',
    './img/2.jpeg',
    './img/3.jpeg',
    './img/familia.jpeg',
    './img/4.jpeg'
  ];
  
  const carousel = document.querySelector('#carousel');
let currentIndex = 0;

const createImg = () => {
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.alt = `Imagen ${currentIndex + 1}`;
    img.style.animationName = 'fade';
    img.style.animationDuration = '2s';
    img.style.width = "100%";
    img.style.height = "100%";
    carousel.appendChild(img);
}

createImg();

setInterval(() => {
  carousel.firstChild.remove();
  currentIndex = (currentIndex + 1) % images.length;
  createImg();
}, 2000);
