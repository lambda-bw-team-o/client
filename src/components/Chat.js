import React, { useState } from 'react';
import axios from '../helpers/axiosWithAuth';

const Chat = () => {
  const [input, setInput] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  const handleSay = async (e) => {
    e.preventDefault();
    setInput('');
    try {
      const res = await axios().post('https://team-o.herokuapp.com/api/adv/say/', { 'message': input });
      console.log('res:', res);
    } catch (error) {
      console.log('Chat Error: ', error);
    }
  }

  return (
    <form onSubmit={handleSay}>
      <input style={{ width: '100%', height: '40px', fontSize: '18px' }} type="text" value={input} onChange={handleOnChange}></input>
    </form>
  )
}

export default Chat;