import React from 'react'

const DiceButton = ({ diceNumber = 1 }: { diceNumber: number}, { onClick }: { onClick: () => void}) => {
  return (
    <button className='dice-button w-full' onClick={onClick}>{diceNumber}</button>
  )
}

export default DiceButton