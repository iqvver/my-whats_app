import React from "react";
import Chat from "../../components/chat/Chat";

const ChatList = ({ chatList, setCurrentId }) => {
  return (
    <>
      {chatList?.chats.map((chat) => (
        <Chat key={chat.idChat} chat={chat} setCurrentId={setCurrentId} />
      ))}
    </>
  );
};

export default ChatList;
