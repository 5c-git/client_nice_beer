import './cart-card.scss';
import packagingSelectInit from '../packaging/packaging';

const activateCartCard = (func) => {
  const cards = document.querySelectorAll('.cart-card:not(.cart-card--js)');

  cards.forEach((card) => {
    if (!card.classList.contains('cart-card--js')) {
      card.classList.add('cart-card--js');

      const select = packagingSelectInit(card, (event) => {
        if (func) {
          func(event);
        }
      });
    }
  });
};

export default activateCartCard;
