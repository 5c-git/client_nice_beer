import './sign.scss';
import {
  setTextareaAutoHeight,
  debounce,
} from '../../utils/utils';
import {
  validateForm,
  initPasswordEye,
  maskPhone
} from '../validator/validator';

const profileForm = document.querySelector('.sign__form');
if (profileForm) {
  validateForm('.sign__form');
  maskPhone('.sign__form');
}