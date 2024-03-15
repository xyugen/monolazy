import { Toaster, toast } from 'sonner';
import './App.css'
import DiceButton from './Components/DiceButton'
import { useState } from 'react';

const App = () => {
  const diceNumbers: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  const [diceRolls, setDiceRolls] = useState([]);
  
  const handleReroll = () => {
    toast.info('Re-rolled', {
      className: 'toast-reroll',
    })
  }

  const handleDiceClick = (diceNumber: number) => {
    toast.info('Diced a ' + diceNumber + '!', {
      className: 'toast-dice',
      icon: '🎲',
    })
  }

  return (
    <>
      <div className='header'>
        <h1>Monolazy</h1>
        <button className='reset-button' onClick={handleReroll}>RE-ROLL</button>
      </div>

      <div className='dice-button-container'>
        {diceNumbers.map((diceNumber) => (
          <DiceButton key={diceNumber} diceNumber={diceNumber} onClick={() => handleDiceClick(diceNumber)} />
        ))}
      </div>

      <div className='diced-list'>
        {diceRolls.map((diceRoll, index) => (
          <div className='diced-number' key={index}>
            <input name={'dice' + index} id={'dice' + index} type="checkbox" />
            <label htmlFor={'dice' + index}>{diceRoll}</label>
          </div>
        ))
        }
      </div>
      <Toaster toastOptions={{
        unstyled: true,
        className: 'toast',
      }} />
    </>
  )
}

export default App