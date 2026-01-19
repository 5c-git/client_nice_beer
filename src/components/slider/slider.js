import './slider.scss';

import Swiper from 'swiper';
import {
  Navigation, Scrollbar,
} from 'swiper/modules';

const sliderInit = (container) => {
  const slider = container;
  let sliderNolint;
  if (slider) {
    const swiper = slider.querySelector('.swiper');
    const buttonPrev = slider.querySelector('.slider__button--prev');
    const buttonNext = slider.querySelector('.slider__button--next');
    const scrollbar = slider.querySelector('.slider__scrollbar');

    sliderNolint = new Swiper(swiper, {
      modules: [Navigation, Scrollbar],
      // Optional parameters
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: false,
      // Navigation arrows
      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
        disabledClass: 'slider__button--disabled',
      },
      // Scrollbar
      scrollbar: {
        el: scrollbar,
        dragClass: 'slider__scrollbar-drag',
        draggable: true,
      },
      // Responsive breakpoints
      breakpoints: {},
    });
    

    // Сохраняем ссылку на слайдер. 
    swiper.swiperInstance = sliderNolint;
  }

  return sliderNolint;
};

const sliders = document.querySelectorAll('.slider');
sliders.forEach((el, index) => {
  sliderInit(el);
});

export default sliderInit;
