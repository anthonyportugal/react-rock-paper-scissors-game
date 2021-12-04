import React, { useContext } from 'react'
import { GameContext } from '../../context/DataContext'
import { IconWithAction } from '../Icon/Icon'
import './iconSelector.scss'

const IconSelector = () => {
  const { icons } = useContext(GameContext)

  return (
    <div className="iconSelector" >
      {icons.map((icon, index) => (
        <IconWithAction icon={icon} key={index} />
      ))}
    </div>
  )
}

export default IconSelector
