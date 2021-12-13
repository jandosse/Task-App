const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'sa.zhandos@gmail.com',
    subject: 'Thanks for joining',
    text: `Welcome, ${name}, to the app. Let me know how you get with the app`,
  });
};

const cancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'sa.zhandos@gmail.com',
    subject: "Don't go",
    text: `Good bye, ${name}. Just go and take survey up`,
  });
};

module.exports = {
  sendWelcomeEmail,
  cancellationEmail,
};

// sgMail.send({
//   to: 'sa.zhandos@gmail.com',
//   from: 'sa.zhandos@gmail.com',
//   subject: 'This is Send GRID zhandos',
//   text: 'I hope you know me ))))',
// });
