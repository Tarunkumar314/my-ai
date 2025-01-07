import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import { validateEmail } from './utils/emailValidator.js';
import { sendEmail } from './utils/sendMail.js';

const app = express();

app.use(cors());

// Middleware to parse JSON body
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/sendEmail', async (req, res) => {
    console.log(req.body);
    const { name, email, phone, message, noOfReports, tickerSymbols, mode } = req.body;

    // if (!name || !message || !email) { return res.status(400).json({}) }
    // if (phone?.length != 10) { return res.status(401).json({}) }
    // if (validateEmail(email) === false) { return res.status(403).json({}) }
    if (mode === "Contact Us") {
        if (!email || !name || !message || !validateEmail(email)) {
            res.status(400).json({ message: 'fields cannot be empty' })
        }
        const subject = `Contact Us Request from ${name}`;
        const mailMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        sendEmail(res, subject, mailMessage);
    } else if (mode === "Report Asked") {
        if (!email || !tickerSymbols) {
            res.status(400).json({ message: 'fields cannot be empty' })
        }
        const subject = "Report Demanded";
        const mailMessage = `Email: ${email}\nTicker Symbols: ${tickerSymbols}`;
        sendEmail(res, subject, mailMessage);
    }

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
