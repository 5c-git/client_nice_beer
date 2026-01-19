import './bx-filter.scss';

// const list = document.querySelectorAll('.collapsed-checkbox');
// if (list.length > 0) {
//   list.forEach((item) => {
//     const { scrollHeight } = item;
//     const { offsetHeight } = item;

//     const btnShow = document.createElement('button');
//     btnShow.setAttribute('type', 'button');
//     btnShow.classList.add('checkbox-more');
//     btnShow.textContent = 'Показать ещё';

//     const btnHide = document.createElement('button');
//     btnHide.setAttribute('type', 'button');
//     btnHide.classList.add('checkbox-more');
//     btnHide.textContent = 'Свернуть';

//     console.log(scrollHeight);
//     console.log(offsetHeight);

//     if (btnShow && scrollHeight > offsetHeight) {
//       const theFirstChild = item.firstChild;
//       item.insertBefore(btnShow, theFirstChild);
//     }

//     if (btnShow) {
//       btnShow.addEventListener('click', () => {
//         item.classList.remove('collapsed-checkbox');
//         btnShow.style.display = 'none';
//         item.appendChild(btnHide);
//       });
//     }

//     if (btnHide) {
//       btnHide.addEventListener('click', () => {
//         item.classList.add('collapsed-checkbox');
//         btnShow.style.display = '';
//         btnHide.remove();
//       });
//     }
//   });
// }
