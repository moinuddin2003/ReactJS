import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter+1);
    console.log('Add', counter+1);
    
    
  }
  const removeValue = ()=>
  {
    setCounter(counter - 1)
    console.log('Removed', counter);
  }

  return (
    <>
  <h1>Chai or Babu</h1>
  <h2>Counter Value: {counter} </h2>

  <button onClick = {addValue}>Add Value</button>
  <br/>
  <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App
