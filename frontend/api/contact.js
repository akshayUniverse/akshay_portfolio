// api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate request body
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide name, email and message' });
  }

  try {
    // Create email transporter with Gmail configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Portfolio Contact: ${subject || 'New Message'} from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
}
