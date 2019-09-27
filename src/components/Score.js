import React, {useState, useEffect} from 'react'
import axios from '../helpers/axiosWithAuth';

const Score = ({ score }) => {
  const [scores, setScores] = useState([])

  useEffect(() => {
    const loadScores = async () => {
      try {
        const { data: { scores }} = await axios().get('https://team-o.herokuapp.com/api/adv/scores');
        if (scores) {
          setScores(scores)
        }
      } catch (error) {
        console.log(error)
      }
    }
    loadScores()
  }, [])

  return (
    <div className="score-wrapper">
      <div className="personal-score">Score: {score}</div>
        {
          scores.map(player => (
            <div className={`score ${player.name}`} key={player.name}>
              <span>{player.score}</span>
              <span>{player.name}</span>
            </div>
          ))
        }
    </div>
  )
}

export default Score;
