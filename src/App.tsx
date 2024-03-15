import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <h1>Monolazy</h1>
        <button className='reset-button'>RE-ROLL</button>
      </div>

      <div className='dice-button-container'>
        <button className='dice-button w-full'>1</button>
        <button className='dice-button w-full'>2</button>
        <button className='dice-button w-full'>3</button>
        <button className='dice-button w-full'>4</button>

        <button className='dice-button w-full'>5</button>
        <button className='dice-button w-full'>6</button>
        <button className='dice-button w-full'>7</button>
        <button className='dice-button w-full'>8</button>

        <button className='dice-button w-full'>8</button>
        <button className='dice-button w-full'>10</button>
        <button className='dice-button w-full'>11</button>
        <button className='dice-button w-full'>12</button>
      </div>

      <div className='list'>

      </div>
    </>
  )
}

export default App
