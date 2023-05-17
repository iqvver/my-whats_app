import React from "react";
import "./Input.scss";

const Input = (props) => {
  const { required, getChange, value, placeholder = null, type } = props;
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={getChange}
      value={value}
      className="input"
    />
  );
};

export default Input;
