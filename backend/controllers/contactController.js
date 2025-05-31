const nodemailer = require('nodemailer');

// Contact form email logic
exports.sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('Received contact form submission:', { name, email, subject, message });

  // Validate request body
  if (!name || !email || !message) {
    console.log('Missing required fields');
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide name, email and message' 
    });
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

    console.log('Attempting to send email...');

    // Email content
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

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully. I will get back to you soon!' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
}; 