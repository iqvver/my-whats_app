import React, { useState } from "react";
import Form from "../../components/loginForm/Form";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../../redux/authSlice";

const AuthPage = () => {
  const authItems = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();

  const [chatId, setName] = useState(authItems.name);
  const [idInst, setIdInst] = useState(authItems.idInstance);
  const [apiToken, setApiToken] = useState(authItems.apiTokenInstance);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(isAuth({ idInst, apiToken, chatId }));
  };

  return (
    <Form
      idInst={idInst}
      setIdInst={setIdInst}
      apiToken={apiToken}
      setApiToken={setApiToken}
      setName={setName}
      name={chatId}
      onSubmit={onSubmit}
    />
  );
};

export default AuthPage;
