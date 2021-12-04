import React, { useContext } from 'react'
import { GameContext } from '../../context/DataContext'
import { Icon } from '../Icon/Icon'
import './result.scss'

const Result = () => {
  const { result, resultMessage, playAgain } = useContext(GameContext)

  return (
    <div className="result">
      <div className="result__question">
        <h2>{resultMessage}</h2>
        <button onClick={playAgain}>Play again</button>
      </div>
      <div className="result__icons">
        {result?.map((item, index) => (
          <Icon icon={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Result
