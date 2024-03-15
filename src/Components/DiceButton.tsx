const DiceButton = ({ diceNumber = 1, onClick }: { diceNumber: number, onClick: () => void }) => {
  return (
    <button className='dice-button w-full' onClick={onClick}>{diceNumber}</button>
  )
}

export default DiceButton