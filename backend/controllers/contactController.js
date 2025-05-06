const nodemailer = require('nodemailer');
const emailConfig = require('../utils/emailConfig');

// Controller for sending contact emails
exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Validate request body
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide name, email and message' 
    });
  }

  try {
    // Create email transporter
    const transporter = nodemailer.createTransport(emailConfig);

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email' 
    });
  }
}; 