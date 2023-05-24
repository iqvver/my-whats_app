import React, { useState } from "react";
import Form from "../../components/loginForm/Form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authAction";

//страница входа
const AuthPage = () => {
  const { name, idInstance, apiTokenInstance } = useSelector(
    (state) => state.isAuth
  );
  const dispatch = useDispatch();

  const [myName, setName] = useState(name);
  const [idInst, setIdInst] = useState(idInstance);
  const [apiToken, setApiToken] = useState(apiTokenInstance);

  const actionData = { myName, idInst, apiToken };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(actionData));
  };

  return (
    <Form
      idInst={idInst}
      setIdInst={setIdInst}
      apiToken={apiToken}
      setApiToken={setApiToken}
      setName={setName}
      name={myName}
      onSubmit={onSubmit}
    />
  );
};

export default AuthPage;
