import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <h1 className='bg-green-500 text-black text-center  p-4 rounded-xl'>React Authentication</h1> */}
        <Route path="/signup" element={<Signup />} > </Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
