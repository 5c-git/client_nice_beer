import './catalog-amount-card.scss';
import {
  debounce,
} from '../../utils/utils';

const activateCatalogAmountCard = (func) => {
  const cards = document.querySelectorAll('.catalog-amount-card:not(.catalog-amount-card--js)');

  cards.forEach((card) => {
    if (!card.classList.contains('catalog-amount-card--js')) {
      card.classList.add('catalog-amount-card--js');
      const deleteButton = card.querySelector('.catalog-amount-card__delete');
      if (deleteButton) {
        const { id } = deleteButton.dataset;
        deleteButton.addEventListener('click', debounce(() => {
          if (func) {
            const answer = func({
              id,
              action: 'delete',
            });
            if (answer.responseJSON.status === 'success') {
              card.remove();
            }
          }
        }));
      }
    }
  });
};

export default activateCatalogAmountCard;
