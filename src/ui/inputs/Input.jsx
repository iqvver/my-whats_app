import React from "react";
import "./Input.scss";

const Input = (props) => {
  const { required, placeholder = null, type } = props;
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
