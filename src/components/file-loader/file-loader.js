import './file-loader.scss';
import * as FilePond from 'filepond';
import ru from 'filepond/locale/ru-ru';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import {
  summonAlert,
} from '../alert/alert';

FilePond.registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
);

const fileLoaderInit = () => {
  const fileLoader = document.querySelector('.file-loader');
  if (fileLoader) {
    const form = fileLoader.closest('form');
    const input = fileLoader.querySelector('.file-loader__input');

    const isRequired = input.hasAttribute('required');
    const { labelName } = input.dataset;

    const filePond = FilePond.create(
      fileLoader.querySelector('input[type="file"]'),
      {
        required: isRequired,
        styleButtonRemoveItemPosition: 'right',
        iconRemove: 'Удалить',

        allowMultiple: true,
        allowRevert: false,
        allowProcess: false,
        allowReorder: false,
        credits: false,
        itemInsertInterval: 0,

        // Файлы отправляются обычной HTML-формой.
        storeAsFile: true,

        // Валидация размера применяется ТОЛЬКО если файл добавлен.
        allowFileSizeValidation: true,

        // Валидация типа применяется ТОЛЬКО если файл добавлен.
        allowFileTypeValidation: true,

        // Кастомное определение MIME-типа
        fileValidateTypeDetectType: (source, type) => new Promise((resolve) => {
          const fileName = source.name;

          if (fileName.toLowerCase().endsWith('.flv')) {
            type = 'video/x-flv';
          }

          resolve(type);
        }),
        beforeAddFile: (item) => { },
        beforeRemoveFile: (item) => {
        },
        onerror(error, item) {
          filePond.removeFile(item);

          summonAlert({
            template: '#alert--red',
            text: error.main,
          });
        },
      },
    );

    FilePond.setOptions(ru);
    FilePond.setOptions({
      labelIdle: `<svg width="18" height="18" viewBox="0 0 18 18" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.87721 9.72546L9.54625 5.03781C10.4918 4.08854 12.0248 4.08854 12.9702 5.03781C13.9158 5.98707 13.9158 7.52612 12.9702 8.47538L7.36738 14.1005C6.9376 14.532 6.2408 14.532 5.81102 14.1005C5.38124 13.669 5.38124 12.9695 5.81102 12.538L10.7913 7.53786C11.0492 7.27897 11.0492 6.85923 10.7913 6.60034C10.5335 6.34145 10.1154 6.34145 9.85756 6.60034L4.87721 11.6005C3.93171 12.5497 3.93171 14.0888 4.87721 15.0381C5.82272 15.9873 7.35569 15.9873 8.30119 15.0381L13.9041 9.41291C15.3653 7.94587 15.3653 5.56732 13.9041 4.10028C12.4429 2.63324 10.0737 2.63324 8.61246 4.10028L3.9434 8.7879C3.68553 9.04679 3.68553 9.46656 3.9434 9.72546C4.20126 9.98435 4.61935 9.98435 4.87721 9.72546Z"/></svg>${labelName}`,
    });

    if (form) {
      form.addEventListener('reset', () => {
        filePond.removeFiles();
      });
    }
  }
};

fileLoaderInit();
