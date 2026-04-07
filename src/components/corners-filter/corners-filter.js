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

  // Только применённые чекбоксы.
  let appliedState = {};

  // --- HELPERS ---

  const getCheckboxState = () => {
    const state = {};

    form.querySelectorAll('input[type="checkbox"]:checked').forEach((input) => {
      const groupName = input.dataset.name;
      const valueLabel = input.dataset.value;

      if (!state[groupName]) {
        state[groupName] = [];
      }

      state[groupName].push(valueLabel);
    });

    return state;
  };

  const renderPickedFilters = (state) => {
    if (!resultBlock) return;

    resultBlock.innerHTML = '';

    for (const key in state) {
      const values = state[key];
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

  const buildFullState = () => {
    const state = getFormState(form);

    if (select && select.name) {
      state[select.name] = select.value;
    }

    return state;
  };

  // --- DROPDOWNS ---

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

  // --- CHANGE (показываем кнопку применить) ---

  form.addEventListener('change', (evt) => {
    if (evt.target.matches('input[type="checkbox"]')) {
      submitButton?.removeAttribute('style');
    }
  });

  // --- SELECT (сортировка) ---

  initTopFilterSelect(submitSort);
  const select = document.querySelector('.top-filters__select');

  if (select) {
    select.addEventListener('addItem', () => {
      const state = {
        ...appliedState,
        [select.name]: select.value,
      };

      form.dispatchEvent(
        new CustomEvent('filter:change', {
          detail: state,
        })
      );
    });
  }

  // --- SUBMIT (применение фильтров) ---

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // Фиксируем только чекбоксы.
    appliedState = getCheckboxState();

    // Рисуем UI.
    renderPickedFilters(appliedState);

    // Отправляем полный state.
    const state = buildFullState();

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

  // --- CLICK по CHIP ---

  if (resultBlock) {
    resultBlock.addEventListener('click', (evt) => {
      const btn = evt.target.closest('.corners-filter__picked');
      if (!btn) return;

      const name = btn.dataset.name;

      // удаляем только из appliedState
      delete appliedState[name];

      // синхронизируем чекбоксы UI
      form.querySelectorAll(`input[data-name="${name}"]`).forEach((input) => {
        input.checked = false;
      });

      renderPickedFilters(appliedState);

      // Отправляем state.
      const state = {
        ...appliedState,
      };

      if (select && select.name) {
        state[select.name] = select.value;
      }

      form.dispatchEvent(
        new CustomEvent('filter:change', {
          detail: state,
        })
      );

      if (submitSelects) {
        submitSelects(form);
      }
    });
  }
};

export default cornersFilterInit;