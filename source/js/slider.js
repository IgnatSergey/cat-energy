const slides = document.querySelectorAll('.slider__item');
const buttonSlide = document.querySelectorAll('.slider__toggle');

let numberSlide = 1;

buttonSlide[1].addEventListener('click', function () {
  slides[0].classList.remove('slider__item--current');
  slides[1].classList.add('slider__item--current');
  buttonSlide[0].classList.remove('slider__toggle--current');
  buttonSlide[1].classList.add('slider__toggle--current');
});

buttonSlide[0].addEventListener('click', function () {
  slides[1].classList.remove('slider__item--current');
  slides[0].classList.add('slider__item--current');
  buttonSlide[1].classList.remove('slider__toggle--current');
  buttonSlide[0].classList.add('slider__toggle--current');
});
