// Куки уже вшиты в bundle.js
const body = document.querySelector('body');
const header = document.querySelector('.header');

// Тестовый показ поиска из шапки.
if (header) {
  const search = header.querySelector('.header-search');
  const searchInput = search.querySelector('.header-search__input');
  const searchClear = search.querySelector('.header-search__clear');

  // Удалить при внедрении. Начало.
  // Блок для истории поиска '.header-search__history', результаты выводить в блоках '.header-search__block'
  // Блок для результата поиска '.header-search__result', результаты выводить в блоках '.header-search__block'
  const searchHistory = search.querySelector('.header-search__history');
  const searchResult = search.querySelector('.header-search__result');

  const getSearchBlocks = () => {
    if (searchInput.value !== '') {
      searchHistory
        .querySelectorAll('.header-search__block')
        .forEach((block) => {
          block.style.display = 'none';
        });
      searchResult
        .querySelectorAll('.header-search__block')
        .forEach((block) => {
          block.style.display = '';
        });
    } else {
      searchHistory
        .querySelectorAll('.header-search__block')
        .forEach((block) => {
          block.style.display = '';
        });
      searchResult
        .querySelectorAll('.header-search__block')
        .forEach((block) => {
          block.style.display = 'none';
        });
    }
  };
  getSearchBlocks();

  searchInput.addEventListener('input', () => {
    getSearchBlocks();
  });
  searchClear.addEventListener('click', () => {
    getSearchBlocks();
  });
  // Удалить при внедрении. Конец.
}

// Тестовый показ поиска на странице поиска.
const search = document.querySelector('.search');
if (search) {
  const searchInput = search.querySelector('.search__input');
  const searchClear = search.querySelector('.search__clear');

  searchInput.addEventListener('input', () => {
    if (searchInput.value !== '') {
      searchClear.classList.add('search__clear--active');
    }
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.classList.remove('search__clear--active');
  });
}

// Тестовая логика для формы подписаться в блоке '.subscribe'.
const subscribe = document.querySelector('.subscribe');
if (subscribe) {
  const form = document.querySelector('#subscribe-form');
  form.addEventListener('bouncerFormValid', () => {
    window.Corners5ProjectLayout.summonAlert('#alert--subscribe');
    form.reset();
  });
}


// Логика для селекте в личком кабинете рядом с заголовком.
const profileSelect = document.querySelector('.profile-center__select');
// Вызов инициализации фильтра и передаёт в него функцию, которую укажет кодер.
if (profileSelect) {
  const select = window.Corners5ProjectLayout.initProfileSelect((event) => {
    console.log(`id = ${event.detail.id}`);
    console.log(`value = ${event.detail.value}`);
    console.log(`label = ${event.detail.label}`);
  });

  // Для select можно использовать методы и события из библиотеки: https://github.com/Choices-js/Choices
  select.setChoiceByValue('2'); // Выбирает в селекте пункт со значением '2'.
  console.log(select.getValue()); // Получаем данные по выбранному пункту.
}

// Логика для выбора города в шапке на десктопе.
const headerGeolocationButton = document.querySelector(
  '.header__geolocation-button',
);
if (headerGeolocationButton) {
  headerGeolocationButton.addEventListener('click', () => {
    window.Corners5ProjectLayout.summonPopUp('#modal--city', true);

    window.Corners5ProjectLayout.selectCityInit();
    header.classList.remove('header--dropdown');
  });

  // Событие для получения выбранного города в Геолокации.
  window.addEventListener('changeCity', (evt) => {
    console.log(evt.detail.geolocationText.textContent);
  });
}

// Логика для выбора города в шапке на мобиле.
const mobileGeolocationButton = document.querySelector(
  '.mobile-nav__geolocation-button',
);
if (mobileGeolocationButton) {
  mobileGeolocationButton.addEventListener('click', () => {
    window.Corners5ProjectLayout.summonPopUp('#modal--city', true);

    window.Corners5ProjectLayout.selectCityInit();
  });
}

