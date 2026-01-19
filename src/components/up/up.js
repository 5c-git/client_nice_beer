import './up.scss';

const up = document.querySelector('.up');
const scrollableHeight = 400;
let scrollPosition = 0;

if (up) {
  up.addEventListener('click', () => {
    window.scroll(0, 0);
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset <= scrollPosition && window.pageYOffset >= scrollableHeight) {
      up.classList.add('up--visible');
      scrollPosition = window.pageYOffset;
    } else {
      up.classList.remove('up--visible');
      scrollPosition = window.pageYOffset;
    }
  });
}
