const mongoose = require('mongoose')

const taskLogSchema = new mongoose.Schema({
    taskName: String,
    status: String,
    timestamp: { 
        type: Date, 
        default: Date.now
    }
});

const taskSchema = mongoose.model('user', taskLogSchema)

module.exports = taskSchema