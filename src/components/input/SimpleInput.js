import React, { useState } from "react";
import {
  inputContainer,
  labelContainer,
  inputChange,
} from "./SimpleInput.module.scss";

const SimpleInput = ({ type, refe, name, label, autoFocus }) => {
  const [value, setValue] = useState("");

  return (
    <div className={inputContainer}>
      <input
        autoFocus={autoFocus}
        className={value?.length > 0 ? inputChange : ""}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
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
