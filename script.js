const slides = document.querySelector('.slides');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const showLeft = () => {
  arrowLeft.disabled = true;
  slides.lastElementChild.classList.add('thinner');
  slides.prepend(slides.lastElementChild);
  setTimeout(() => slides.firstElementChild.classList.remove('thinner'));
  setTimeout(() => arrowLeft.disabled = false, 700);
};

const showRight = () => {
  arrowRight.disabled = true;
  slides.firstElementChild.classList.add('thinner');
  setTimeout(() => {
    slides.append(slides.firstElementChild);
    slides.lastElementChild.classList.remove('thinner');
    arrowRight.disabled = false;
  }, 700);
};

arrowLeft.addEventListener('click', showLeft);
arrowRight.addEventListener('click', showRight);

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

menu.querySelectorAll('li').forEach(li =>
  li.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
  })
);
