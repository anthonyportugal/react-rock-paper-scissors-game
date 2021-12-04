import { createContext, useEffect, useRef, useState } from "react";

export const GameContext = createContext();

const icons = [
  { type: 'fas', name: 'fa-hand-rock', value: 'rock' },
  { type: 'fas', name: 'fa-hand-scissors', value: 'scissor' },
  { type: 'fas', name: 'fa-hand-paper', value: 'paper' },
]

export const DataProvider = ({ children }) => {
  const [handSelected, setHandSelected] = useState({})
  const [result, setResult] = useState([])
  const [resultMessage, setResultMessage] = useState('')

  const isMounted = useRef(false);

  const randomHand = () => {
    const randomPosition = Math.floor(Math.random() * icons.length)
    console.log(icons[randomPosition])
    setResultMessage(resultMessageLogic(icons[randomPosition].value))
    return icons[randomPosition]
  }

  useEffect(() => {
    if (isMounted.current) {
      setResult([handSelected, randomHand()])
      toggleResult()
      resultMessageLogic()
    } else {
      isMounted.current = true
    }
  }, [handSelected])

  const toggleResult = () => {
    document.getElementsByClassName('homePage__starting')[0].classList.toggle('hidden')
    document.getElementsByClassName('homePage__result')[0].classList.toggle('hidden')
  }

  const resultMessageLogic = (cpuHandSelected) => {
    if (handSelected?.value === 'rock' && cpuHandSelected === 'scissor') {
      return 'You Win!'
    } else if (handSelected?.value === 'paper' && cpuHandSelected === 'rock') {
      return 'You Win!'
    } else if (handSelected?.value === 'scissor' && cpuHandSelected === 'paper') {
      return 'You Win!'
    } else if (handSelected?.value === cpuHandSelected) {
      return 'Draw!'
    } else {
      return 'You Lose!'
    }
  }

  const playAgain = () => {
    isMounted.current = false
    setHandSelected({})
    toggleResult()
  }

  return (
    <GameContext.Provider
      value={{
        icons,
        randomHand,
        handSelected,
        setHandSelected,
        result,
        resultMessage,
        playAgain,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}