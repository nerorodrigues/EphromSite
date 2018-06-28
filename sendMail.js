var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: 'no-reply@talkprocess.com',
    pass: 'no-replyEphromDX125'
  }
});

function sendMail(text, html, subject) {
  var mailOptions = {
    from: 'TalkProcess <no-reply@talkprocess.com>', // sender address
    to: 'contato@talkprocess.com.br', // list of receivers
    subject: subject || 'do site Ephrom.com.br', // Subject line
    text: text,
    html: html
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
    }else{
      console.log('Message sent: ' + info.response);
    }
  });
}

module.exports = sendMail;
