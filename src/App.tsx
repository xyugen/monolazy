import './App.css'
import DiceButton from './Components/DiceButton'

const App = () => {
  const diceNumbers = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <>
      <div className='header'>
        <h1>Monolazy</h1>
        <button className='reset-button'>RE-ROLL</button>
      </div>

      <div className='dice-button-container'>
        {diceNumbers.map((diceNumber) => (
          <DiceButton key={diceNumber} diceNumber={diceNumber} />
        ))}
      </div>

      <div className='list'>

      </div>
    </>
  )
}

export default App