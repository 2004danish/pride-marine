import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, inquiryType, message } = body;

    // Set up the Nodemailer transporter with Zoho's SMTP details
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in', // Zoho India server
      port: 465,
      secure: true, 
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    });

    // Construct the email content
    const mailOptions = {
      from: process.env.ZOHO_EMAIL, 
      to: process.env.ZOHO_EMAIL,   
      replyTo: email,               
      subject: `New Website Inquiry: ${inquiryType} from ${firstName} ${lastName}`,
      html: `
        <h2 style="color: #ea580c;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}