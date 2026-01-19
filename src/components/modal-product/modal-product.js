import './modal-product.scss';
import {
  summonPopUp,
} from '../popUp/popUp';
import {
  debounce,
} from '../../utils/utils';

const activateModalProduct = (func) => {
  const requests = document.querySelectorAll('.request-modal-product:not(.request-modal-product--js)');
  if (requests.length) {
    requests.forEach((request) => {
      if (!request.classList.contains('request-modal-product--js')) {
        request.classList.add('request-modal-product--js');

        const startButton = request;
        const { id } = startButton.dataset;

        startButton.addEventListener('click', debounce(() => {
          if (func) {
            const answer = func({
              id,
            });
            if (answer.responseText) {
              const container = document.querySelector('#modal--product').content.querySelector('.modal-product');
              container.innerHTML = answer.responseText;

              summonPopUp('#modal--product', true);
            }
          }
        }));
      }
    });
  }
};

export default activateModalProduct;
