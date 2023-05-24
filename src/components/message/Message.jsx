import React from "react";
import "./Message.scss";

// компонент сообщение

const Message = ({ message }) => {
  return <div className="message">{message}</div>;
};

export default Message;
