import "./main.scss";
import "./fonts.scss";
import Inputmask from 'inputmask';
import {
  summonPopUp,
  removePopUp,
} from '../components/popUp/popUp';
import {
  validateForm,
  maskPhone,
  initPasswordEye,
} from '../components/validator/validator';

// const PHONE_REG_EXP = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
const PHONE_REG_EXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
const TOKEN = "5e287fb1cee7358cb4f771eba5b1ea444a1a3535";

// Маска для пароля (не позволяет пробелы)
const passwordMask = new Inputmask({
  regex: '[^\\s]*',
  autoUnmask: true,
  showMaskOnHover: false,
  showMaskOnFocus: false,
  placeholder: '',
});

const initPasswordMask = () => {
  const inputs = document.querySelectorAll('input[type="password"]');
  if (inputs.length > 0) {
    inputs.forEach((input) => {
      passwordMask.mask(input);
    });
  }
};

initPasswordMask();

// Находим ширину скролбара и узнаем на сколько добавлять отступ справа у body.
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let checker = false;

// Функция чтобы блочить экран и давать отступ.
const getPaddingOnBody = () => {
  if (!checker) {
    const body = document.querySelector('body');
    const header = document.querySelector('.header__fixed');
    const dropdown = document.querySelector('.header__dropdown');
    const promoFixed = document.querySelector('.promo__fixed');
    const Modal = document.querySelector('.Modal');
    const popUps = document.querySelectorAll('.popUp');
    const alertWrapper = document.querySelector('.alert-wrapper');
    const filter = document.querySelector('.catalog__filter-main');

    body.style.paddingRight = `${getScrollbarWidth()}px`;

    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (dropdown) {
      dropdown.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (Modal) {
      Modal.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (filter) {
      filter.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (popUps.length > 0) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    }
    body.classList.add('static');
    checker = true;
  }
};

// Функция чтобы снимать блокировку экрана и убирать отступ.
const getPaddingFromBody = () => {
  if (checker) {
    const body = document.querySelector('body');
    const header = document.querySelector('.header__fixed');
    const dropdown = document.querySelector('.header__dropdown');
    const promoFixed = document.querySelector('.promo__fixed');
    const Modal = document.querySelector('.Modal');
    const popUps = document.querySelectorAll('.popUp');
    const alertWrapper = document.querySelector('.alert-wrapper');
    const filter = document.querySelector('.catalog__filter-main');

    body.style.paddingRight = '';

    if (header) {
      header.style.paddingRight = '';
    }
    if (dropdown) {
      dropdown.style.paddingRight = '';
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = '';
    }
    if (Modal) {
      Modal.style.paddingRight = '';
    }
    if (alertWrapper) {
      alertWrapper.style.paddingRight = '';
    }
    if (filter) {
      filter.style.paddingRight = '';
    }
    if (popUps.length > 0) {
      popUps.forEach((popUp) => {
        popUp.style.paddingRight = '';
      });
    }
    body.classList.remove('static');
    checker = false;
  }
};

const isObject = (object) => {
  const type = typeof object;
  return type === 'function' || type === 'object';
};

const createFormData = (values) => {
  const data = new FormData();

  // eslint-disable-next-line no-restricted-syntax
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};

// автоматическая высота для textarea
function OnInput() {
  this.style.height = 'auto';
  this.style.height = `${this.scrollHeight}px`;
}

const setTextareaAutoHeight = (area) => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach((element) => {
    element.setAttribute('style', `height:${element.scrollHeight}px; overflow-y: hidden;`);
    element.addEventListener('input', OnInput);
  });
};

const debounce = (cb) => {
  const DEBOUNCE_INTERVAL = 300; // ms
  let lastTimeout = null;

  return () => {
    const parameters = arguments;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(() => {
      cb.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};

// Статус для системных сообщений "alert".
const setStatus = (status) => {
  switch (status) {
    case 'success':
      return 'alert--green';

    case 'exclam':
      return 'alert--grey';

    case 'error':
      return 'alert--red';

    default:
      return '';
  }
};

// Функция чтобы навешивать вызов модального окна заявки по кнопке.
const activateRequestButtons = (func) => {
  const buttons = document.querySelectorAll('.button-request:not(.button-request--js)');

  buttons.forEach((button) => {
    if (!button.classList.contains('button-request--js')) {
      button.classList.add('button-request--js');

      button.addEventListener('click', (evt) => {
        evt.preventDefault();
        const { type } = button.dataset;

        const info = button.dataset;

        if (!document.querySelector(`#modal--${type}`)) {
          console.log('Такого модального окна не существует.');

          return;
        }

        if (type) {
          summonPopUp(`#modal--${type}`, true);
          const modal = document.querySelector(`.modal--${type}`);
          const form = modal.querySelector('form');

          if (form) {
            for (const key in info) {
              if (Object.prototype.hasOwnProperty.call(info, key)) {
                form.insertAdjacentHTML('beforeend', `<input type="hidden" name=${key} value=${info[key]}>`);
              }
            }

            const validatedForm = validateForm(`.modal--${type} form`);
            maskPhone(`.modal--${type} form`);
            initPasswordEye(`.modal--${type} form`);
            initPasswordMask();
            setTextareaAutoHeight(`.modal--${type} textarea`);

            const fetch = async () => {
              const answer = await func(form);
              if (answer) {
                if (answer.status === 'success') {
                  validatedForm.destroy();
                  removePopUp(`.modal--${type}`, true);
                }
              }
            };

            form.addEventListener('bouncerFormValid', debounce(() => {
              if (func) {
                fetch();
              }
            }));

            if (type === 'call-us') {
              const linksContainers = modal.querySelectorAll('.call-us__block--links');
              const hidden = modal.querySelector('.call-us__hidden');
              const hiddenToggle = modal.querySelector('.call-us__request-toggle');
              hiddenToggle.addEventListener('click', () => {
                hidden.style.display = 'block';
                linksContainers.forEach((el) => {
                  el.style.display = 'none';
                  hiddenToggle.style.display = 'none';
                });
              });
            }
          }
        }
      });
    }
  });
};

// Функция для сбора данных с одним именем в массив.
const getFormState = (form) => {
  const data = {};
  const fd = new FormData(form);

  for (const [name, value] of fd.entries()) {
    if (!data[name]) {
      data[name] = [];
    }
    data[name].push(value);
  }

  return data;
};

document.addEventListener('click', (evt) => {
  const button = evt.target.closest('.request-login');
  if (!button) return;

  evt.preventDefault();
  window.LoginProvider.setOpenPhone(true);
});

// Маска для pattern
const patternInit = ({
  pattern,
  el,
}) => {
  const patternMask = new Inputmask(pattern, {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: '',
  });

  patternMask.mask(el);
};

document.querySelectorAll('[data-pattern]').forEach((el) => {
  const pattern = document.querySelector('[data-pattern]').dataset.pattern;

  patternInit({
    pattern,
    el,
  });
});

const blurHandler = (event) => {
  if (!event.target.form) return;

  const field = event.target;
  const cuttedSpacesValue = field.value.replace(/\s\s+/g, ' ');
  const trimmedValue = cuttedSpacesValue.trim();
  field.value = trimmedValue;
};
document.addEventListener('blur', blurHandler, true);

export {
  TOKEN,
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  PHONE_REG_EXP,
  createFormData,
  setTextareaAutoHeight,
  debounce,
  setStatus,
  activateRequestButtons,
  getFormState,
};
