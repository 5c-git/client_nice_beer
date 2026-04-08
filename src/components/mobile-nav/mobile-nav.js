import './mobile-nav.scss';

const buttons = document.querySelectorAll('.mobile-nav__sub-toggle');

function setParentsAuto(element) {
  let parent = element.parentElement;

  while (parent) {
    if (parent.classList.contains('mobile-nav__sub-list')) {
      parent.style.maxHeight = 'none';
    }
    parent = parent.parentElement;
  }
}

function setParentsFixedHeight(element) {
  let parent = element.parentElement;

  while (parent) {
    if (parent.classList.contains('mobile-nav__sub-list')) {
      parent.style.maxHeight = `${parent.scrollHeight}px`;
    }
    parent = parent.parentElement;
  }
}

function openAccordion(container, parentItem) {
  parentItem.classList.add('mobile-nav__item--active');

  // фиксируем начальную высоту (если вдруг none)
  if (container.style.maxHeight === 'none') {
    container.style.maxHeight = `${container.scrollHeight}px`;
  }

  // анимация открытия
  container.style.maxHeight = `${container.scrollHeight}px`;

  container.addEventListener(
    'transitionend',
    () => {
      container.style.maxHeight = 'none';

      // 🔥 ВАЖНО: родители тоже в auto
      setParentsAuto(container);
    },
    { once: true }
  );
}

function closeAccordion(container, parentItem) {
  // 🔴 перед закрытием ВСЕ переводим из none → px
  setParentsFixedHeight(container);

  if (container.style.maxHeight === 'none') {
    container.style.maxHeight = `${container.scrollHeight}px`;
  }

  // reflow
  container.offsetHeight;

  // анимация закрытия
  container.style.maxHeight = '0px';

  parentItem.classList.remove('mobile-nav__item--active');
}

buttons.forEach((button) => {
  const parentItem = button.parentElement;
  const container = button.nextElementSibling;

  button.addEventListener('click', () => {
    const isOpen = parentItem.classList.contains('mobile-nav__item--active');

    if (isOpen) {
      closeAccordion(container, parentItem);
    } else {
      openAccordion(container, parentItem);
    }
  });
});