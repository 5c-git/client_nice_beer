import './corners-filter.scss';
import {
  getPaddingOnBody,
  getPaddingFromBody,
  getFormState,
} from '../../utils/utils';

const form = document.querySelector('.corners-filter__form');
const resultBlock = document.querySelector('.corners-filter__result');

if (form) {
  const groups = [...form.querySelectorAll('.corners-filter__group')];
  const submitButton = form.querySelector('.corners-filter__submit');

  // Функция чтобы закрыть дропдауны.
  const closeAll = () => {
    groups.forEach((group) => {
      group.classList.remove('corners-filter__group--active');

      const toggle = group.querySelector('.corners-filter__toggle');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  // Навешиваем обработчики на все кнопки чтобы открывать\закрывать дропдауны.
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

        console.log(window.innerWidth);
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

  // Проверяем куда кликнули и если надо закрываем дропдауны.
  document.addEventListener('click', (evt) => {
    const clickedInsideDropdown = evt.target.closest('.corners-filter__dropdown');
    const clickedToggle = evt.target.closest('.corners-filter__toggle');

    if (!clickedInsideDropdown && !clickedToggle) {
      closeAll();
    }
  });

  // Логика работы выбранных пунктов и отображения плашек. 
  if (resultBlock) {
    const renderPickedFilters = (state) => {
      resultBlock.innerHTML = '';

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
        btn.dataset.name = key;

        resultBlock.appendChild(btn);
      }
    };

    // Собираем текущее состояние формы. 
    const updateState = () => {
      const state = getFormState(form);
      renderPickedFilters(state);

      return state;
    };

    updateState();

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const state = updateState();

      form.dispatchEvent(
        new CustomEvent('filter:change', {
          detail: state,
        })
      );


      submitButton.setAttribute('style', 'display: none;');
    });

    form.addEventListener('change', (evt) => {
      if (evt.target.matches('input[type="checkbox"]')) {
        console.log('Кликнули');
        submitButton.removeAttribute('style');
      }
    });


    resultBlock.addEventListener('click', (evt) => {
      const btn = evt.target.closest('.corners-filter__picked');
      if (!btn) return;

      const name = btn.dataset.name;

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
