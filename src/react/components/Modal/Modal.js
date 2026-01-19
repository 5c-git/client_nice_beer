import "./Modal.scss";
import React, { useEffect } from "react";

const Modal = ({
  children, closeModal, className,
}) => {
  const onDismiss = () => {
    closeModal();
  };

  const onModalEscPress = (evt) => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      onDismiss();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onModalEscPress);

    return () => {
      document.removeEventListener('keydown', onModalEscPress);
    };
  }, []);

  return (
    <section className={`Modal${className ? ` ${className}` : ""}`}>
      <div
        className="Modal__overlay"
        onClick={() => {
          closeModal();
        }}
      >
      </div>

      <section className="Modal__container">
        <button
          className="Modal__close"
          onClick={() => {
            closeModal();
          }}
        >
          <svg>
            <use href="#icon-closer"></use>
          </svg>
        </button>

        {children}
      </section>
    </section>
  );
};

export default Modal;
