const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }
    
    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in database
    // 3. Maybe integrate with a CRM
    
    console.log('Contact form submission:', { name, email, message });
    
    // Simulate processing delay
    setTimeout(() => {
      res.status(200).json({ 
        success: true, 
        message: 'Your message has been received. We will contact you soon!' 
      });
    }, 1000);
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 