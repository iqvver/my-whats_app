import React from 'react'
import ChatHeader from '../../components/chatHeader/ChatHeader'
import SendForm from '../../components/sendForm/SendForm'
import MessageList from '../../subModules/messageList/MessageList'

const MessageModule = () => {
  return (
    <div>
      <ChatHeader />
      <MessageList />
      <SendForm />
    </div>
  )
}

export default MessageModule