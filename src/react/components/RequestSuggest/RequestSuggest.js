import './RequestSuggest.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import PhoneInput from '../PhoneInput/PhoneInput';
import Textarea from '../Textarea/Textarea';

const RequestSuggest = ({ submitHandler, id }) => {
  const validationSchema = Yup.object().shape({
    fio: Yup.string().required(),
    email: Yup.string().email().required(),
    text: Yup.string().required(),
  });

  return (
    <div className="RequestSuggest">
      <div className="RequestSuggest__header">
        <h2 className="RequestSuggest__title"><em>Не нашли</em> что искали?</h2>
      </div>
      <Formik
        initialValues={{
          id,
          fio: '',
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
            className="RequestSuggest__form"
            action='#'
            method='post'
            noValidate
          >
            <div className="RequestSuggest__field">
              <Input
                type='text'
                name='fio'
                label='Имя Фамилия'
                isRequired={true}
                placeholder='Введите Имя Фамилию'
                className={errors.fio && touched.fio ? 'Input--error' : null}
              />
            </div>
            <div className="RequestSuggest__field">
              <Input
                type='email'
                name='email'
                label='E-mail'
                isRequired={true}
                placeholder='Введите e-mail'
                className={errors.email && touched.email ? 'Input--error' : null}
              />
            </div>
            <div className="RequestSuggest__field RequestSuggest__field--wide">
              <Textarea
                name='text'
                label='Сообщение'
                isRequired={true}
                placeholder='Введите сообщение'
                className={errors.text && touched.text ? 'Textarea--error' : null}
              />
            </div>
            <div className="RequestSuggest__field">
              <button className="RequestSuggest__submit button" type="submit">Отправить</button>
            </div>
            <div className="RequestSuggest__field RequestSuggest__field--wide">
              <div className="RequestSuggest__terms">
                <p className="RequestSuggest__legal">Нажимая на кнопку вы соглашаетесь с <a href="/about/privacy-policy/" target="_blank">политикой конфиденциальности</a> и <a href="/about/terms-of-use/" target="_blank">пользовательским соглашением</a>.</p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestSuggest;
