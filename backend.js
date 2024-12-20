var nodemailer = require('nodemailer');
const app = express();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anishka.loves.aakaash@gmail.com',
    pass: 'gahy ykch qsuq nlcr'
  }
});

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
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
})