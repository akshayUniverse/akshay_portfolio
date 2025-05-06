"use client";

import { useState } from 'react';

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Submission status
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, message: null }
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, message: data.message }
        });
        
        // Clear form fields
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, message: null }
          });
        }, 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
      
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, message: error.message || "An error occurred. Please try again later." }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name field */}
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your name"
        />
      </div>
      
      {/* Email field */}
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your email address"
        />
      </div>
      
      {/* Message field */}
      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your message"
        />
      </div>
      
      {/* Submit button */}
      <button
        type="submit"
        disabled={status.submitting}
        className="w-full rounded-2xl bg-blue-600 text-white font-semibold py-4 px-8 shadow-md transition-all hover:bg-blue-700 hover:shadow-lg disabled:opacity-50"
      >
        {status.submitting ? 'Sending...' : 'Send Message'}
      </button>
      
      {/* Status message */}
      {status.info.message && (
        <div 
          className={`mt-4 p-4 rounded-lg ${
            status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}
        >
          {status.info.message}
        </div>
      )}
    </form>
  );
} 