import { Toaster, toast } from 'sonner';
import './App.css'
import DiceButton from './Components/DiceButton'

const App = () => {
  const diceNumbers = Array.from({ length: 12 }, (_, index) => index + 1);
  
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

      <div className='list'>

      </div>
      <Toaster toastOptions={{
        unstyled: true,
        className: 'toast',
      }} />
    </>
  )
}

export default App