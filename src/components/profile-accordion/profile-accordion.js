import './profile-accordion.scss';

window.addEventListener('load', () => {
  const activeAccordions = document.querySelectorAll('.profile-accordion--active');
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector('.profile-accordion__inner');

      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});

// Тестовая логика по работе с заказами из Личного кабинета.
const profileCardInit = () => {
  const accordions = document.querySelectorAll('.profile-accordion:not(.profile-accordion--js)');

  accordions.forEach((accordion) => {
    if (!accordion.classList.contains('item-card--js')) {
      accordion.classList.add('profile-accordion--js');

      const button = accordion.querySelector('.profile-accordion__header');
      const inner = accordion.querySelector('.profile-accordion__inner');

      if (button) {
        button.addEventListener('click', () => {
          accordion.classList.toggle('profile-accordion--active');

          if (accordion.classList.contains('profile-accordion--active')) {
            inner.style.maxHeight = `${inner.scrollHeight}px`;
          } else {
            inner.style.maxHeight = '';
          }
        });
      }

      const profileCard = accordion;

      // Удалить заказ.
      const cancelButton = profileCard.querySelector('.profile-accordion__cancel');
      if (cancelButton) {
        cancelButton.addEventListener('click', (evt) => {
          evt.preventDefault();

          // Передаём номер заказа
          const { id } = cancelButton.dataset;
          const text = `Отмена заказа №${id}.`;

          // Подставляем новый текст в template
          document
            .querySelector('#modal--cancel')
            .content.querySelector('.modal__title').textContent = text;

          window.Corners5ProjectLayout.summonPopUp('#modal--cancel', true);
          window.Corners5ProjectLayout.setTextareaAutoHeight('.modal--cancel textarea');
        });
      }
    }
  });
};

profileCardInit();
