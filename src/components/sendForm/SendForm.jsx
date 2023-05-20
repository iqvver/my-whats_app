import React from "react";
import "./SendForm.scss";
import InputSend from "../inputSend/InputSend";

const SendForm = ({ value, getChange, buttonType, onSubmit, itemDesabled }) => {
  return (
    <div className="send-form">
      <InputSend
        type={"text"}
        name={"message"}
        placeholder={"Введите сообщение"}
        buttonName={"➤"}
        value={value}
        getChange={getChange}
        buttonType={buttonType}
        onSubmit={onSubmit}
        itemDesabled={itemDesabled}
      />
    </div>
  );
};

export default SendForm;
