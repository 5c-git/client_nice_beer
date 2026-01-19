import './VerificationCodeInput.scss';

import { useRef } from "react";

const VerificationCodeInput = ({
  length = 4,
  onComplete,
  className = "",
}) => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    e.target.value = value;

    if (!value) return;

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    const code = inputsRef.current
      .map(input => input?.value || "")
      .join("");

    if (code.length === length) {
      onComplete(code);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className={`VerificationCodeInput ${className}`}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          ref={el => (inputsRef.current[index] = el)}
          onChange={e => handleChange(e, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          className="VerificationCodeInput__input"
        />
      ))}
    </div>
  );
};

export default VerificationCodeInput;
