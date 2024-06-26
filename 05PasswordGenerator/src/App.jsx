import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState()

  //useRef hook

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*(){}[]"

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }


    setPassword(pass);
  }, [
    length, numberAllowed, characterAllowed, setPassword])


  const copyPasswordToCLipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99) 
    // COpy only the selected range
    window.navigator.clipboard.writeText(password);
  },
    [password])
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-6 mt-10 text-center text-white bg-gray-600'>Password Generator
      <div className='flex shadow rounded-lg overflow-hidden mt-4 mb-4' >
        <input type='text'
          value={password}
          className='outline-none text-orange-500 w-full  py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToCLipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex text-orange-500 items-center gap-x-1'>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label> Length: {length}</label>
        </div>
        <div className='flex text-orange-500 items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex text-orange-500 items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>

      </div>
    </div>
  )
}

export default App
