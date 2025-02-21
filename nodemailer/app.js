// Require necessary modules
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // To parse form data
const otpGenerator = require('otp-generator');

// Initialize Express app
const app = express();
app.set('view engine','ejs')
// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route to render the email form
app.get('/email', (req, res) => {
    res.render('email')
});

// Route to handle form submission
app.post('/email', (req, res) => {
    // Get the email address from the form
    const email = req.body.email; // Assuming your input field has name="email"

    // Create a Nodemailer transporter using SMTP
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Your SMTP host
        port: 587, // Your SMTP port
        secure: false, // Set to true if using SSL
        auth: {
            user: 'panchalshivang938@gmail.com', // Your email address
            pass: 'tjsp hepl uxlz ygpb' // Your email password or app password
        }
    });

    // Mail options

    // const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
    // console.log('Generated OTP:', otp);
    function generateNumericOTP(length) {
        const charset = '0123456789';
        let OTP = '';
        for (let i = 0; i < length; i++) {
          OTP += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return OTP;
      }
      
      // Generate a 6-digit numeric OTP
      const numericOTP = generateNumericOTP(6);
      console.log('Generated Numeric OTP:', numericOTP);
    let mailOptions = {
        from: 'panchalshivang938@gmail.com', // Sender address
        to: email, // List of recipients
        subject: 'Test Email', // Subject line
        text: `This is a test email sent from Nodemailer! Your Otp is: ${numericOTP}` // Plain text body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error occurred, email not sent.'); // Handle error
        } else {
            console.log('Email sent: ' + info.response);
           
            res.send('Email sent successfully!'); // Send response
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});