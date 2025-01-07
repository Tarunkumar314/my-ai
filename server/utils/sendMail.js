import nodemailer from 'nodemailer';
export const sendEmail = async (res, subject, message)=>{
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: 'prashantpal2468@gmail.com',
                pass: 'hqqekgjfxdgxcohy'
            }
        });
        let mailOptions = {
            // from: email,
            to: 'tk1692074@gmail.com',
            subject: subject,
            text: message
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: 'Email sent successfully' });
            }
        });
    } catch (error) {
        console.log("error catched : ",error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}