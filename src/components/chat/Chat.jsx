import React from "react";
import Ava from '../../assets/images/ava.jpg'
import "./Chat.scss";

const Chat = ({chat}) => {
  return (
    <div className="chat">
      <div className="chat__ava">
        <img src={Ava} alt="Avatar" />
      </div>
      <div className="chat__descr">
        <div className="chat__name">{chat}</div>
      </div>
    </div>
  );
};

export default Chat;
