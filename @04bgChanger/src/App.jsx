import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>


          <button onClick={() => setColor("red")} className='shadow-lg rounded-full outline-none text-white px-4 py-1'
            style={{ backgroundColor: 'red' }}
          >Red</button>

          <button onClick={() => setColor("orange")} className='shadow-lg rounded-full outline-none text-white px-4 py-1'
            style={{ backgroundColor: 'orange' }}
          >Orange</button>

          <button onClick={() => setColor("Yellow")} className='shadow-lg rounded-full outline-none text-white px-4 py-1'
            style={{ backgroundColor: 'yellow' }}
          >Yellow</button>

          <button onClick={() => setColor("green")} className='shadow-lg rounded-full  text-white px-4 py-1'
            style={{ backgroundColor: 'Green' }}
          >Green</button>

          <button onClick={() => setColor("blue")} className='shadow-lg rounded-full outline-none text-white px-4 py-1'
            style={{ backgroundColor: 'blue' }}
          >Blue</button>

          <button onClick={() => setColor("Violet")} className='shadow-lg rounded-full outline-none text-white px-4 py-1'
            style={{ backgroundColor: 'violet' }}
          >Violet</button>

          <button onClick={() => setColor("indigo")} className='shadow-lg rounded-full outline-none text-white px-4 py-1'
            style={{ backgroundColor: 'indigo' }}
          >Indigo</button>
        </div>
      </div>
    </div>
  )
}
export default App
