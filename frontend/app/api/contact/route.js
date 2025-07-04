// app/api/contact/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message, subject } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill out name, email, and message.' },
        { status: 400 }
      );
    }

    // Debug log: incoming data
    console.log('🔵 Received contact submission:', { name, email, subject, message });

    // Create transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Mail options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Portfolio Contact${subject ? `: ${subject}` : ''} from ${name}`,
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

    // Debug log: before send
    console.log('🔵 Sending email with:', {
      user: process.env.SMTP_USER,
      recipient: process.env.RECIPIENT_EMAIL
    });

    const info = await transporter.sendMail(mailOptions);

    // Debug log: after send
    console.log('🟢 Mail sent successfully:', info.messageId);

    return NextResponse.json(
      { success: true, message: 'Your message has been sent! I will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Contact API error:', error);

    return NextResponse.json(
      { success: false, message: 'An error occurred while sending your message.' },
      { status: 500 }
    );
  }
}
