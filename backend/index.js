const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');


// Load environment variables
dotenv.config();

// Verify required environment variables
const requiredEnvVars = ['SMTP_USER', 'SMTP_PASSWORD', 'RECIPIENT_EMAIL'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  process.exit(1);
}

console.log('Environment variables loaded successfully');
console.log('SMTP User:', process.env.SMTP_USER);
console.log('Recipient Email:', process.env.RECIPIENT_EMAIL);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
