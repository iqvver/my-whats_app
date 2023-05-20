import React from "react";
import "./Header.scss";
import Ava from "../../assets/images/ava.jpg";

// компонент хедер
const Header = ({ name }) => {
  return (
    <div className="chat-header">
      <img className="chat-header__ava" src={Ava} alt="Avatar" />
      <span className="chat-header__name">{name}</span>
    </div>
  );
};

export default Header;
