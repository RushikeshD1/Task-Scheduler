const express = require('express')
const TaskLog = require('../model/model.js')

const router = express.Router()

router.get('/logs', async (req, res) => {
    try {
        const logs = await TaskLog.find();
        res.json(logs);
    } catch (error) {
        res.status(500).send('Server Error');
    }
})

router.post('/', (req, res) => {
    const { taskName, taskFrequency } = req.body    
    res.send(`Task "${taskName}" scheduled with frequency "${taskFrequency}"`)
})

module.exports = router