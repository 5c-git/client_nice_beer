import './corners-filter.scss';
import {
  getPaddingOnBody,
  getPaddingFromBody,
  getFormState,
} from '../../utils/utils';
import initTopFilterSelect from '../top-filters/top-filters';

const cornersFilterInit = ({
  submitSelects,
  submitSort,
} = {}) => {
  const form = document.querySelector('.corners-filter__form');
  const resultBlock = document.querySelector('.corners-filter__result');

  if (!form) return;

  const groups = [...form.querySelectorAll('.corners-filter__group')];
  const submitButton = form.querySelector('.corners-filter__submit');


  const closeAll = () => {
    groups.forEach((group) => {
      group.classList.remove('corners-filter__group--active');

      const toggle = group.querySelector('.corners-filter__toggle');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  groups.forEach((group) => {
    const toggle = group.querySelector('.corners-filter__toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (evt) => {
      evt.preventDefault();

      const isActive = group.classList.contains('corners-filter__group--active');
      closeAll();

      if (!isActive) {
        group.classList.add('corners-filter__group--active');
        toggle.setAttribute('aria-expanded', 'true');

        if (window.innerWidth < 768) {
          getPaddingOnBody();
        }
      }
    });

    const close = group.querySelector('.corners-filter__dropdown-close');
    if (!close) return;

    close.addEventListener('click', (evt) => {
      evt.preventDefault();
      closeAll();
      getPaddingFromBody();
    });
  });

  document.addEventListener('click', (evt) => {
    const clickedInsideDropdown = evt.target.closest('.corners-filter__dropdown');
    const clickedToggle = evt.target.closest('.corners-filter__toggle');

    if (!clickedInsideDropdown && !clickedToggle) {
      closeAll();
    }
  });


  form.addEventListener('change', (evt) => {
    if (evt.target.matches('input[type="checkbox"]')) {
      submitButton?.removeAttribute('style');
    }
  });


  if (!resultBlock) return;

  const renderPickedFilters = (uiState) => {
    resultBlock.innerHTML = '';

    for (const key in uiState) {
      const values = uiState[key];
      if (!values || !values.length) continue;

      const text =
        values.length === 1
          ? `${key}: ${values[0]}`
          : `${key}: ${values.length} знач.`;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'corners-filter__picked';
      btn.textContent = text;
      btn.dataset.name = key;

      resultBlock.appendChild(btn);
    }
  };


  const updateUiState = () => {
    const state = {};

    form.querySelectorAll('input[type="checkbox"]:checked').forEach((input) => {
      const groupName = input.dataset.name;
      const valueLabel = input.dataset.value;

      if (!state[groupName]) {
        state[groupName] = [];
      }

      state[groupName].push(valueLabel);
    });

    renderPickedFilters(state);
    return state;
  };


  initTopFilterSelect(submitSort);
  const select = document.querySelector('.top-filters__select');

  const updateFormState = () => {
    // Собираем name + value чекбоксов.
    const state = getFormState(form);

    if (select && select.name) {
      state[select.name] = select.value;
    }

    return state;
  };

  updateUiState();


  // Логика для кнопки Применить.
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    updateUiState();
    const state = updateFormState();

    form.dispatchEvent(
      new CustomEvent('filter:change', {
        detail: state,
      })
    );

    submitButton?.setAttribute('style', 'display: none;');

    if (submitSelects) {
      submitSelects(form);
    }
  });


  // Логика для клика по выбранным пунктам.
  resultBlock.addEventListener('click', (evt) => {
    const btn = evt.target.closest('.corners-filter__picked');
    if (!btn) return;

    const name = btn.dataset.name;

    form.querySelectorAll(`input[data-name="${name}"]`).forEach((input) => {
      input.checked = false;
    });

    updateUiState();

    const state = updateFormState();

    form.dispatchEvent(
      new CustomEvent('filter:change', {
        detail: state,
      })
    );

    if (submitSelects) {
      submitSelects(form);
    }
  });


  // Событие выбора пункта библиотеки choices.js .
  if (select) {
    select.addEventListener('addItem', () => {
      const state = updateFormState();

      form.dispatchEvent(
        new CustomEvent('filter:change', {
          detail: state,
        })
      );
    });
  }
};

export default cornersFilterInit;
