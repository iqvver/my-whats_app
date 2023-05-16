import React from "react";
import "./ChatModule.scss";
import Header from "../../components/Header/Header";
import ChatStart from "../../components/chatStart/ChatStart";
import ChatList from "../../subModules/chatList/ChatList";

const ChatModule = () => {
  return (
    <div className="chat-module-container">
      <Header name={"Я"} />
      <ChatStart type={"text"} name={"chat"} placeholder={"Новый чат"} buttonName={"✔"} />
      <ChatList />
    </div>
  );
};

export default ChatModule;
