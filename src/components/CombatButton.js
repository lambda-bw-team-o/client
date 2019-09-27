import React from 'react';
import axios from '../helpers/axiosWithAuth';

const CombatButton = ({ action, name, callback, target }) => {
  const endpoint = 'https://team-o.herokuapp.com/api/adv/';
  const body = target ? { "enemy": target } : {};
  const handleOnClick = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios().post(`${endpoint}${action}/`, body);
      if (data) {
        callback(data);
      }
    } catch (error) {
      callback(error, true)
    }
  }
  return <button style={{
    width: '100%',
    height: '50px',
    borderRadius: '12px',
    border: '3px solid #666',
    fontSize: '18px',
    background: 'white',
    color: '#666',
    cursor: 'pointer',
    marginBottom: '10px',
  }} onClick={handleOnClick}>{name}</button>
}

export default CombatButton;
