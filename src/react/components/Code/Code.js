import "./Code.scss";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import VerificationCodeInput from "../VerificationCodeInput/VerificationCodeInput";


const Code = ({ phoneNumber, changeAction, sendAgain, sendSms }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setTimeout(() => {
      setSeconds(s => s - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <div className="Code">
      <p className="Code__header">Введите код</p>

      <p className="Code__text">
        Мы отправили код подтверждения на номер{" "}
        <b>
          +7 (***) ***-
          {phoneNumber[13]}
          {phoneNumber[14]}-
          {phoneNumber[16]}
          {phoneNumber[17]}
        </b>
      </p>

      <button
        className="Code__button"
        type="button"
        onClick={changeAction}
      >
        Изменить
      </button>

      <Formik
        initialValues={{ code: "" }}
        onSubmit={(values) => sendSms(values.code)}
      >
        {({ setFieldValue, submitForm }) => (
          <VerificationCodeInput
            length={4}
            className="Code__number"
            onComplete={(value) => {
              setFieldValue("code", value);
              submitForm();
            }}
          />
        )}
      </Formik>

      {seconds === 0 ? (
        <button
          className="Code__button"
          type="button"
          onClick={() => {
            setSeconds(60);
            sendAgain();
          }}
        >
          Получить новый код по SMS
        </button>
      ) : (
        <p className="Code__seconds">
          Получить новый код можно через {seconds} секунд
        </p>
      )}
    </div>
  );
};

export default Code;
