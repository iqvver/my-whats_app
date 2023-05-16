import React from "react";
import "./Button.scss";

const Button = ({
  buttonClick = null,
  buttonName = "Кнопка",
  buttonType = "button",
}) => {
  return (
    <button className="button" type={buttonType} onClick={buttonClick}>
      {buttonName}
    </button>
  );
};

export default Button;
