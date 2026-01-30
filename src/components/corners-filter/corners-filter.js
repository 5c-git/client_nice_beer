import './corners-filter.scss';
import {
  getFormState,
} from '../../utils/utils';

const form = document.querySelector('.corners-filter__form');
const resultBlock = document.querySelector('.corners-filter__result');
if (form) {
  const groups = [...form.querySelectorAll('.corners-filter__group')];

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
      }
    });
  });

  document.addEventListener('click', (evt) => {
    const clickedInsideDropdown = evt.target.closest('.corners-filter__dropdown');
    const clickedToggle = evt.target.closest('.corners-filter__toggle');

    if (!clickedInsideDropdown && !clickedToggle) {
      closeAll();
    }
  });

  if (resultBlock) {
    const renderPickedFilters = (state) => {
      resultBlock.innerHTML = ''; // очистить старое

      for (const key in state) {
        const values = state[key];
        if (!values || !values.length) continue;

        const text = values.length === 1
          ? `${key}: ${values[0]}`
          : `${key}: ${values.length} знач.`;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'corners-filter__picked';
        btn.textContent = text;

        // Добавляем data-name.
        btn.dataset.name = key;

        resultBlock.appendChild(btn);
      }
    };

    const updateState = () => {
      const state = getFormState(form);
      renderPickedFilters(state);

      return state; // Возвращаем чтобы передать в кастом событие.
    };

    updateState();

    form.addEventListener('change', () => {
      const state = updateState();

      form.dispatchEvent(
        new CustomEvent('filter:change', {
          detail: state,
        })
      );
    });

    // Слушаем клики по кнопкам picked.
    resultBlock.addEventListener('click', (evt) => {
      const btn = evt.target.closest('.corners-filter__picked');
      if (!btn) return;

      const name = btn.dataset.name;

      // Снимаем все чекбоксы с этим name.
      form.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
        input.checked = false;
      });

      const state = updateState();
      form.dispatchEvent(
        new CustomEvent('filter:change', {
          detail: state,
        })
      );
    });
  }
}

const filterForm = document.querySelector('.corners-filter__form');
if (filterForm) {
  filterForm.addEventListener('filter:change', (evt) => {
    console.log('Фильтр изменился:', evt.detail);
  });
}