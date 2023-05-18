import React from "react";
import "./ChatStart.scss";
import Input from "../../ui/inputs/Input";
import Button from "../../ui/buttons/Button";

const ChatStart = (props) => {
  const {
    name,
    placeholder,
    type,
    buttonName,
    value,
    getChange,
    onSubmit,
    buttonType,
    itemDesabled
  } = props;
  return (
    <form className="chat-start" onSubmit={onSubmit}>
      <div className="chat-start__input">
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          getChange={getChange}
          itemDesabled={itemDesabled}
        />
      </div>
      <div className="chat-start__button">
        <Button buttonName={buttonName} buttonType={buttonType} itemDesabled={itemDesabled} />
      </div>
    </form>
  );
};

export default ChatStart;
