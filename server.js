const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Create a transporter for Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email service provider
    auth: {
        user: 'anishka.loves.aakaash@gmail.com', // Your email address
        pass: 'gahy ykch qsuq nlcr', // Your email password or app password
    },
});

// Define the email sending route
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    // Configure the email options
    const mailOptions = {
        from: 'anishka.loves.aakaash@gmail.com',
        to: 'aak.jamad@gmail.com',
        subject: 'I love you',
        text: 'Hi baby, Anishka here. I just wanted to say I love you. Mmmmmmmmmmmwaa.',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            return res.status(500).send('Error sending email.');
        }
        res.status(200).send('Email sent successfully!');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
