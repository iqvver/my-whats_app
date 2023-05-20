import React from "react";
import "./Message.scss";

// компонент сообщение

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="message__content">{message}</div>
    </div>
  );
};

export default Message;
