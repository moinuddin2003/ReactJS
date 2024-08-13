import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Signup() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signup', form);
            console.log('Response: ', response.data);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-1/2 bg-gray-200 p-8 rounded">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input type="text" id="username" name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={form.username} />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={form.email} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={form.password} />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 size-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
                </div>

                <p>Already have an account?</p>

                <Link to="/login" className="flex items-center mt-10 justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 size-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                </Link>
            </form>
        </div>
    )
}

export default Signup;




























