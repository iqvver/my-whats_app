import React from "react";
import "./Input.scss";
import InputMask from "react-input-mask";

//настраиваемый, переиспользуемый инпут(поле ввода)
const Input = (props) => {
  const {
    required,
    getChange,
    value,
    placeholder = null,
    type,
    itemDesabled,
    mask = null,
  } = props;
  return (
    <InputMask
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={getChange}
      value={value}
      className="input"
      disabled={itemDesabled}
      mask={mask}
    />
  );
};

export default Input;
