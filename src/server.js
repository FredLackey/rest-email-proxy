const $       = require('./config');
const express = require('express');
const smtp    = require('nodemailer');

const app = express();
app.use(express.json());

app.post($.base, (req, res) => {
  const { body } = req;
  const mailer = smtp.createTransport({
    host  : $.email.server.name,
    port  : $.email.server.port,
    secure  : (Number($.email.server.port) === 465),
    auth  : {
      user  : $.email.user.name,
      pass  : $.email.user.pass
    }
  });
  const message = {
    from    : `${$.email.from.name} <${$.email.from.email}>`,
    to      : `${$.email.to.name} <${$.email.to.email}>`,
    subject : `Received ${(new Date()).toISOString()}`,
    text    : JSON.stringify(body, null, $.format.indent)
  };
  mailer.sendMail(message, (err, info) => {
    const status = err ? 500 : 201;
    res.status(status).send();
  });
});

app.listen($.port, err => {
  if (err) { throw err; }
  console.log($.desc);
  console.log(`PORT: ${$.port}`);
});
