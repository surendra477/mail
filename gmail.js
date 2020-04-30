//first of all to run this u should allow your mail to less secure app access in google
//link of it is https://myaccount.google.com/lesssecureapps
//you should install npm install nodemailer
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yourmail@gmail.com',//your mail
        pass: '123456789'   //your password
    }
});

var mailOptions = {
    from: 'yourmail@gmail.com',//your mail
    to: 'friendmail@gmail.com',//your password u can send to multiple by using , and another mail
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
