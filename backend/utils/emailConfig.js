// Contact form email logic
const emailConfig = {
  service: 'gmail',  // Use Gmail service
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false // Only use this in development
  }
};

module.exports = emailConfig; 