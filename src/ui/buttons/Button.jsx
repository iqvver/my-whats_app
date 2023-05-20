import React from "react";
import "./Button.scss";

//настраиваемая, переиспользуемая кнопка
const Button = ({
  buttonClick = null,
  buttonName = "Кнопка",
  buttonType = "button",
  itemDesabled,
}) => {
  return (
    <button
      className="button"
      disabled={itemDesabled}
      type={buttonType}
      onClick={buttonClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
