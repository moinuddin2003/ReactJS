import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OtpVerification() {
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/verify-otp', { otp });
            if (response.data === 'OTP Verified') {
                navigate('/login');  // Redirect to login page after successful OTP verification
            } else {
                setErrorMessage(response.data);
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setErrorMessage('Server error, please try again later.');
        }
    };

    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-1/2 bg-gray-200 p-8 rounded">
                <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
                <div className="mb-4">
                    <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">Enter OTP</label>
                    <input
                        type="text"
                        id="otp"
                        name="otp"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={otp}
                    />
                </div>
                {errorMessage && (
                    <div className="text-red-500 text-sm mb-4">
                        {errorMessage}
                    </div>
                )}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Verify OTP
                    </button>
                </div>
            </form>
        </div>
    );
}

export default OtpVerification;
