import './packaging.scss';
import Choices from 'choices.js';

const packagingSelectInit = (container, func) => {
  const select = container.querySelector('.packaging__select');
  let choicesNolint;
  if (select) {
    choicesNolint = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: true,
      classNames: {
        containerOuter: 'choices packaging__choices',
      },
    });

    select.addEventListener('addItem', (event) => {
      func(event);
    });

    const openEvent = new CustomEvent('dropdownOpened', {
      bubbles: true,
    });
    const closeEvent = new CustomEvent('dropdownClosed', {
      bubbles: true,
    });

    select.addEventListener('showDropdown', () => {
      select.dispatchEvent(openEvent);
    });

    select.addEventListener('hideDropdown', () => {
      select.dispatchEvent(closeEvent);
    });
  }

  return choicesNolint;
};

export default packagingSelectInit;
