import React from "react";
import Chat from "../../components/chat/Chat";
import { useSelector } from "react-redux";

const ChatList = () => {
  const chatList = useSelector((state) => state.chat.chats);
  return (
    <>
      {chatList.map((chat) => (
        <Chat key={chat.idChat} chat={chat.newChatId} />
      ))}
    </>
  );
};

export default ChatList;
