import './personal-data.scss';
import {
  validateForm,
  maskPhone,
} from '../validator/validator';
import {
  debounce,
  setStatus,
} from '../../utils/utils';
import {
  summonAlert,
} from '../alert/alert';
import {
  addLoading,
  removeLoading,
} from '../loading/loading';
import {
  ENV,
} from '../../env';

const personalDataFormInit = (func) => {
  const forms = document.querySelectorAll('.personal-data__form');
  if (forms.length > 0) {
    validateForm('.personal-data__form');
    maskPhone('.personal-data__form input[type="tel"]');

    forms.forEach((form) => {
      const fieldWrapper = form.querySelector('.personal-data__field-wrapper');
      if (fieldWrapper) {
        const actions = fieldWrapper.querySelector('.personal-data__field-action');
        const input = fieldWrapper.querySelector('input');

        if (!input || !actions) return;

        const change = actions.querySelector('.personal-data__change');
        const cancel = actions.querySelector('.personal-data__cancel');
        let value = input.value;

        if (change) {
          change.addEventListener('click', () => {
            value = input.value;
            input.removeAttribute('readonly');
          });
        }

        form.addEventListener('bouncerFormValid', debounce(() => {
          if (value === input.value) {
            input.setAttribute('readonly', 'readonly');
          } else {
            const result = func?.(form);
            if (result?.then) {
              addLoading(form);

              result
                .done((data) => {
                  value = input.value;
                  input.setAttribute('readonly', 'readonly');
                })
                .fail(() => {
                  // input.value = value;
                })
                .always(() => {
                  removeLoading(form);
                });

              // return;
            }
          }
        }));

        if (cancel) {
          cancel.addEventListener('click', () => {
            input.value = value;
            // Хак для валидации. 
            input.focus();
            input.blur();

            input.setAttribute('readonly', 'readonly');
          });
        }
      }
    });
  }
};

personalDataFormInit((form) => {
  const fd = new FormData(form);

  // Определяем тип формы по её id
  let alertTemplate = '#alert--request'; // default
  let payload = {};

  switch (form.id) {
    case 'perosnal-name':
      payload = { name: fd.get('name') };
      alertTemplate = '#alert--fio';
      break;
    case 'perosnal-phone':
      payload = { phone: fd.get('phone') };
      alertTemplate = '#alert--mobileSuccess';
      break;
    case 'perosnal-email':
      payload = { email: fd.get('email') };
      alertTemplate = '#alert--confirm-email';
      break;
    default:
      return;
  }

  return $.ajax({
    type: 'PUT',
    data: fd,
    url: `${window.routes5.profile.requests.updateProfile[`url${ENV}`]}`,
    contentType: false,
    processData: false,
    cache: false,
    dataType: 'json',
    success(data) {
      const alert = summonAlert({
        template: alertTemplate,
        text: data.text,
        className: setStatus(data.status),
      });

      const link = alert.querySelector('.alert__link');
      if (link) {
        const email = fd.get('email'); // получаем значение из формы
        link.textContent = email;
      }

      return data;
    },
    error(data) {
      summonAlert({
        template: '#alert--error',
        text: data.text,
      });
    },
    complete(data) { },
  });
});
