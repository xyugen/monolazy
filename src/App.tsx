import { Toaster, toast } from 'sonner';
import './App.css'
import DiceButton from './Components/DiceButton'
import { useEffect, useRef, useState } from 'react';
import { Trash } from './Assets';
import AlignmentButtons from './Components/AlignmentButtons';
import autoAnimate from '@formkit/auto-animate';

const App = () => {
  const diceNumbers: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  const [diceRolls, setDiceRolls] = useState<number[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent])
  
  const handleReroll = () => {
    if (diceRolls.length > 0) {
      toast.info('Re-rolled', {
        className: 'toast-reroll',
        position: 'bottom-center',
      })
      
      setDiceRolls([])
      setCheckedState([]); 
    } else {
      toast.warning('Already re-rolled!', {
        className: 'toast-reroll',
        position: 'bottom-center',
      })
    }
  }

  const handleDiceClick = (diceNumber: number) => {
    toast.info('Diced a ' + diceNumber + '!', {
      className: 'toast-dice',
      icon: '🎲',
      position: 'bottom-center',
    })

    setDiceRolls([...diceRolls, diceNumber])
    setCheckedState([...checkedState, false]);
  }

  const handleDicedChecked = (index: number) => {
    setCheckedState((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  }

  const handleClearButton = (index: number) => {
    toast.error('Cleared a ' + diceRolls[index] + '!', {
      className: 'toast-clear',
      position: 'bottom-center',
    })

    const newDiceRolls = diceRolls.filter((_, i) => i !== index)
    setDiceRolls(newDiceRolls)
    const newCheckedState = checkedState.filter((_, i) => i !== index);
    setCheckedState(newCheckedState);
  }

  const handleNextButton = () => {
    const uncheckedDiceIndex = checkedState.findIndex((checked) => !checked);
    if (uncheckedDiceIndex !== -1) {
      handleDicedChecked(uncheckedDiceIndex);
      console.log(checkedState)
      console.log(uncheckedDiceIndex)
    } else {
      toast.info('No more unchecked dice!', {
        className: 'toast-next',
        position: 'bottom-center',
      })
    }
  } 

  return (
    <div className='container'>
      <div className='header'>
        <h1>Monolazy</h1>
        <button className='reset-button' onClick={handleReroll}>RE-ROLL</button>
      </div>

      <div className='dice-options'>
        <div className='dice-button-container'>
          {diceNumbers.map((diceNumber) => (
            <DiceButton key={diceNumber} diceNumber={diceNumber} onClick={() => handleDiceClick(diceNumber)} />
          ))}
        </div>
        {diceRolls.length > 0 &&
          <>
            <button className='next-button' onClick={() => handleNextButton()}>Next</button>
            <p className='dice-total'>Total: {diceRolls.reduce((a, b) => a + b, 0)}</p>
          </>
        }
      </div>

      <div className='diced-list h-full' ref={parent}>
        {diceRolls.map((diceRoll, index) => (
          <div className='diced-number' key={index}>
            <div>
              <p className='diced-number-label'>{index + 1}.</p>
              <input name={'dice' + index} id={'dice' + index} type="checkbox" onChange={() => handleDicedChecked(index)} checked={checkedState[index]} />
              <label className='diced-label' htmlFor={'dice' + index} style={{ textDecoration: checkedState[index] ? 'line-through' : 'none' }}>{diceRoll}</label>
            </div>
            <button className='clear-button'><img src={Trash} alt="Trash" onClick={() => handleClearButton(index)} /></button>
          </div>
        ))
        }
      </div>
      <Toaster toastOptions={{
        unstyled: true,
        className: 'toast',
        duration: 1000,
      }} />

      <AlignmentButtons />
    </div>
  )
}

export default App