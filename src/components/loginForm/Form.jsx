import React from "react";
import "./Form.scss";
import Input from "../../ui/inputs/Input";
import Button from "../../ui/buttons/Button";

const LoginForm = (props) => {
  const { setIdInst, setApiToken, apiToken, idInst, setName, name, onSubmit } =
    props;
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-wrapper__title">Вход</div>
        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
          <label className="login__label" htmlFor="Name">
            Имя
          </label>
          <Input
            type={"text"}
            name={"Name"}
            placeholder={"Имя (Какое нравится)"}
            getChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label className="login__label" htmlFor="IdInstance">
            IdInstance
          </label>
          <Input
            type={"text"}
            required={"required"}
            name={"IdInstance"}
            placeholder={"Введите логин( IdInstance )"}
            getChange={(e) => setIdInst(e.target.value)}
            value={idInst}
          />
          <label className="login__label" htmlFor="apiTokenInstance">
            ApiTokenInstance
          </label>
          <Input
            type={"password"}
            required={"required"}
            name={"apiTokenInstance"}
            placeholder={"Введите пароль"}
            getChange={(e) => setApiToken(e.target.value)}
            value={apiToken}
          />
          <Button buttonType="submit" buttonName={"Войти"} />
        </form>
        <a
          href="https://console.green-api.com/auth/register"
          rel="noopener noreferrer"
          target="_blank"
          className="login-wrapper__reg"
        >
          Зарегистрироваться?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
