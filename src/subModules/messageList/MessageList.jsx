import React from "react";
import "./MessageList.scss";
import Message from "../../components/message/Message";

const MessageList = () => {
  return (
    <div className="message-list">
      <Message />
      <Message />
    </div>
  );
};

export default MessageList;
