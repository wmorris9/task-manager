const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'wm96n2@gmail.com',
        subject: `Welcome, ${name}`,
        text: `Welcome to the app, ${name}. Let us know how it works for you. If you have any questions or concerns, please let us know!`,
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'wm96n2@gmail.com',
        subject: `Goodbye ${name}`,
        text: `We are sorry to see you go! What should we have done better?`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}