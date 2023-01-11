const header = document.querySelector('header');
const slides = [...document.querySelectorAll('.slide')];

let currentIndex = 0;
let isTransitioning = false;

document.addEventListener('click', () => {
  if(isTransitioning) {
    return;
  }
  isTransitioning = true;
  const lastIndex = (currentIndex + slides.length - 1) % slides.length;
  slides[lastIndex].classList.remove('slide-prev');
  slides[lastIndex].classList.add('slide-next');
  slides[currentIndex].classList.add('slide-prev');
  currentIndex = ++currentIndex % slides.length;
  slides[currentIndex].classList.remove('slide-next');

  if(currentIndex % 2 === 0) {
    header.classList.toggle('black-text');
  }

  setTimeout(() => isTransitioning = false, 1400);
});