import React from "react";
import "./MessageList.scss";
import Message from "../../components/message/Message";

//мапинг списка списка сообщений
const MessageList = ({ currentMessageList }) => {
  return (
    <div className="message-list">
      {currentMessageList?.messages.map((message, index) => (
        <Message key={index} message={message.message} />
      ))}
    </div>
  );
};

export default MessageList;
