import "./Login.scss";
import { Formik, Form } from "formik";
import { PHONE_REG_EXP } from "../../../utils/utils";

import * as Yup from "yup";
import PhoneInput from "../PhoneInput/PhoneInput";

const validationSchema = Yup.object().shape({
  phone: Yup.string().matches(PHONE_REG_EXP).required(),
});

const Login = ({ submitHandler }) => {
  return (
    <section className="Login">
      <p className="Login__header">Вход или регистрация</p>
      <Formik
        initialValues={{ phone: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitHandler(values.phone);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form
            className="Login__form"
            noValidate
          >
            <PhoneInput
              name="phone"
              onBlur={handleBlur}
              value={values.phone}
              onChange={handleChange}
              placeholder="Введите номер телефона"
              className={`Login__input${errors.phone && touched.phone ? " Login__input--error" : ""
                }`}
            />
            <button className="button Login__button" type="submit">
              Получить код
            </button>

            <p className="Login__link"> Нажимая кнопку «Получить код», вы соглашаетесь c <a href="/about/privacy-policy/" target="_blank">политикой конфиденциальности</a> и <a href="/about/terms-of-use/" target="_blank">пользовательским соглашением</a>.</p>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Login;
