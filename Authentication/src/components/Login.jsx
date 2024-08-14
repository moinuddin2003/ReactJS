import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', form);
      console.log('Response: ', response.data);
      if (response.data === 'Login Successful'){
        navigate('/home');}   
    }
    catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-1/2 bg-gray-200 p-8 rounded">
        <h2 className="text-2xl font-bold mb-4">  </h2>
        <div className="mb-4"> 
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div className="mb-4"> 
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password"
            id="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={form.password}
          />
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 size-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          </div>
        <p>Don't have an account?</p>

        <Link to="/signup" className="flex items-center mt-10 justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 size-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
        </Link>
</form>

      </div>
  )
}

export default Login;
