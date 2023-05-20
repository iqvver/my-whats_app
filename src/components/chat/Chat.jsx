import React from "react";
import Ava from '../../assets/images/ava.jpg'
import "./Chat.scss";

// компонент чат

const Chat = ({chat, setCurrentId}) => {
  return (
    <div className="chat" onClick={() => setCurrentId(chat.newChatId)}>
      <div className="chat__ava">
        <img src={Ava} alt="Avatar" />
      </div>
      <div className="chat__descr">
        <div className="chat__name">{chat.newChatId}</div>
      </div>
    </div>
  );
};

export default Chat;
