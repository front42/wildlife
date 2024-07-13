const slides = document.querySelector('.slides');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const showRight = () => {
  arrowLeft.disabled = true;
  slides.firstElementChild.classList.add('thinner');
  setTimeout(() => {
    slides.append(slides.firstElementChild);
    slides.lastElementChild.classList.remove('thinner');
    arrowLeft.disabled = false;
  }, 700);
};

const showLeft = () => {
  arrowRight.disabled = true;
  slides.lastElementChild.classList.add('thinner');
  slides.prepend(slides.lastElementChild);
  setTimeout(() => slides.firstElementChild.classList.remove('thinner'));
  setTimeout(() => arrowRight.disabled = false, 700);
};

arrowLeft.addEventListener('click', showLeft);
arrowRight.addEventListener('click', showRight);

const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');

menu.addEventListener('click', () => {
  menu.classList.remove('active');
  burger.classList.remove('active');
});

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});
