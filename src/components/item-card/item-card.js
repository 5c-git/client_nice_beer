import './item-card.scss';
import packagingSelectInit from '../packaging/packaging';

const activateItemCard = (func) => {
  const cards = document.querySelectorAll('.item-card:not(.item-card--js)');

  cards.forEach((card) => {
    if (!card.classList.contains('item-card--js')) {
      card.classList.add('item-card--js');

      const where = card.querySelector('.item-card__where');

      const select = packagingSelectInit(card, (event) => {
        if (func) {
          func(event);
        }

        if (event.detail.label !== '0') {
          where.textContent = 'В корзинe';
          where.classList.add('item-card__where--active');
        } else {
          where.textContent = 'В корзину';
          where.classList.remove('item-card__where--active');
        }
      });
    }
  });
};

export default activateItemCard;
