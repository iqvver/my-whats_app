import React, { useState, useEffect } from "react";
import "./ChatModule.scss";
import Header from "../../components/Header/Header";
import InputSend from "../../components/inputSend/InputSend";
import ChatList from "../../subModules/chatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChat } from "../../redux/chatSlice";
import ChatError from "../../components/errors/ChatError";
import { addNewChat } from "../../actions/actions";
import { logout } from "../../actions/authAction";

//контейнерная компонента (HOС) для получения данных для чата
//и всех паретров для его отрисовки

const ChatModule = () => {
  //получение данных и стейта
  const chat = useSelector((state) => state.chat);
  let userName = useSelector((state) => state.isAuth.myName);
  const idChat = chat.chats.length + 1;
  const messages = [];
  const dispatch = useDispatch();
  const [newChat, setChatId] = useState("");
  const [currentId, setCurrentId] = useState("");
  let actionData = { idChat, newChat, messages };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewChat(actionData));
    setChatId("");
  };

  //переключение между чатами
  useEffect(() => {
    dispatch(setCurrentChat(currentId));
  }, [currentId]);

  return (
    <div className="chat-module-container">
      <Header
        name={!userName ? "Вы" : userName}
        buttonName="Выйти"
        buttonType="submit"
        buttonClick={() => dispatch(logout())}
      />
      <InputSend
        type={"text"}
        name={"chat"}
        placeholder={"Новый чат"}
        buttonName={"✔"}
        value={newChat}
        getChange={(e) => setChatId(e.target.value)}
        onSubmit={onSubmit}
        buttonType={"submit"}
        mask="+9 (999) 999-99-99"
      />
      <ChatError chatIdError={chat.chatError} />
      <ChatList chatList={chat} setCurrentId={setCurrentId} />
    </div>
  );
};

export default ChatModule;
