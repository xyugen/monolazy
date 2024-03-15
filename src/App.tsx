import { Toaster, toast } from 'sonner';
import './App.css'
import DiceButton from './Components/DiceButton'
import { useState } from 'react';

const App = () => {
  const diceNumbers: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  const [diceRolls, setDiceRolls] = useState<number[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(diceNumbers.length).fill(false));
  
  const handleReroll = () => {
    if (diceRolls.length > 0) {
      toast.info('Re-rolled', {
        className: 'toast-reroll',
      })
      
      setDiceRolls([])
      setCheckedState(new Array(diceNumbers.length).fill(false)); 
    } else {
      toast.warning('Already re-rolled!', {
        className: 'toast-reroll',
      })
    }
  }

  const handleDiceClick = (diceNumber: number) => {
    toast.info('Diced a ' + diceNumber + '!', {
      className: 'toast-dice',
      icon: '🎲',
    })

    setDiceRolls([...diceRolls, diceNumber])
  }

  const handleDicedChecked = (index: number) => {
    setCheckedState((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
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

      <div className='diced-list h-full'>
        {diceRolls.map((diceRoll, index) => (
          <div className='diced-number' key={index}>
            <div>
              <input name={'dice' + index} id={'dice' + index} type="checkbox" onChange={() => handleDicedChecked(index)} />
              <label htmlFor={'dice' + index} style={{ textDecoration: checkedState[index] ? 'line-through' : 'none' }}>{diceRoll}</label>
            </div>
            
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