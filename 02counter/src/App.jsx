import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter);
      console.log('Add', counter);
    }
    else {
      alert('Limit reached')
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log('Removed', counter);
    }
    else {
      alert('You are now at 0 and not allowed to go below 0')
    }
  }

  return (
    <>
      <h1>Chai or Babu</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App
