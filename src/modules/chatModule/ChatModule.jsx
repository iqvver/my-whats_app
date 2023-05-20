import React, { useState, useEffect } from "react";
import "./ChatModule.scss";
import Header from "../../components/Header/Header";
import InputSend from "../../components/inputSend/InputSend";
import ChatList from "../../subModules/chatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { addChat, setCurrentChat } from "../../redux/chatSlice";

//контейнерная компонента (HOС) для получения данных для чата
//и всех паретров для его отрисовки

const ChatModule = () => {

  //получение данных и стейта
  const chat = useSelector((state) => state.chat);
  let userName = useSelector((state) => state.isAuth.name);
  const idChat = chat.chats.length + 1;
  const messages = [];
  const dispatch = useDispatch();

  const [newChatId, setChatId] = useState("");
  const [currentId, setCurrentId] = useState("");

  //добавление чата
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addChat({ idChat, newChatId, messages }));
    setChatId("");
  };

  //переключение между чатами
  useEffect(() => {
    dispatch(setCurrentChat(currentId));
  }, [currentId]);

  //что бы имя не было пустым
  !userName ? (userName = "Я") : (userName = userName);

  return (
    <div className="chat-module-container">
      <Header name={userName} />
      <InputSend
        type={"text"}
        name={"chat"}
        placeholder={"Новый чат"}
        buttonName={"✔"}
        value={newChatId}
        getChange={(e) => setChatId(e.target.value)}
        onSubmit={onSubmit}
        buttonType={"submit"}
        mask="+9 (999) 999-99-99"
      />
      <ChatList chatList={chat} setCurrentId={setCurrentId} />
    </div>
  );
};

export default ChatModule;
