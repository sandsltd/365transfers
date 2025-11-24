import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = process.env.EMAIL_PORT;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO;
    const emailFrom = process.env.EMAIL_FROM || emailUser;
    const emailBcc = process.env.EMAIL_BCC;

    if (!emailHost || !emailPort || !emailUser || !emailPass || !emailTo) {
      console.error("Email configuration missing");
      // In development, log the email instead of failing
      if (process.env.NODE_ENV === "development") {
        const emailSubject = `New Contact Form Submission from ${name}`;
        const emailBody = `
New contact form submission from 365 Transfers website:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
This message was sent from the 365 Transfers contact form.
        `.trim();
        console.log("Email would be sent:");
        console.log("To:", emailTo);
        console.log("From:", emailFrom);
        console.log("BCC:", emailBcc || "None");
        console.log("Subject:", emailSubject);
        console.log("Body:", emailBody);
        return NextResponse.json(
          { message: "Email logged (development mode)" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailBody = `
New contact form submission from 365 Transfers website:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
This message was sent from the 365 Transfers contact form.
    `.trim();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: parseInt(emailPort),
      secure: emailPort === "465", // Port 465 requires secure connection
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Prepare email options
    const mailOptions: any = {
      from: `365 Transfers <${emailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001E73;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <div style="margin-top: 20px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">This message was sent from the 365 Transfers contact form.</p>
        </div>
      `,
    };

    // Add BCC if configured
    if (emailBcc) {
      mailOptions.bcc = emailBcc;
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

