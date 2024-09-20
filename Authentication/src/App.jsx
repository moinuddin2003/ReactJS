import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Otp from './components/OtpVerification'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <h1 className='bg-green-500 text-black text-center  p-4 rounded-xl'>React Authentication</h1> */}
        <Route path="/signup" element={<Signup />} > </Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path = "/home" element = {<Home />}></Route>
        <Route path='/send-otp' element={<Otp />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
