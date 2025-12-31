import { useState } from 'react'

const DiceRoller = () => {
  const [value, setValue] = useState(1)

  const rollDice = () => {
    setValue(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <div>
      <button onClick={rollDice}>Roll Dice</button>
      <img src={`./dice/face${value}.png`} alt="" />
      <p>Dice: {value}</p>
    </div>
  )
}

export default DiceRoller
