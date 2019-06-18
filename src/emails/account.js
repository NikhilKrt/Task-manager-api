const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nkk544@gmail.com',
        subject: 'Welcome to Task Manager',
        text: `Welcome to the app, ${name}. Let us know how you get along with the app.`
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nkk544@gmail.com',
        subject: 'Sorry to see you go..',
        text: `Goodbye, ${name}. We hope to see you back sometome soon.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}