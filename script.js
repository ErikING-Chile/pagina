const images = [
    './img/1.jpeg',
    './img/2.jpeg',
    './img/3.jpeg',
    './img/familia.jpeg',
    './img/4.jpeg',
    './img/5.jpeg',
    './img/6.jpeg',
    './img/7.jpeg',
    './img/8.jpeg',
    './img/9.jpeg',
    './img/10.jpeg',
    './img/11.jpeg',
    './img/12.jpeg'
  ];
  
  const carousel = document.querySelector('#carousel');
let currentIndex = 0;

const createImg = () => {
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.alt = `Imagen ${currentIndex + 1}`;
    img.style.animationName = 'fade';
    img.style.animationDuration = '4s';
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
