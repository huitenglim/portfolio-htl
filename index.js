//const functions = require('firebase-functions');
// Importing dependencies
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup route
let router = express.Router();
app.use('/api', router);

// Allow cross origin requests
const cors = require('cors')({ origin: true });
app.use(cors);

router.get('/', function (req, res) {
    res.json({ message: 'API is working!' });
});

router.post('/sendEmail', function (req, res) {
    let email = req.body.email;
    let name = req.body.name;
    let message = `
        <h3>You have a new contact request</h3>
        <h4>Contact Details</h4>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Message:</p>
        <p>${req.body.message}</p>
    `;

    var transporter = nodemailer.createTransport({
        host: process.env.mailhost, //'smtp.gmail.com'
        port: process.env.mailport, //587
        secure: true,
        auth: {
            user: process.env.mailuser, //'youremail@gmail.com',
            pass: process.env.maillpassword //'yourpassword'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: `${process.env.USER} <${process.env.USER}>`, // Can't use Sender address because you are using ur own gmail
        to: 'huiteng1995@gmail.com', // List of receivers
        subject: `Contact Request from ${req.body.email}`, // Subject line
        text: message, // Plain text body
        html: message // Html body
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.status(400).send({ code: -1, message: 'error has occur', reason: error })
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.json({ message: "sending email to " + name + " at " + email });
    });
});

// Test port
app.listen(port);
console.log('Magic happens on port ' + port);

// exports.api = functions.https.onRequest(app)
