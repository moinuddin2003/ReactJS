const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require('nodemailer');
const EmployeeModel = require("./models/Employee");
const OtpModel = require("./models/otp");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB (using your MongoDB connection string)
mongoose.connect("mongodb+srv://admin:admin@cluster0.dzvbe.mongodb.net/employee");

// Function to send OTP via email
async function sendOtpEmail(email, otp) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',  // Replace with your email
            pass: 'your-email-password',   // Replace with your email password or app password
        },
    });

    let mailOptions = {
        from: 'your-email@gmail.com',  // Replace with your email
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}. It is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);
}

// Signup Route
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await EmployeeModel.create({ name: username, email, password });
        const otp = Math.floor(1000 + Math.random() * 9000).toString();

        user.otp = otp;
        user.otpCreatedAt = new Date();
        await user.save();

        await sendOtpEmail(user.email, otp);
        res.json({ message: "Signup successful, OTP sent to your email" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to signup" });
    }
});

// OTP Verification Route
app.post('/verify-otp', async (req, res) => {
    const { otp } = req.body;
    const user = await EmployeeModel.findOne({ otp });

    if (user) {
        // Check if OTP is still valid (e.g., within 10 minutes)
        const timeDiff = (new Date() - new Date(user.otpCreatedAt)) / (1000 * 60);
        if (timeDiff <= 10) {
            user.otp = null;  // Clear OTP after successful verification
            user.otpCreatedAt = null;
            await user.save();
            res.json("OTP Verified");
        } else {
            res.json("OTP Expired");
        }
    } else {
        res.json("Invalid OTP");
    }
});

// Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await EmployeeModel.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.json('Login Successful');
            } else {
                res.json("Incorrect Password");
            }
        } else {
            res.json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

app.listen(3001, () => console.log("Server is running"));
