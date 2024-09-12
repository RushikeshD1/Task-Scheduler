const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config();

const transporter = nodemailer.createTransport(
    {
        host : "localhost",
        port : "1025",
        secure : false        
    }
)

const sendEmail = async () => {
    let mailOptions = {
        from: 'rushdhale@gemail.com',
        to: 'recipient@example.com',
        subject: 'Scheduled Email',
        text: 'This is a scheduled email sent every minute.'        
    }
    try{
        await transporter.sendMail(mailOptions)
        console.log('Email sent successfully.')
    }catch (err){
        console.error('error : ==> ', err)
    }
}

module.exports = sendEmail