import React from "react";
import "./ChatError.scss";

const ChatError = ({ chatIdError }) => {
  return (
    <div className={chatIdError ? "chat__error" : "chat__error-not-visible"}>
      Не корректно указан номер.
    </div>
  );
};

export default ChatError;
