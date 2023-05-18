import React from "react";
import "./SendForm.scss";
import ChatStart from "../chatStart/ChatStart";

const SendForm = ({ value, getChange, buttonType, onSubmit, itemDesabled }) => {
  return (
    <div className="send-form">
      <ChatStart
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
