import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Handle POST requests
export async function POST(req: Request) {
  try {
    // Parse the request body
    const { from, message, name, subject } = await req.json();

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Blank Canvas Capital <mail@blankcanvascapital.co.za>',
      to: ['info@blankcanvascapital.co.za'],
      subject: 'New Submission from Blank Canvas Capital',
      text: `From: ${name} <${from}>\n\nMessage: ${message}`,
      react: EmailTemplate({ from, message, subject, name }),
    });

    // Return the result as a JSON response
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // Return the error as a JSON response with a 400 status
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
