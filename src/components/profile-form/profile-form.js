import './profile-form.scss';
import Choices from 'choices.js';
import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru';
import Inputmask from 'inputmask';
import {
  setTextareaAutoHeight,
  debounce,
} from '../../utils/utils';
import {
  validateForm,
  initPasswordEye,
} from '../validator/validator';

const TOKEN = 'd11e752ae788e61213f01ae6952bdbd85ceaa025'; // Ключ.

// Отключаем нативное поведение скрола при фокусе полей type="number".
document.querySelectorAll('[type="number"]').forEach((el) => {
  el.addEventListener('wheel', (evt) => {
    evt.preventDefault();
  })
});

// Маска для телефона
const phoneMask = new Inputmask('+[9 (999) 999-99-99]', {
  autoUnmask: true,
  showMaskOnHover: false,
});

// Маска для ИНН
const innMask = new Inputmask('9{10,12}', {
  autoUnmask: true,
  showMaskOnHover: false,
  showMaskOnFocus: false,
  placeholder: '',
});

let validator;
const profileForm = document.querySelector('.profile-form');
if (profileForm) {
  validator = validateForm('.profile-form');
  initPasswordEye('.profile-form');
}

const innInput = document.querySelector('#inn');
if (innInput) {
  innMask.mask(innInput);
}

const setInputHeight = (field) => {
  field.style.height = 'auto';
  field.style.height = `${field.scrollHeight}px`;
};

const initProfileFormPhone = () => {
  const inputs = document.querySelectorAll('.profile-form__input[type="tel"]');
  if (inputs.length > 0) {
    inputs.forEach((input) => {
      phoneMask.mask(input);
    });
  }
};

initProfileFormPhone();

const initProfileFormTextarea = () => {
  const textareas = document.querySelectorAll('.profile-form textarea');
  if (textareas.length > 0) {
    setTextareaAutoHeight('.profile-form textarea');
  }
};

initProfileFormTextarea();

const initProfileFormSelect = () => {
  const selects = document.querySelectorAll('.profile-form__select');
  if (selects.length > 0) {
    selects.forEach((select) => {
      const placeholder = select.getAttribute('placeholder');
      const choicesNolint = new Choices(select, {
        searchEnabled: false,
        shouldSort: false,
        delimiter: ',',
        editItems: true,
        placeholder: true,
        placeholderValue: placeholder,
        noResultsText: 'Ничего не найдено',
        noChoicesText: 'Нечего выбирать',
        itemSelectText: '',
        removeItemButton: true,
        classNames: {
          containerOuter: 'choices profile-form__choices',
        },
      });
    });
  }
};

initProfileFormSelect();

const timepickers = document.querySelectorAll('.profile-form__input[type="time"]');
if (timepickers.length > 0) {
  timepickers.forEach((timepicker) => {
    const timepickerFooter = document.createElement('div');
    timepickerFooter.classList.add('flatpickr-time__footer');

    const resetButton = document.createElement('button');
    resetButton.type = 'button';
    resetButton.classList.add('button');
    resetButton.textContent = '✗';

    const acceptButton = document.createElement('button');
    acceptButton.type = 'button';
    acceptButton.classList.add('button');
    acceptButton.textContent = '✓';

    timepickerFooter.append(resetButton);
    timepickerFooter.append(acceptButton);

    const picker = flatpickr(timepicker, {
      locale: Russian,
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      disableMobile: true,
      allowInput: true,
    });

    picker.calendarContainer.append(timepickerFooter);

    resetButton.addEventListener('click', () => {
      picker.clear();
      picker.close();
    });

    acceptButton.addEventListener('click', () => {
      const hour = picker.hourElement.value;
      const minutes = picker.minuteElement.value;
      picker.setDate([`${hour}:${minutes}`], 'H:i');
      picker.close();
    });
  });
}

const initProfileFormAddressDadata = () => {
  const fakeAddress = document.querySelector('.profile-form #fake-address');
  if (fakeAddress) {
    const textarea = document.querySelector('.profile-form #fake-address');
    const inputAddress = $('#fake-address');
    inputAddress.suggestions({
      token: TOKEN,
      type: 'ADDRESS',
      /* Вызывается, когда пользователь выбирает одну из подсказок */
      onSelect() {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      },

      /* Вызывается, когда пользователь не выбрал ни одну из подсказок */
      onSelectNothing() {
        if (textarea) {
          textarea.value = '';
          textarea.style.height = 'auto';
          textarea.style.height = `${textarea.scrollHeight}px`;
        }
      },
    });
  }
};

initProfileFormAddressDadata();

const addOrganizationForm = document.querySelector('#add-organization-form');
if (addOrganizationForm) {
  const initInnHints = () => {
    const innInput = document.querySelector('#inn');
    if (innInput) {
      const kppInput = addOrganizationForm.querySelector('#kpp');
      const ogrnInput = addOrganizationForm.querySelector('#ogrn');
      const companyNameInput = addOrganizationForm.querySelector('#name');
      const companyShortNameInput = addOrganizationForm.querySelector('#short-name');
      const addressInput = addOrganizationForm.querySelector('#address');

      $('#inn').suggestions({
        token: TOKEN,
        type: 'PARTY',
        minChars: 8,
        formatResult(value, currentValue, suggestion, options) {
          const that = this;
          const highlightMatches = that.highlightMatches(suggestion.data.inn, currentValue, suggestion, options);
          // const postalCode = suggestion.data.address.data.postal_code;

          return `${value}, ИНН: ${highlightMatches}`;
        },
        // Вызывается при получении ответа от сервера. В suggestions передается массив полученных подсказок.
        // onSearchComplete: function (query, suggestions) {
        //   console.log(query);
        //   console.log(suggestions);
        // },
        // Вызывается, когда пользователь выбирает одну из подсказок.
        onSelect(suggestion) {

          if (innInput) {
            innInput.value = suggestion.data.inn;
          }

          if (kppInput) {
            kppInput.value = suggestion.data.kpp;
          }

          if (ogrnInput) {
            ogrnInput.value = suggestion.data.ogrn;
          }

          if (companyShortNameInput) {
            companyShortNameInput.value = suggestion.data.name.short_with_opf;
            setInputHeight(companyShortNameInput);
          }

          if (companyNameInput) {
            companyNameInput.value = suggestion.data.name.full_with_opf;
            setInputHeight(companyNameInput);
          }

          if (addressInput) {
            addressInput.value = suggestion.data.address.unrestricted_value;
            setInputHeight(addressInput);
          }

          // Проверяем форму на валидацию при выборе пункта в селекте.
          validator.validateAll(addOrganizationForm);
        },

        /* Вызывается, когда пользователь не выбрал ни одну из подсказок */
        onSelectNothing() {
          if (innInput) {
            innInput.value = '';
          }

          if (kppInput) {
            kppInput.value = '';
          }

          if (ogrnInput) {
            ogrnInput.value = '';
          }

          if (companyNameInput) {
            companyNameInput.value = '';
            companyNameInput.style.height = '';
          }

          if (companyShortNameInput) {
            companyShortNameInput.value = '';
            companyShortNameInput.style.height = '';
          }

          if (addressInput) {
            addressInput.value = '';
            addressInput.style.height = '';
          }
        },
      });
    }
  };

  initInnHints();
}
