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
        console.log("=== BUSINESS EMAIL (Development Mode) ===");
        console.log("To:", emailTo);
        console.log("From:", emailFrom);
        console.log("BCC:", emailBcc || "None");
        console.log("Subject: New Enquiry - 365 Transfers Website");
        console.log("\n=== CUSTOMER EMAIL (Development Mode) ===");
        console.log("To:", email);
        console.log("Subject: Thank you for your enquiry - 365 Transfers");
        return NextResponse.json(
          { message: "Emails logged (development mode)" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

        // Create email content for business
        const emailSubject = `New Enquiry - 365 Transfers Website`;
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

        // Prepare email options for business
        const businessMailOptions: any = {
          from: `365 Transfers <${emailFrom}>`,
          to: emailTo,
          replyTo: email,
          subject: emailSubject,
          text: emailBody,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
              <div style="background: #001E73; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px;">New Enquiry</h1>
                <p style="color: #C2FE58; margin: 10px 0 0 0; font-size: 16px;">365 Transfers Website</p>
              </div>
              
              <div style="padding: 30px; background: #ffffff;">
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                  <h3 style="color: #001E73; margin-top: 0; font-size: 18px; border-bottom: 2px solid #C2FE58; padding-bottom: 10px;">Contact Details</h3>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name:</strong></td>
                      <td style="padding: 8px 0; color: #001E73;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                      <td style="padding: 8px 0; color: #001E73;"><a href="mailto:${email}" style="color: #001E73; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                      <td style="padding: 8px 0; color: #001E73;">${phone ? `<a href="tel:${phone}" style="color: #001E73; text-decoration: none;">${phone}</a>` : "Not provided"}</td>
                    </tr>
                  </table>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                  <h3 style="color: #001E73; margin-top: 0; font-size: 18px; border-bottom: 2px solid #C2FE58; padding-bottom: 10px;">Message</h3>
                  <p style="white-space: pre-wrap; color: #333; line-height: 1.6; margin: 0;">${message}</p>
                </div>
              </div>
              
              <div style="background: #f8f9fa; padding: 20px; border-top: 3px solid #001E73; text-align: center;">
                <p style="color: #666; font-size: 12px; margin: 0 0 10px 0;">This enquiry was submitted through the 365 Transfers website contact form.</p>
                <p style="color: #666; font-size: 11px; margin: 0;">
                  Website designed by <a href="https://www.saunders-simmons.co.uk" style="color: #001E73; text-decoration: none;"><strong>Saunders Simmons Ltd</strong></a>
                </p>
              </div>
            </div>
          `,
        };

        // Add BCC if configured
        if (emailBcc) {
          businessMailOptions.bcc = emailBcc;
        }

        // Create customer confirmation email
        const customerSubject = `Thank you for your enquiry - 365 Transfers`;
        const customerMailOptions: any = {
          from: `365 Transfers <${emailFrom}>`,
          to: email,
          subject: customerSubject,
          text: `
Thank you for contacting 365 Transfers.

We have received your enquiry and will get back to you as soon as possible.

If you require a taxi within the next 24 hours, we recommend calling us directly on 03333 355365 to ensure we can assist you promptly.

Your enquiry details:
Name: ${name}
Phone: ${phone || "Not provided"}

Message:
${message}

Best regards,
365 Transfers
03333 355365
          `.trim(),
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
              <div style="background: #001E73; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Thank You for Your Enquiry</h1>
                <p style="color: #C2FE58; margin: 10px 0 0 0; font-size: 16px;">365 Transfers</p>
              </div>
              
              <div style="padding: 30px; background: #ffffff;">
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Dear ${name},
                </p>
                
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Thank you for contacting <strong>365 Transfers</strong>. We have received your enquiry and will get back to you as soon as possible.
                </p>
                
                <div style="background: #fff3cd; border-left: 4px solid #C2FE58; padding: 15px; margin: 20px 0; border-radius: 4px;">
                  <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0;">
                    <strong>⚠️ Urgent Booking?</strong><br>
                    If you require a taxi within the next <strong>24 hours</strong>, we recommend calling us directly on <strong><a href="tel:03333355365" style="color: #001E73; text-decoration: none;">03333 355365</a></strong> to ensure we can assist you promptly.
                  </p>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
                  <h3 style="color: #001E73; margin-top: 0; font-size: 16px;">Your Enquiry Details</h3>
                  <p style="color: #666; font-size: 14px; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                  <p style="color: #666; font-size: 14px; margin: 5px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
                  <p style="color: #666; font-size: 14px; margin: 5px 0 0 0;"><strong>Message:</strong></p>
                  <p style="white-space: pre-wrap; color: #333; font-size: 14px; margin: 10px 0 0 0; padding: 10px; background: #ffffff; border-radius: 4px;">${message}</p>
                </div>
              </div>
              
              <div style="background: #001E73; padding: 25px; text-align: center; color: #ffffff;">
                <p style="margin: 0 0 10px 0; font-size: 16px;"><strong>365 Transfers</strong></p>
                <p style="margin: 0 0 10px 0; font-size: 14px;">Professional Taxi & Transfer Services</p>
                <p style="margin: 0; font-size: 14px;">
                  Phone: <a href="tel:03333355365" style="color: #C2FE58; text-decoration: none; font-weight: bold;">03333 355365</a>
                </p>
                <p style="margin: 15px 0 0 0; font-size: 12px; color: #C2FE58;">
                  Available 24/7, 365 days a year
                </p>
              </div>
            </div>
          `,
        };

        // Send both emails
        await Promise.all([
          transporter.sendMail(businessMailOptions),
          transporter.sendMail(customerMailOptions),
        ]);

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

