const express = require('express');
const account = require('./setting_mail_private.js');

const app = express();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: account.host,
    port: account.port,
    auth: {
        user: account.user,
        pass: account.pass
    }
});

let mailOptions = {
    from: 'learning.courses@mail.ru',
    to: 'ds.vologdin@yandex.ru',
    subject: 'Заявка с лендинга: ',
    text: 'Hello world?',
};

app.use(express.json());

app.post('/landing/message/', function(request, response){
  console.log(request.body);
  mailOptions.text = 'Перезвоните сюда: ' + request.body.phone;
  mailOptions.subject += request.body.landing;
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        response.send('FAIL');
        console.log(error);
    }
  });
  response.send('OK');
});

app.listen(3000);
console.log('is ready...');
