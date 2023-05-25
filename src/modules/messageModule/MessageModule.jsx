import React, { useState, useEffect } from "react";
import "./MessageModule.scss";
import Header from "../../components/Header/Header";
import SendForm from "../../components/sendForm/SendForm";
import MessageList from "../../subModules/messageList/MessageList";
import { useDispatch, useSelector } from "react-redux";
import { sendNewMessage, receiveMessage } from "../../actions/messageActions";

//контейнерная компонента (HOС) для получения данных для сообщений
//и всех паретров для их отрисовки

const MessageModule = () => {
  //получение данных и стейта
  //десткуктуризация
  const { currentChat, currentChatId } = useSelector((state) => state.chat);
  const currentMessageList = useSelector(
    (state) => state.chat.chats[currentChatId]
  );
  const { idInstance, apiTokenInstance } = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [itemDesabled, showDesabled] = useState(true);

  //обьект для обрадоткт API
  let actionData = { message, idInstance, currentChat, apiTokenInstance };

  //отправка  сообщения
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(sendNewMessage(actionData));
    setMessage("");
  };
  
  //обновление для получения сообщений в реальном времени
  //интервал 10 сек
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(receiveMessage(actionData));
    }, 10000);
    return () => clearInterval(interval);
  }, [dispatch]);

  //отключение инпута и кнопки, когда не выбран чат
  useEffect(() => {
    if (currentChat) {
      showDesabled(false);
    }
  }, [currentChat]);

  return (
    <div className="message-module-container">
      <Header name={!currentChat ? "Содеседник" : currentChat} />
      <div>
        <MessageList currentMessageList={currentMessageList} />
        <SendForm
          value={message}
          getChange={(e) => setMessage(e.target.value)}
          onSubmit={onSubmit}
          buttonType={"submit"}
          itemDesabled={itemDesabled}
        />
      </div>
    </div>
  );
};

export default MessageModule;
