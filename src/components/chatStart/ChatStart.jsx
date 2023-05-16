import React from "react";
import "./ChatStart.scss";
import Input from "../../ui/inputs/Input";
import Button from "../../ui/buttons/Button";

const ChatStart = (props) => {
  const { name, placeholder, type, buttonName } = props;
  return (
    <div className="chat-start">
      <div className="chat-start__input">
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
      <div className="chat-start__button">
        <Button buttonName={buttonName} />
      </div>
    </div>
  );
};

export default ChatStart;