// Тестовая логика по работе с заказами из Личного кабинета.
const offerCardInit = () => {
  const accordions = document.querySelectorAll('.offer-card:not(.offer-card--js)');

  accordions.forEach((accordion) => {
    if (!accordion.classList.contains('item-card--js')) {
      accordion.classList.add('offer-card--js');

      const button = accordion.querySelector('.offer-card__header');
      const inner = accordion.querySelector('.offer-card__inner');

      button.addEventListener('click', () => {
        accordion.classList.toggle('offer-card--active');

        if (accordion.classList.contains('offer-card--active')) {
          inner.style.maxHeight = `${inner.scrollHeight}px`;
        } else {
          inner.style.maxHeight = '';
        }
      });

      const offerCard = accordion;

      // Отменить заказ.
      const cancelButton = offerCard.querySelector('.offer-card__cancel');
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

      // Повторить заказ.
      const repeatPayButton = offerCard.querySelector('.offer-card__repeat');
      if (repeatPayButton) {
        repeatPayButton.addEventListener('click', (evt) => {
          evt.preventDefault();

          // Передаём номер заказа
          const { id } = repeatPayButton.dataset;
          const text = `Товары из заказа №${id} добавлены в корзину.`;

          // Подставляем новый текст в template
          document
            .querySelector('#alert--repeat')
            .content.querySelector('.alert__text').textContent = text;

          // Вызываем сообщение с новым номером.
          window.Corners5ProjectLayout.summonAlert('#alert--repeat');
        });
      }

      // Изменить способ оплаты.
      const changePayButton = offerCard.querySelector('.offer-card__change-pay');
      if (changePayButton) {
        changePayButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          window.Corners5ProjectLayout.summonPopUp('#modal--change', true);

          const modal = document.querySelector('.modal--change');
          const form = modal.querySelector('#change-form');
          form.addEventListener('submit', () => {
            evt.preventDefault();

            window.Corners5ProjectLayout.removePopUp('.modal--change', true);
            window.Corners5ProjectLayout.summonAlert('#alert--save');
          });
        });
      }
    }
  });
};

offerCardInit();

// Тестовая логика по сохранению данных в Личном кабинете блока Подписки.
const profileSubscribes = document.querySelector('.profile-subscribes');
if (profileSubscribes) {
  const form = profileSubscribes.querySelector('#profile-subscribes-form');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    window.Corners5ProjectLayout.summonAlert('#alert--save');
  });
}

// MAPS Это массив объектов из файла libsJQ/map-pins.js
// Передаём в функцию массив объектов с адрессами, структуру можно посмотреть по адресу выше.
window.Corners5ProjectLayout.multiMapInit(MAPS);


// // Тестовый вызов карточки акции.
window.Corners5ProjectLayout.summonPromotionAlert('#promotion-alert');


// Пример отправки формы "Связаться с нами".
const callUsInit = () => window.Corners5ProjectLayout.callUsModalInit((form) => {
  const fd = new FormData(form);

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = data.text;

      window.Corners5ProjectLayout.summonAlert('#alert--request');

      return data;
    },
    error(data) {
      console.log(data);
      window.Corners5ProjectLayout.summonAlert('#alert--error');
    },
  });
});

// callUsInit();


// Пример удаления товара через крестик в боковой панели Каталога.
const catalogCartInit = () => window.Corners5ProjectLayout.activateCatalogAmountCard((data) => {
  const fd = window.Corners5ProjectLayout.createFormData(data);

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = data.text;

      window.Corners5ProjectLayout.summonAlert('#alert--request');
      window.Corners5ProjectLayout.removeLoading();

      return data;
    },
    error(data) {
      console.log(data);
      window.Corners5ProjectLayout.summonAlert('#alert--error');
      window.Corners5ProjectLayout.removeLoading();
    },
  });
});

catalogCartInit();


// Пример отправки в корзину кол-ва товара из карточки товара.
const itemCardInit = () => window.Corners5ProjectLayout.activateItemCard((data) => {
  const fd = window.Corners5ProjectLayout.createFormData({
    id: data.detail.value,
    amount: data.detail.label,
  });

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = data.text;

      window.Corners5ProjectLayout.summonAlert('#alert--request');

      return data;
    },
    error(data) {
      console.log(data);
      window.Corners5ProjectLayout.summonAlert('#alert--error');
    },
  });
});

itemCardInit();


// Пример отправки в корзину кол-ва товара из карточки товара.
const cartCardInit = () => window.Corners5ProjectLayout.activateCartCard((data) => {
  const fd = window.Corners5ProjectLayout.createFormData({
    id: data.detail.value,
    amount: data.detail.label,
  });

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      const container = document.querySelector('#alert--request').content.querySelector('.alert__container');
      container.innerHTML = data.text;

      window.Corners5ProjectLayout.summonAlert('#alert--request');

      return data;
    },
    error(data) {
      console.log(data);
      window.Corners5ProjectLayout.summonAlert('#alert--error');
    },
  });
});

cartCardInit();


