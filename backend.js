var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anishka.loves.aakaash@gmail.com',
    pass: 'Iloveyou09202024'
  }
});

var mailOptions = {
  from: 'anishka.loves.aakaash@gmail.com',
  to: 'aak.jamad@gmail.com',
  subject: 'I love you',
  text: 'Hi baby, Anishka here. I just wanted to say I love you. Mmmmmmmmmmmwaa.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});