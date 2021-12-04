import React, { useContext } from 'react'
import { GameContext } from '../../context/DataContext'
import './icon.scss'

const IconWithAction = ({ icon }) => {
  const { setHandSelected } = useContext(GameContext)

  return (
    <div className="iconWithAction" onClick={() => setHandSelected(icon)}>
      <i className={`${icon.type} ${icon.name}`}></i>
    </div>
  )
}

const Icon = ({ icon }) => {
  return (
    <div className="icon" >
      <i className={`${icon.type} ${icon.name}`}></i>
    </div>
  )
}

Icon.defaultProps = {
  type: '',
  icon: '',
  value: ''
}

export { Icon, IconWithAction }
