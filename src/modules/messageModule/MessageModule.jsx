import React, { useState, useEffect } from "react";
import "./MessageModule.scss";
import Header from "../../components/Header/Header";
import SendForm from "../../components/sendForm/SendForm";
import MessageList from "../../subModules/messageList/MessageList";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/chatSlice";
import { sendNewMessage, receiveMessage } from "../../actions/actions";

const MessageModule = () => {
  const currentChat = useSelector((state) => state.chat.currentChat);
  const currentChatId = useSelector((state) => state.chat.currentChatId);
  const currentMessageList = useSelector(
    (state) => state.chat.chats[currentChatId]
  );
  const idInstance = useSelector((state) => state.isAuth.idInstance);
  const sender = useSelector((state) => state.isAuth.name);
  const apiTokenInstance = useSelector(
    (state) => state.isAuth.apiTokenInstance
  );
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [itemDesabled, showDesabled] = useState(true);

  let apiData = {
    message,
    idInstance,
    currentChat,
    apiTokenInstance,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ message, sender }));
    dispatch(sendNewMessage(apiData));
    dispatch(receiveMessage(apiData));
    setMessage("");
  };

  const addNewMessage = () => {
    dispatch(receiveMessage(apiData));
    console.log("1");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addNewMessage();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentChat) {
      showDesabled(false);
    }
  }, [currentChat]);

  return (
    <div className="message-module-container">
      <Header name={currentChat} />
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
