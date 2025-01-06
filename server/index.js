import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

// Middleware to parse JSON body
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/sendEmail', async (req, res) => {
    console.log(req.body);
    const { name, email, phone, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'prashantpal2468@gmail.com',
            pass: 'hqqekgjfxdgxcohy'
        }
    });
    if (!name || !message || !email || !phone) { return res.status(400).json({}) }
    if (phone.length != 10) { return res.status(401).json({}) }
    if (!email.endsWith(".com") || !email.split('@').length == 2) { return res.status(402).json({}) }
    console.log("verified");
    let mailOptions = {
        from: email,
        to: 'dhaval_p_shah@yahoo.com',
        subject: 'Contact Us',
        text: message + "\ncontact me: " + phone
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(400).json({});
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({});
        }
    });

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
