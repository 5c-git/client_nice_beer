import './header-search.scss';
import { getPaddingOnBody, getPaddingFromBody, getScrollbarWidth } from '../../utils/utils';

const header = document.querySelector('header');
if (header) {
  const search = header.querySelector('.header__search');
  const searchOpenButton = header.querySelector('.header__action--search');
  const searchCloseButton = header.querySelector('.header-search__close');
  const searchOverlay = header.querySelector('.header-search__overlay');
  const searchInput = search.querySelector('.header-search__input');
  const searchClear = search.querySelector('.header-search__clear');
  const wrapper = document.querySelector('.header-search__wrapper');

  if (searchOpenButton) {
    searchOpenButton.addEventListener('click', () => {
      search.classList.add('header__search--active');
      getPaddingOnBody();
      setTimeout(() => { searchInput.focus(); }, 100);
      setTimeout(() => {
        header.classList.remove('header--dropdown');
      }, 300);
    });
  }

  if (searchCloseButton) {
    searchCloseButton.addEventListener('click', () => {
      search.classList.remove('header__search--active');
      getPaddingFromBody();
      searchInput.value = '';
      searchClear.classList.remove('header-search__clear--active');
    });
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', () => {
      search.classList.remove('header__search--active');
      getPaddingFromBody();
      searchInput.value = '';
      searchClear.classList.remove('header-search__clear--active');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (searchInput.value !== '') {
        searchClear.classList.add('header-search__clear--active');
      } else {
        searchClear.classList.remove('header-search__clear--active');
      }
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.classList.remove('header-search__clear--active');
    });
  }

  if (wrapper) {
    wrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    document.addEventListener('resize', () => {
      wrapper.style.paddingRight = `${getScrollbarWidth()}px`;
    });
  }
}
