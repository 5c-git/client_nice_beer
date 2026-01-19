import './catalog.scss';
import { getPaddingOnBody, getPaddingFromBody } from '../../utils/utils';

const filterInit = () => {
  const filter = document.querySelector('.catalog__filter');
  if (filter) {
    const overlay = filter.querySelector('.catalog__overlay');
    const filterOpenButton = filter.querySelector('.catalog__filter-open');
    const filterCloseButton = filter.querySelector('.catalog__filter-close');
    const filterSetButton = filter.querySelector('#close_filter');
    const clearFilterButton = document.querySelector('#clear_filter');

    if (filterOpenButton) {
      filterOpenButton.addEventListener('click', () => {
        filter.classList.add('catalog__filter--active');
        filterOpenButton.blur();
        getPaddingOnBody();
      });
    }

    if (filterCloseButton) {
      filterCloseButton.addEventListener('click', () => {
        filter.classList.remove('catalog__filter--active');
        filterCloseButton.blur();
        getPaddingFromBody();
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        filter.classList.remove('catalog__filter--active');
        getPaddingFromBody();
      });
    }

    if (filterSetButton) {
      filterSetButton.addEventListener('click', () => {
        filter.classList.remove('catalog__filter--active');
        filterCloseButton.blur();
        getPaddingFromBody();
      });
    }

    if (clearFilterButton) {
      const inputCheckboxFilter = document.querySelectorAll('.bx-filter-input-checkbox input[type="checkbox"]');
      clearFilterButton.addEventListener('click', () => {
        inputCheckboxFilter.forEach((inputCheckbox) => {
          if (inputCheckbox.checked) {
            inputCheckbox.checked = true;
            inputCheckbox.click();
          }
        });
      });
    }
  }
};

filterInit();

export default filterInit;
