import React from "react";
import "./MessageModule.scss";
import Header from "../../components/Header/Header";
import SendForm from "../../components/sendForm/SendForm";
import MessageList from "../../subModules/messageList/MessageList";

const MessageModule = () => {
  return (
    <div className="message-module-container">
      <Header name={"Собеседник"} />
      <div>
        <MessageList />
        <SendForm />
      </div>
    </div>
  );
};

export default MessageModule;
