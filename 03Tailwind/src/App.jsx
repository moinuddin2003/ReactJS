import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Checking tailwind is working or not</h1>
      <Card userName = "MoinBhai" btn = "PRHO" />
      <Card userName= "Or jani How are you" />
    </>
  )
}

export default App
