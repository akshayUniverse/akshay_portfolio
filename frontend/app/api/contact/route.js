export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate the data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Please fill out all fields' 
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // In a real app, here you would:
    // 1. Send email using a service like SendGrid or Mailgun
    // 2. Save to database
    // 3. Forward to a CRM or ticketing system
    
    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, message });
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully! We will get back to you soon.' 
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
  } catch (error) {
    console.error('Contact API error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'An error occurred while sending your message.' 
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 