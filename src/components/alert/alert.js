import './alert.scss';

// Логика для отрисовки инф.сообщений
const body = document.querySelector('.alert-wrapper');

const removeAlert = ({
  template,
}) => {
  const templateContent = document.querySelector(`${template}`);

  templateContent.remove();
};

const summonAlert = (input) => {
  let template;
  let text;
  let className;

  // Проверка на данные, которые передаём, старая логика принимала строку, новая - объект.
  if (typeof input === 'string') {
    template = input;
  } else if (typeof input === 'object' && input !== null) {
    template = input.template;
    text = input.text;
    className = input.className;
  } else {
    console.log('Неверный тип данных для summonAlert. Ожидается строка (template) или объект { template, text }.');
    return;
  }

  // Проверка: template должен начинаться с #
  if (typeof template !== 'string' || !template.startsWith('#')) {
    console.log('Неверный шаблон. Ожидается строка, начинающаяся с "#", например "#alert--request".');
    return;
  }

  const alertName = template.slice(1); // удаляем '#' из id
  const alertTemplate = document.querySelector(`#${alertName}`);

  if (!alertTemplate) {
    console.log(`#${alertName} системного окна не существует.`);
    return;
  }

  const oldAlert = document.querySelector(`.${alertName}`);
  if (oldAlert) {
    oldAlert.remove();
  }

  const templateContent = alertTemplate.content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);

  if (!alert) {
    console.log(`В шаблоне #${alertName} отсутствует корневой элемент .${alertName}`);

    return;
  }

  if (className) {
    if (typeof className === 'string') {
      alert.classList.add(className);
    } else {
      console.log('className должен быть строкой или массивом строк');
    }
  }

  const close = alert.querySelector('.alert__close');
  const textContainer = alert.querySelector('.alert__container');

  if (text && textContainer) {
    textContainer.innerHTML = text;
  }

  const closeAlert = () => {
    alert.remove();
  };

  if (close) {
    close.addEventListener('click', closeAlert);
  }

  body.append(templateContent);
  alert.classList.add('alert--bounce');

  return alert;
};

export {
  summonAlert,
  removeAlert,
};
