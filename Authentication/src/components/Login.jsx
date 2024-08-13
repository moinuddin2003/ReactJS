import React, { useState } from 'react';

function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    return (
      <div className="container mx-auto flex justify-center items-center h-screen">
            <div className="bg-gray-200 w-1/2 shadow-md rounded  flex flex-col p-8">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <input type="email" id="email" placeholder="Email" className="border rounded p-2 mb-2" onChange={handleChange} value={form.email} />
                <input type="password" id="password" placeholder="Password" className="border rounded p-2 mb-2" onChange={handleChange} value={form.password} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </div>
        </div>
    )
}

export default Login;
