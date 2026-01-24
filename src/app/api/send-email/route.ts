import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
console.log("[API Route Start] RESEND_API_KEY from env:", process.env.RESEND_API_KEY); // Initial check
const resend = new Resend(process.env.RESEND_API_KEY);

// Your email address where you want to receive contact form submissions
const TO_EMAIL = 'afrozsatvilkar2014@gmail.com'; 
// The email address emails will be sent from. 
// IMPORTANT: This email MUST be a verified domain in your Resend account.
// For initial testing, Resend might allow `onboarding@resend.dev`, but for production, verify your own domain.
const FROM_EMAIL = 'onboarding@resend.dev'; // Replace with your verified domain email like 'noreply@yourdomain.com'

export async function POST(request: NextRequest) {
  console.log("[POST Request] RESEND_API_KEY from env:", process.env.RESEND_API_KEY); // Check on request
  try {
    // Parse the request body to get form data
    const { name, email, subject, message } = await request.json();

    if (!process.env.RESEND_API_KEY) {
      console.error('CRITICAL: RESEND_API_KEY is not defined in the environment.');
      return NextResponse.json({ error: 'API Key is missing in server configuration.' }, { status: 500 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${FROM_EMAIL}>`, // Sender name and email
      to: [TO_EMAIL], // Your email address
      replyTo: email, // Corrected: Set the sender's email as replyTo for easy response
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; border: 1px solid #eee; padding: 10px; border-radius: 5px;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
          <p style="font-size: 0.9em; color: #777;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Error sending email', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

  } catch (err) {
    console.error('Server Error:', err);
    // Check if err is an instance of Error to safely access err.message
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
} 