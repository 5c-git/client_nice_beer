import './call-us.scss';
import { summonPopUp, removePopUp } from '../popUp/popUp';
import { validateForm, maskPhone } from '../validator/validator';
import {
  setTextareaAutoHeight,
  debounce,
} from '../../utils/utils';

const header = document.querySelector('header');

const callUsModalInit = (func) => {
  const callUsStart = document.querySelector('.header__call-us');
  console.log('Функция удалена, если вы видите это сообщение - почистите common.js');
  // if (callUsStart) {
  //   callUsStart.addEventListener('click', (evt) => {
  //     evt.preventDefault();
  //     if (header) {
  //       setTimeout(() => {
  //         header.classList.remove('header--dropdown');
  //       }, 300);
  //     }
  //     summonPopUp('#modal--call-us', true);
  //     const modal = document.querySelector('.modal--call-us');
  //     const validatedForm = validateForm('.call-us__form');
  //     maskPhone('.call-us__form');
  //     setTextareaAutoHeight('.call-us__form textarea');

  //     const linksContainers = modal.querySelectorAll('.call-us__block--links');
  //     const hidden = modal.querySelector('.call-us__hidden');
  //     const hiddenToggle = modal.querySelector('.call-us__request-toggle');
  //     hiddenToggle.addEventListener('click', () => {
  //       hidden.style.display = 'block';
  //       linksContainers.forEach((el) => {
  //         el.style.display = 'none';
  //       });
  //     });

  //     const form = modal.querySelector('.call-us__form');
  //     form.addEventListener('bouncerFormValid', () => {
  //       if (func) {
  //         const answer = func(form);
  //         if (answer.responseJSON.status === 'success') {
  //           console.log(answer.responseJSON);
  //           validatedForm.destroy();
  //           removePopUp('.modal--call-us', true);
  //         }
  //       }
  //     });
  //   });
  // }
};

export default callUsModalInit;
