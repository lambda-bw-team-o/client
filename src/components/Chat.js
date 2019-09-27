import React from 'react';

const Chat = ({ messages }) => {
  return (
    <div className="chat-box">
      {
        messages.map(message => <div>{message}</div>)
      }
    </div>
  )
}

export default Chat;