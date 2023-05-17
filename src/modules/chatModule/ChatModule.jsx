import React, { useState } from "react";
import "./ChatModule.scss";
import Header from "../../components/Header/Header";
import ChatStart from "../../components/chatStart/ChatStart";
import ChatList from "../../subModules/chatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { setInterlocutor } from "../../redux/interlocutorSlice";

const ChatModule = () => {
  const chatId = useSelector((state) => state.chatId.chatId);
  const dispatch = useDispatch();

  const [newChatId, setChatId] = useState(chatId);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setInterlocutor(newChatId));
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
