import React from "react";
import { buttonContainer } from "./SimpleButton.module.scss";
import Loader from "../Loader"

const SimpleButton = ({ type, onClick, buttonText, loading, disabled }) => {
  return (
    <button disabled={disabled} className={buttonContainer} type={type} onClick={onClick}>
      {loading ? <Loader /> : buttonText}
    </button>
  );
};

export default SimpleButton;
