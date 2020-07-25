import React from "react";
import { inputContainer, labelContainer } from "./SimpleInput.module.scss";

const SimpleInput = ({ type, refe, name, label, autoFocus }) => {
  return (
    <div className={inputContainer}>
      <input
        autoFocus={autoFocus}
        required
        name={name}
        type={type}
        ref={refe}
      />
      <label className={labelContainer} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default SimpleInput;