// Пример отправки данных за детальной карточкой товара.
const modalProductInit = () => window.Corners5ProjectLayout.activateModalProduct((data) => {
  const fd = window.Corners5ProjectLayout.createFormData(data);

  return $.ajax({
    type: 'POST',
    data: fd,
    // url: 'https://run.mocky.io/v3/2949fc2b-3e8d-4edf-bff1-9e048f4a10e7',
    // url: 'https://run.mocky.io/v3/1e10d332-4c0b-4d44-93ff-447090c2be86',
    url: 'https://run.mocky.io/v3/7b64aada-647e-494d-9f6f-2e23fbe408cf',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    // dataType: 'json',
    success(data) {

      return data;
    },
    error(data) {
      console.log(data);
      window.Corners5ProjectLayout.summonAlert('#alert--error');
    },
  });
});

modalProductInit();


// Инициализация для кнопок на вызов модалок.
const activateRequestButtonsInit = () => window.Corners5ProjectLayout.activateRequestButtons((form) => {
  const fd = new FormData(form);
  const type = form.querySelector('input[name="type"]').value;

  if (type === 'call-us') {
    console.log('Тестовая логика для call-us.');
  }


  if (type === 'discart') {
    console.log('Тестовая логика для кнопок очистить на страницах Корзины.');
  }

  if (type === 'dislike') {
    console.log('Тестовая логика для кнопок очистить на страницах Избранное.');
  }

  if (type === 'delete') {

    return $.ajax({
      type: "POST",
      data: fd,
      // url: "/ajax/form/support.php",
      url: "https://run.mocky.io/v3/ef8a4488-31a2-4d52-a983-a4ab6ad36107?mocky-delay=4000ms",
      processData: false,
      contentType: false,
      success(data) {
        if (data) {
          if (data.status == 'success') {
            if (data.type == 'reload') {
              window.location.reload();

              return;
            }

            if (data.type == 'redirect') {
              window.location.href = '/authorization/';

              return;
            }
          }

          document.querySelector("#alert--request").content.querySelector(".alert__container").innerHTML = data.text;
          window.Corners5ProjectLayout.summonAlert("#alert--request");
          if (data.status) {
            document.querySelector(".alert").classList.add(window.Corners5ProjectLayout.setStatus(data.status));
          }

          return data;
        }
      },
      error() {
        window.Corners5ProjectLayout.summonAlert("#alert--error");
        window.Corners5ProjectLayout.removeLoading();
      },
      complete(data) {
        window.Corners5ProjectLayout.removeLoading();
      },
    });
  }
});

activateRequestButtonsInit();

// Вынес функцию для логики переключателей вида сетки в каталоге для бекенда.
const viewToggleInit = () => {
  const view = document.querySelector('.top-filters__view');
  if (view) {
    const rowViewButton = document.querySelector('.top-filters__view-button--row-view');
    const tileViewButton = document.querySelector('.top-filters__view-button--tile-view');
    const catalogList = document.querySelector('.catalog__list');

    rowViewButton.addEventListener('click', () => {
      rowViewButton.classList.add('top-filters__view-button--active');
      tileViewButton.classList.remove('top-filters__view-button--active');
      catalogList.classList.add('catalog__list--row');
    });

    tileViewButton.addEventListener('click', () => {
      rowViewButton.classList.remove('top-filters__view-button--active');
      tileViewButton.classList.add('top-filters__view-button--active');
      catalogList.classList.remove('catalog__list--row');
    });
  }
};

viewToggleInit();



const activateCornersFilterInit = () => {
  // window.Corners5ProjectLayout.cornersFilterInit({
  //   submitSelects: (form) => {

  //     const fd = new FormData(form);
  //     return $.ajax({
  //       type: 'POST',
  //       data: fd,
  //       url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
  //       contentType: false,
  //       processData: false,
  //       cache: false,
  //       async: false,
  //       dataType: 'json',
  //       success(data) {
  //       },
  //       error(data) {
  //       },
  //       complete(data) {
  //       },
  //     });
  //   },
  //   submitSort: (evt) => {
  //     console.log(`id = ${evt.detail.id}`);
  //     console.log(`value = ${evt.detail.value}`);
  //     console.log(`label = ${evt.detail.label}`);
  //   },
  // });

  window.Corners5ProjectLayout.cornersFilterInit();

  const filterForm = document.querySelector('.corners-filter__form');
  if (filterForm) {
    filterForm.addEventListener('filter:change', (evt) => {
      console.log('Фильтр изменился:', evt.detail);
    });
  }
}

activateCornersFilterInit();
