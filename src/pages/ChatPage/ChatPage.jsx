import React from "react";
import './ChatPage.scss'
import ChatModule from "../../modules/chatModule/ChatModule";
import MessageModule from "../../modules/messageModule/MessageModule";

//страница чата
//блок чатав и соответствующих им сообщениям
const ChatPage = () => {
  return (
    <div className="chat-container">
      <ChatModule />
      <MessageModule />
    </div>
  );
};

export default ChatPage;
