import React from "react";
import Chat from "../../components/chat/Chat";
import "./ChatList.scss";

//мапинг списка чатов
const ChatList = ({ chatList, setCurrentId }) => {
  return (
    <div className="chat-list">
      {chatList?.chats.map((chat) => (
        <Chat key={chat.idChat} chat={chat} setCurrentId={setCurrentId} />
      ))}
    </div>
  );
};

export default ChatList;
