import React from "react";
import { buttonContainer } from "./SimpleButton.module.scss";

const SimpleButton = ({ type, onClick, buttonText }) => {
  return (
    <button className={buttonContainer} type={type} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default SimpleButton;
