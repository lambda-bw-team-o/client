import React from 'react';

const Players = (props) => {
  const playerData = props.playerData || { "players": [] };

  const handleOnTarget = (e) => {
    props.handleTarget(e.target.dataset.id, e.target.dataset.name)
  }
  return (
    <div className="player-list" style={{ marginTop: '20px', background: '#444', padding: '0 5px 5px 5px' }}>
      <h4 style={{ marginBottom: '10px' }}>Nearby Players</h4>
      {
        playerData.players.map(player => <div onClick={handleOnTarget} data-name={player.name} data-id={player.id} style={{ cursor: 'pointer' }}>{player.name}</div>)
      }
    </div>
  )
}

export default Players;
