import React, {useState, useEffect} from 'react'
import axios from '../helpers/axiosWithAuth';

const Score = (props) => {
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
      <div className="personal-score">Score: {props.score}</div>
        {
          scores.map(score => (
            <div className={`score ${score.name}`} key={score.name}>
              <span>{score.score}</span>
              <span>{score.name}</span>
            </div>
          ))
        }
    </div>
  )
}

export default Score;
