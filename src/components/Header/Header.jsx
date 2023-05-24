import React from "react";
import "./Header.scss";
import Ava from "../../assets/images/ava.jpg";
import Button from "../../ui/buttons/Button";

// компонент хедер
const Header = ({ name, buttonName, buttonClick, buttonType }) => {
  return (
    <div className="chat-header">
      <img className="chat-header__ava" src={Ava} alt="Avatar" />
      <span className="chat-header__name">{name}</span>
      {buttonName ? (
        <div className="chat-header__close">
          <Button
            buttonName={buttonName}
            buttonClick={buttonClick}
            buttonType={buttonType}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
