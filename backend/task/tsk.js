const cron = require('node-cron');
const sendEmail = require('../emailSender/emailSender.js')
const TaskLog = require("../model/model.js")

cron.schedule('* * * * *', async () => {
    try {
        await sendEmail()
        await TaskLog.create(
            { 
                taskName: 'Send Email',
                status: 'Success' 
            })
        console.log('Email sent and logged successfully.');
    } catch (error) {
        await TaskLog.create(
            {
                taskName: 'Send Email',
                status: 'Failed' 
            }
        )
        console.error('Error sending email:', error);
    }
})

