import React from "react";
import "./Form.scss";
import Input from "../../ui/inputs/Input";
import Button from "../../ui/buttons/Button";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-wrapper__title">Вход</div>
        <form className="login-form">
          <Input
            type={"email"}
            required={"required"}
            name={"login"}
            placeholder={"Введите логин(email)"}
          />
          <Input
            type={"password"}
            required={"required"}
            name={"password"}
            placeholder={"Введите пароль"}
          />
          <Button buttonType="submit" buttonName={"Войти"} />
        </form>
        <a href="" className="login-wrapper__reg">
          Зарегистрироваться?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
