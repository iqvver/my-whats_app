import React, { useState } from "react";
import Form from "../../components/loginForm/Form";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../../redux/authSlice";

const AuthPage = () => {
  const authItems = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();

  const [name, setName] = useState(authItems.name);
  const [idInst, setIdInst] = useState(authItems.idInstance);
  const [apiToken, setApiToken] = useState(authItems.apiTokenInstance);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(isAuth({ idInst, apiToken, name }));
  };

  return (
    <Form
      idInst={idInst}
      setIdInst={setIdInst}
      apiToken={apiToken}
      setApiToken={setApiToken}
      setName={setName}
      name={name}
      onSubmit={onSubmit}
    />
  );
};

export default AuthPage;
