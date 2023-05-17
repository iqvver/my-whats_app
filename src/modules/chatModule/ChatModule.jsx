import React, { useState } from "react";
import "./ChatModule.scss";
import Header from "../../components/Header/Header";
import ChatStart from "../../components/chatStart/ChatStart";
import ChatList from "../../subModules/chatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../redux/chatSlice";

const ChatModule = () => {
  const chat = useSelector((state) => state.chat);
  const idChat = chat.chats.length +1
  const dispatch = useDispatch();

  const [newChatId, setChatId] = useState(chat.chatId);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addChat({idChat, newChatId}));
  };

  return (
    <div className="chat-module-container">
      <Header name={"Я"} />
      <ChatStart
        type={"text"}
        name={"chat"}
        placeholder={"Новый чат"}
        buttonName={"✔"}
        value={newChatId}
        getChange={(e) => setChatId(e.target.value)}
        onSubmit={onSubmit}
        buttonType={"submit"}
      />
      <ChatList />
    </div>
  );
};

export default ChatModule;
