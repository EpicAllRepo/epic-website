import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, website, email, phone, budget, startDate } = body;

    // Validation
    if (!email || !phone) {
      return NextResponse.json(
        { error: "Email and phone number are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Epic Global Website" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO,
      subject: `New Review Budget Request — ${name || "Anonymous"}`,
      text: `
New Quote Request

Name: ${name || "N/A"}
Website: ${website || "N/A"}
Email: ${email}
Phone: ${phone}
Budget: ${budget || "N/A"}
Best Start Date: ${startDate || "N/A"}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f8f9fb; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.07);">
            
            <div style="background: #CC0000; padding: 20px 24px;">
              <h2 style="color: white; margin: 0; font-size: 20px;">New Quote Request</h2>
            </div>

            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; width: 140px;">Name</td>
                  <td style="padding: 10px 0;">${name || "N/A"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold;">Website</td>
                  <td style="padding: 10px 0;">${website || "N/A"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold;">Email</td>
                  <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #CC0000;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold;">Phone</td>
                  <td style="padding: 10px 0;">${phone}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold;">Budget</td>
                  <td style="padding: 10px 0;">${budget || "N/A"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold;">Best Start Date</td>
                  <td style="padding: 10px 0;">${startDate || "N/A"}</td>
                </tr>
              </table>
            </div>

            <div style="padding: 16px 24px; background: #f8f9fb; text-align: center;">
              <p style="font-size: 12px; color: #aaa; margin: 0;">
                Sent from Epic Global website · &copy; ${new Date().getFullYear()} Epic Global
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Review budget form error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again later." },
      { status: 500 }
    );
  }
}