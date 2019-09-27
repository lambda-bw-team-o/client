import React from 'react';
import axios from '../helpers/axiosWithAuth';

const CombatButton = ({ action, name, callback, target }) => {
  const endpoint = 'https://team-o.herokuapp.com/api/adv/';
  const body = target ? { "enemy": target } : {};
  const handleOnClick = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios().post(`${endpoint}/${action}/`, body);
      if (data) {
        callback(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return <button onClick={handleOnClick}>{name}</button>
}

export default CombatButton;
