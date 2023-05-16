import React from "react";
import "./SendForm.scss";
import ChatStart from "../chatStart/ChatStart";

const SendForm = () => {
  return (
    <div className="send-form">
      <ChatStart
        type={"text"}
        name={"message"}
        placeholder={"Введите сообщение"}
        buttonName={"➤"}
      />
    </div>
  );
};

export default SendForm;
