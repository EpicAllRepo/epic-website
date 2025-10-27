import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter using env vars
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO,
      subject: `New Inquiry: ${subject} — ${name}`,
      text: `
        Hello Team,
            
        You have received a new inquiry from the website contact form.
            
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
            
        Message:
        ${message}
            
        Best regards,
        Your Website Mailer
          `,
      html: `
          <div style="font-family: Arial, sans-serif; background-color: #f8f9fb; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; padding: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
              <h2 style="color: #222; margin-bottom: 16px;">New Contact Form Submission</h2>
            
              <p style="font-size: 15px; color: #333;"><strong>Name:</strong> ${name}</p>
              <p style="font-size: 15px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
              <p style="font-size: 15px; color: #333;"><strong>Subject:</strong> ${subject}</p>
            
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            
              <p style="font-size: 15px; color: #333; line-height: 1.6;">${message.replace(
                /\n/g,
                "<br/>"
              )}</p>
          
              <hr style="border: 0; border-top: 1px solid #eee; margin: 24px 0;" />
          
              <p style="font-size: 13px; color: #888; text-align: center;">
                This message was sent from your website contact form.<br/>
                &copy; ${new Date().getFullYear()} Epic Global. All rights reserved.
              </p>
            </div>
          </div>
          `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error sending contact email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
