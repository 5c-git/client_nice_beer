import './header.scss';
import { validateForm } from '../validator/validator';
import { getPaddingOnBody, getPaddingFromBody } from '../../utils/utils';

const header = document.querySelector('.header');
if (header) {
  // Скрывает шапку при скроле вниз
  const hideHeaderOnMove = () => {
    let scrollPosition = 0;
    let hideChecker = 0;
    let showChecker = 0;
    window.addEventListener('scroll', () => {
      if (
        window.pageYOffset >= scrollPosition
        && window.pageYOffset >= header.offsetHeight
      ) {
        showChecker = 0;
        hideChecker += window.pageYOffset - scrollPosition;
        scrollPosition = window.pageYOffset;
      } else {
        showChecker += scrollPosition - window.pageYOffset;
        hideChecker = 0;
        scrollPosition = window.pageYOffset;
      }

      if (showChecker >= 300) {
        header.classList.remove('header--hidden');
        hideChecker = 0;
      } else if (hideChecker >= 300) {
        header.classList.add('header--hidden');
      }
    });
  };

  hideHeaderOnMove();
  const burger = header.querySelector('.header__burger');
  const overlay = header.querySelector('.header__overlay');
  burger.addEventListener('click', () => {
    if (header.classList.contains('header--dropdown')) {
      header.classList.remove('header--dropdown');
      getPaddingFromBody();
    } else {
      header.classList.add('header--dropdown');
      getPaddingOnBody();
    }
  });

  overlay.addEventListener('click', () => {
    header.classList.remove('header--dropdown');
    getPaddingFromBody();
  });
}

const search = document.querySelector('.header-search');
if (search) {
  validateForm('.header-search__form');
}

// const headerProfile = document.querySelector('.header__button--profile');
// if (headerProfile) {
//   headerProfile.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     window.LoginProvider.setOpenPhone(true);
//   });
// }
