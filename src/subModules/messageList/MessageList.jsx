import React from "react";
import "./MessageList.scss";
import Message from "../../components/message/Message";

const MessageList = ({ currentMessageList }) => {
  return (
    <>
      {currentMessageList?.messages.map((message, index) => (
        <Message key={index} message={message.message} />
      ))}
    </>
  );
};

export default MessageList;
