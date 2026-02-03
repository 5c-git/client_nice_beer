import './request.scss';
import Inputmask from 'inputmask';
import {
  validateForm,
  maskPhone,
} from '../validator/validator';
import {
  debounce,
  setTextareaAutoHeight,
  setStatus,
} from '../../utils/utils';
import {
  summonAlert,
  removeAlert,
} from '../alert/alert';
import {
  addLoading,
  removeLoading,
} from '../loading/loading';
import {
  ENV,
} from '../../env';

const initRequestForm = (func) => {
  const requestForm = document.querySelector('.request__form');

  if (!requestForm) return;


  validateForm('.request__form');
  maskPhone('.request__form');
  setTextareaAutoHeight('.request__form textarea');

  const form = requestForm;

  // Определяем тип формы по её id
  let alertTemplate = '#alert--request'; // default
  let url = `${window.routes5.form.requests.Feedback[`url${ENV}`]}`;

  switch (form.id) {
    case 'RequestContacts':
      url = `${window.routes5.form.requests.RequestContacts[`url${ENV}`]}`;
      alertTemplate = '#alert--request';
      break;

    case 'Subscribe':
      url = `${window.routes5.form.requests.Subscribe[`url${ENV}`]}`;
      alertTemplate = '#alert--subscribe';
      break;

    case 'RequestService':
      url = `${window.routes5.form.requests.RequestService[`url${ENV}`]}`;
      alertTemplate = '#alert--request';
      break;

    case 'RequestCooperation':
      url = `${window.routes5.form.requests.RequestCooperation[`url${ENV}`]}`;
      alertTemplate = '#alert--request';
      break;

    case 'RequestSearch':
      url = `${window.routes5.form.requests.RequestSearch[`url${ENV}`]}`;
      alertTemplate = '#alert--request';
      break;

    default:
      break;
  };

  form.addEventListener('bouncerShowError', (event) => {
    // The field with the error.
    const field = event.target;
    // console.log(field);
  });

  form.addEventListener('bouncerFormValid', debounce(() => {
    addLoading(form);
    const fd = new FormData(form);

    const fileInputs = form.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      const name = input.name;
      const files = fd.getAll(name);

      files.forEach((file, index) => {
        fd.append(`${name}-${index}`, file);

        fd.delete(name);
      });
    });

    $.ajax({
      type: 'POST',
      data: fd,
      url: url,
      contentType: false,
      processData: false,
      cache: false,
      dataType: 'json',
      success(data) {
        summonAlert({
          template: alertTemplate,
          text: data.text,
          className: setStatus(data.status),
        });

        form.reset();
        removeLoading();

        return data;
      },
      error(data) {
        summonAlert({
          template: '#alert--error',
          text: data.text,
        });
        removeLoading();
      },
      complete(data) { },
    });
  }));
};

initRequestForm();
