const corn = require('node-cron');
const sendEmail = require('../emailSender/emailSender.js')

const task = () => {
    corn.schedule('* * * * *', async () => {
        try {
            await sendEmail()
            console.log('running a task every minute', new Date())  
        } catch (error) {
            console.error('Error sending email:', error)
        }              
    })
}

module.exports = { task }