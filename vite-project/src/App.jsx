import { useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5
  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
      // console.log("Clicked", counter);
    }
  }


  const removeValue = () => {
    if ( counter > 0) {
      setCounter(counter - 1)
      // console.log("Removed", counter);
    }
  }
  return (
    <>
      <h1>Chai or React</h1>
      <button>Counter Values: {counter}</button>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>

    </>
  )
}

export default App
