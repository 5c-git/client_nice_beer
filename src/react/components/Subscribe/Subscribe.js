import './Subscribe.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';

const Subscribe = ({ submitHandler, id }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  return (
    <div className="Subscribe">
      <div className="Subscribe__header">
        <h2 className="Subscribe__title">Подпишитесь на&nbsp;рассылку! </h2>
        <p className="Subscribe__post-title">Подпишитесь на&nbsp;новости и&nbsp;получайте самые свежие статьи и&nbsp;рекомендации от&nbsp;наших пивоваров!</p>
      </div>
      <Formik
        initialValues={{
          id,
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          submitHandler(values, actions.resetForm);
          console.log(values);
        }}
      >
        {({
          errors, touched,
        }) => (
          <Form
            className="Subscribe__form"
            id="Subscribe-form"
            action='#'
            method='post'
            noValidate
          >
            <div className="Subscribe__field">
              <Input
                type='email'
                name='email'
                label='E-mail'
                isRequired={true}
                placeholder='Введите e-mail'
                className={errors.email && touched.email ? 'Input--error' : null}
              />
            </div>
          </Form>
        )}
      </Formik>
      <div className="Subscribe__terms">
        <p className="Subscribe__legal">Нажимая на кнопку вы соглашаетесь с <a href="/about/privacy-policy/" className="Subscribe__legal-link" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a> и <a href="/about/terms-of-use/" className="Subscribe__legal-link" target="_blank" rel="noopener noreferrer">пользовательским соглашением</a>.</p>
        <button className="Subscribe__submit button" type="submit" form="Subscribe-form">Отправить</button>
      </div>
    </div>
  );
};

export default Subscribe;
