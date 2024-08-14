const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee")


const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/employee"); //IF i want to connect locally
mongoose.connect("mongodb+srv://admin:admin@cluster0.dzvbe.mongodb.net/employee");

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    // console.log(form);

    try {
        const user = await EmployeeModel.findOne({ email })
        if (user) {
            if (user.password === password) {
                res.json('Login Successful')
            }
            else {
                res.json("Ghlat Password")
            }
        }
        else {
            res.json({ message: "User not found" })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});
app.post('/signup', (req, res) => {
    EmployeeModel.create(req.body) //data coming from frontend
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.listen(3000, () => console.log("Server is running"))