const express = require('express')
const cornTask = require('./corn/cornTask.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const task = require('./task/tsk.js')
const routers = require('./router/router.js')
const emailSender = require('./emailSender/emailSender.js')

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use('/tasks', routers);

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.log("Error connecting Mongo DB", err))

app.get('/', (req, res) => {    
    res.send("working")
})

cornTask.task()

app.listen(10000, () => {
    console.log("Server running at port 10000")    
})