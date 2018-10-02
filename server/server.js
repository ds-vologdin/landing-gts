const express = require('express');
var cors = require('cors');
const account = require('./setting_mail_private.js');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
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

const app = express();
app.use(express.json());

const whitelist = [
    'http://192.168.128.43:8080',
];
const corsOptions = {
    origin: function(origin, callback){
        const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

app.post('/landing/message/', function(request, response){
  console.log(request.body);
  mailOptions.text = 'Перезвоните сюда: ' + request.body.phone;
  mailOptions.subject += request.body.landing;
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        response.status(500);
        response.send('FAIL');
        console.log(error);
    }
  });
  response.status(200);
  response.send('OK');
});

app.listen(3000);
console.log('is ready...');
