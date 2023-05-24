import React from "react";
import "./Form.scss";
import Input from "../../ui/inputs/Input";
import Button from "../../ui/buttons/Button";

// форма входа в приложение
// импутыи кнопки пеиспользкемы и импортируются
const LoginForm = (props) => {
  const {
    setIdInst,
    setApiToken,
    apiToken,
    idInst,
    setName,
    chatId,
    onSubmit,
  } = props;
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-wrapper__title">Вход</div>
        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
          <div className="login-form__input">
            <label className="login-form__label" htmlFor="Name">
              Имя
            </label>
            <Input
              type={"text"}
              name={"Name"}
              placeholder={"Имя (Какое нравится)"}
              getChange={(e) => setName(e.target.value)}
              value={chatId}
            />
          </div>

          <div className="login-form__input">
            <label className="login-form__label" htmlFor="IdInstance">
            ID Instance:
            </label>
            <Input
              type={"text"}
              required={"required"}
              name={"IdInstance"}
              placeholder={"Введите логин( IdInstance )"}
              getChange={(e) => setIdInst(e.target.value)}
              value={idInst}
            />
          </div>
          <div className="login-form__input">
            <label className="login-form__label" htmlFor="apiTokenInstance">
            API Token:
            </label>
            <Input
              type={"password"}
              required={"required"}
              name={"apiTokenInstance"}
              placeholder={"Введите пароль"}
              getChange={(e) => setApiToken(e.target.value)}
              value={apiToken}
            />
          </div>
          <div className="login-form__btm">
            <Button buttonType="submit" buttonName={"Войти"} />
          </div>
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
