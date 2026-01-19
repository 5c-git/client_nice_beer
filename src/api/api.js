import axios from 'axios';
import { ENV } from '../env';
import { TOKEN} from '../utils/utils'; 


const instance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

const daData = axios.create({
  baseURL:
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Token ${TOKEN}`,
  },
});

export const dataAPI = {
  async getOrganization(query) {
    const response = await axios.post(`checkCompany.php`, { inn: query });
    const daDataInfo = await daData.post(null, { query });

    if (daDataInfo.data.suggestions[0]) {
      return {
        isAlreadyExist: response.data.result ? true : false,
        data: daDataInfo.data.suggestions[0],
      };
    }

    return {
      isAlreadyExist: response.data.result ? true : false,
      data: {},
    };
  },
};

// отправляем данные по добавлению новой организации на сервер
export const organizationsApi = {
  addNewOrganization(newOrganization) {
    console.log('Api');
    return instance
      .post('add_organization.php', { newOrganization })
      .then((response) => {
        if (response.data.status === 'success') {
          window.Corners5ProjectLayout.summonAlert('#alert--add');

          setTimeout(() => {
            window.location.replace(
              `${window.location.origin}/personal/organizations/`
            );
          }, 3000);
        }
      })
      .catch((error) => console.log('error', error));
  },
};

// действия с профайлом, получение, обновление полей
export const profileApi = {
  getProfile() {
    return axios
      .get(`${window.routes5.profile.requests.getProfile[`url${ENV}`]}`)
      .then((response) => {
        console.log(ENV);
        if (response.status === 200 && response.data.status !== 'error') {
          return response.data;
        } else {
          return 'Возникла ошибка, повторите попытку позже';
        }
      })
      .catch(() => 'Возникла ошибка, повторите попытку позже');
  },

  updateName(name) {
    return instance
      .put(`${window.routes5.profile.requests.getProfile[`url${ENV}`]}`, { name })
      .then((response) => {
        if (response.status === 200) {
          console.log('Изменения сохранены');
          window.Corners5ProjectLayout.summonAlert('#alert--fio');
        }
      })
      .catch((error) => console.log('error', error));
  },

  updateEmail(email) {
    return instance
      .put(`${window.routes5.profile.requests.getProfile[`url${ENV}`]}`, { email })
      .then((response) => {
        if (response.status === 200) {
          console.log('Изменения сохранены');
          window.Corners5ProjectLayout.summonAlert('#alert--confirm-email');
        }
      })
      .catch((error) => console.log('error', error));
  },

  updatePhone(phone) {
    return instance
      .put(`${window.routes5.profile.requests.getProfile[`url${ENV}`]}`, {
        phone,
      })
      .then((response) => {
        if (response.status === 200 && response.data.status === 'success') {
          window.Corners5ProjectLayout.summonAlert('#alert--mobileSuccess');
          return true;
        } else if (
          response.status === 200 &&
          response.data.status === 'error'
        ) {
          document
            .querySelector('#alert--error')
            .content.querySelector('.alert__text').textContent =
            response.data.text;
          window.Corners5ProjectLayout.summonAlert('#alert--error');
          return false;
        }
      })
      .catch((error) => console.log('error', error));
  },
};
