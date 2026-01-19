import './RequestCooperation.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import PhoneInput from '../PhoneInput/PhoneInput';
import Textarea from '../Textarea/Textarea';
import { PHONE_REG_EXP } from '../../../utils/utils';

const RequestCooperation = ({ submitHandler, id }) => {
  const validationSchema = Yup.object().shape({
    fio: Yup.string().required(),
    phone: Yup.string().matches(PHONE_REG_EXP).required(),
    email: Yup.string().email().required(),
    text: Yup.string().required(),
  });

  return (
    <div className="RequestCooperation">
      <div className="RequestCooperation__header">
        <h2 className="RequestCooperation__title">Стать партнером</h2>
      </div>
      <Formik
        initialValues={{
          id,
          fio: '',
          phone: '',
          email: '',
          text: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          submitHandler(values, actions.resetForm);
          console.log(values);
        }}
      >
        {({
          values, errors, touched, handleChange, handleBlur,
        }) => (
          <Form
            className="RequestCooperation__form"
            action='#'
            method='post'
            noValidate
          >
            <div className="RequestCooperation__field">
              <Input
                type='text'
                name='fio'
                label='Имя Фамилия'
                isRequired={true}
                placeholder='Введите Имя Фамилию'
                className={errors.fio && touched.fio ? 'Input--error' : null}
              />
            </div>
            <div className="RequestCooperation__field">
              <PhoneInput
                name='phone'
                label='Телефон'
                value={values.phone}
                isRequired={true}
                placeholder='+7 (999) 999-99-99'
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? 'PhoneInput--error' : null}
              />
            </div>
            <div className="RequestCooperation__field">
              <Input
                type='email'
                name='email'
                label='E-mail'
                isRequired={true}
                placeholder='Введите e-mail'
                className={errors.email && touched.email ? 'Input--error' : null}
              />
            </div>
            <div className="RequestCooperation__field RequestCooperation__field--wide">
              <Textarea
                name='text'
                label='Сообщение'
                isRequired={true}
                placeholder='Введите сообщение'
                className={errors.text && touched.text ? 'Textarea--error' : null}
              />
            </div>
            <div className="RequestCooperation__field RequestCooperation__field--wide">
              <div className="RequestCooperation__terms">
                <p className="RequestCooperation__legal">Нажимая на кнопку вы соглашаетесь с <a href="/about/privacy-policy/" target="_blank">политикой конфиденциальности</a> и <a href="/about/terms-of-use/" target="_blank">пользовательским соглашением</a>.</p>
                <button className="RequestCooperation__submit button" type="submit">Отправить</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="RequestCooperation__footer">
        <ul className="RequestCooperation__contacts-list">
          <li className="RequestCooperation__contacts-item">
            <a className="RequestCooperation__contacts-link" href="tel:+79155428282">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#icon-contacts-phone"></use>
              </svg><span>+7 (915) 542-82-82</span>
            </a>
          </li>
          <li className="RequestCooperation__contacts-item">
            <a className="RequestCooperation__contacts-link" href="mailto:brewery@brewlok.ru">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#icon-contacts-mail"></use>
              </svg><span>brewery@brewlok.ru</span>
            </a>
          </li>
          <li className="RequestCooperation__contacts-item">
            <a className="RequestCooperation__contacts-link" href="https://vk.com/brewlokbrewery">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#icon-contacts-vk"></use>
              </svg><span>Написать в VKontakte</span>
            </a>
          </li>
          <li className="RequestCooperation__contacts-item">
            <a className="RequestCooperation__contacts-link" href="https://t.me/brewlokbrewery">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#icon-contacts-telegram"></use>
              </svg><span>в Telegram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RequestCooperation;
