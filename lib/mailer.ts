import nodemailer, { Transporter } from 'nodemailer';

const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export function sendConfirmationEmail(to: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Confirm your account',
    text: 'Please confirm your account by clicking the link below.',
    html: '<p>Please confirm your account by clicking the link below.</p>',
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
} 