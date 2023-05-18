import React from "react";
import "./Message.scss";

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="message__content">{message}</div>
    </div>
  );
};

export default Message;
