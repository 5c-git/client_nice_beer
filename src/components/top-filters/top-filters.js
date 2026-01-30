import './top-filters.scss';
import Choices from 'choices.js';

const initTopFilterSelect = () => {
  const select = document.querySelector('.top-filters__select');
  if (select) {
    const choicesNolint = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      classNames: {
        containerOuter: 'choices top-filters__choices',
      },
    });

    select.addEventListener('addItem', (event) => {
      if (func) {
        func(event);
      }
    });

    // Сохраняем ссылку на слайдер. 
    select.choicesInstance = choicesNolint;
  }
};

initTopFilterSelect();
