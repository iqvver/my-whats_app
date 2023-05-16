import React from "react";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import ChatStart from "../../components/chatStart/ChatStart";
import Chat from "../../components/chat/Chat";
import ChatList from "../../subModules/chatList/ChatList";

const ChatModule = () => {
  return (
    <div>
      <ChatHeader />
      <ChatStart />
      <ChatList />
    </div>
  );
};

export default ChatModule;
