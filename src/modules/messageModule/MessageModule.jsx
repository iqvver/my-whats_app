import React, { useState, useEffect } from "react";
import "./MessageModule.scss";
import Header from "../../components/Header/Header";
import SendForm from "../../components/sendForm/SendForm";
import MessageList from "../../subModules/messageList/MessageList";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/chatSlice";
import { fetchChat } from "../../actions/actions";

const MessageModule = () => {
  const currentChat = useSelector((state) => state.chat.currentChat);
  const currentChatId = useSelector((state) => state.chat.currentChatId);
  const currentMessageList = useSelector(
    (state) => state.chat.chats[currentChatId]
  );
  const idInstance = useSelector((state) => state.isAuth.idInstance);
  const apiTokenInstance = useSelector(
    (state) => state.isAuth.apiTokenInstance
  );
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [itemDesabled, showDesabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    let apiData = {
      message,
      idInstance,
      currentChat,
      apiTokenInstance,
    };
    dispatch(addMessage({ message }));
    dispatch(fetchChat(apiData));
    setMessage("");
  };

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
