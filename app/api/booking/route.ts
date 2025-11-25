import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      businessName,
      contactNumber,
      email,
      pickupLocation,
      destination,
      pickupDate,
      pickupTime,
      passengers,
      vehicleType,
      specialRequirements,
    } = body;

    // Validate required fields
    if (
      !name ||
      !contactNumber ||
      !email ||
      !pickupLocation ||
      !destination ||
      !pickupDate ||
      !pickupTime ||
      !passengers
    ) {
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
        console.log("=== BOOKING REQUEST (Development Mode) ===");
        console.log("To:", emailTo);
        console.log("From:", emailFrom);
        console.log("BCC:", emailBcc || "None");
        console.log("Subject: New Booking Request - 365 Transfers");
        return NextResponse.json(
          { message: "Booking request logged (development mode)" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Format date and time
    const formattedDate = new Date(pickupDate).toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: parseInt(emailPort),
      secure: emailPort === "465",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Business email
    const businessSubject = `New Booking Request - ${formattedDate} ${pickupTime}`;
    const businessMailOptions: any = {
      from: `365 Transfers <${emailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: businessSubject,
      text: `
New booking request from 365 Transfers website:

CONTACT INFORMATION:
Name: ${name}
${businessName ? `Business Name: ${businessName}` : ""}
Email: ${email}
Phone: ${contactNumber}

JOURNEY DETAILS:
Pick Up Location: ${pickupLocation}
Destination: ${destination}
Date: ${formattedDate}
Time: ${pickupTime}

VEHICLE & PASSENGERS:
Number of Passengers: ${passengers}
${vehicleType ? `Preferred Vehicle: ${vehicleType}` : ""}
${specialRequirements ? `Special Requirements: ${specialRequirements}` : ""}

---
This is a booking request. Please contact the customer to confirm availability.
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #001E73; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">New Booking Request</h1>
            <p style="color: #C2FE58; margin: 10px 0 0 0; font-size: 16px;">365 Transfers Website</p>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #001E73; margin-top: 0; font-size: 18px; border-bottom: 2px solid #C2FE58; padding-bottom: 10px;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;">${name}</td>
                </tr>
                ${businessName ? `<tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Business:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;">${businessName}</td>
                </tr>` : ""}
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;"><a href="mailto:${email}" style="color: #001E73; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;"><a href="tel:${contactNumber}" style="color: #001E73; text-decoration: none;">${contactNumber}</a></td>
                </tr>
              </table>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #001E73; margin-top: 0; font-size: 18px; border-bottom: 2px solid #C2FE58; padding-bottom: 10px;">Journey Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Pick Up:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;">${pickupLocation}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Destination:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;">${destination}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Date:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;"><strong>${formattedDate}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Time:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;"><strong>${pickupTime}</strong></td>
                </tr>
              </table>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #001E73; margin-top: 0; font-size: 18px; border-bottom: 2px solid #C2FE58; padding-bottom: 10px;">Vehicle & Passengers</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Passengers:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;">${passengers}</td>
                </tr>
                ${vehicleType ? `<tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Vehicle Type:</strong></td>
                  <td style="padding: 8px 0; color: #001E73;">${vehicleType}</td>
                </tr>` : ""}
              </table>
            </div>
            
            ${specialRequirements ? `<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #001E73; margin-top: 0; font-size: 18px; border-bottom: 2px solid #C2FE58; padding-bottom: 10px;">Special Requirements</h3>
              <p style="white-space: pre-wrap; color: #333; line-height: 1.6; margin: 0;">${specialRequirements}</p>
            </div>` : ""}
            
            <div style="background: #fff3cd; border-left: 4px solid #C2FE58; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <p style="color: #333; font-size: 14px; margin: 0;">
                <strong>⚠️ Action Required:</strong> This is a booking request. Please contact the customer to confirm availability and finalise the booking.
              </p>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-top: 3px solid #001E73; text-align: center;">
            <p style="color: #666; font-size: 12px; margin: 0 0 10px 0;">This booking request was submitted through the 365 Transfers website.</p>
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

    // Customer confirmation email
    const customerSubject = `Booking Request Received - 365 Transfers`;
    const customerMailOptions: any = {
      from: `365 Transfers <${emailFrom}>`,
      to: email,
      subject: customerSubject,
      text: `
Thank you for your booking request with 365 Transfers.

We have received your booking request and will contact you within 24 hours to confirm availability and finalise your booking.

If you require a taxi within the next 24 hours, we recommend calling us directly on 01785 335563 to ensure we can assist you promptly.

Your booking request details:
Name: ${name}
${businessName ? `Business: ${businessName}` : ""}
Phone: ${contactNumber}

Journey:
From: ${pickupLocation}
To: ${destination}
Date: ${formattedDate}
Time: ${pickupTime}
Passengers: ${passengers}
${vehicleType ? `Vehicle: ${vehicleType}` : ""}

Best regards,
365 Transfers
01785 335563
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #001E73; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Booking Request Received</h1>
            <p style="color: #C2FE58; margin: 10px 0 0 0; font-size: 16px;">365 Transfers</p>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Dear ${name},
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for your booking request with <strong>365 Transfers</strong>. We have received your request and will contact you within <strong>24 hours</strong> to confirm availability and finalise your booking.
            </p>
            
            <div style="background: #fff3cd; border-left: 4px solid #C2FE58; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0;">
                <strong>⚠️ Urgent Booking?</strong><br>
                If you require a taxi within the next <strong>24 hours</strong>, we recommend calling us directly on <strong><a href="tel:01785335563" style="color: #001E73; text-decoration: none;">01785 335563</a></strong> to ensure we can assist you promptly.
              </p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <h3 style="color: #001E73; margin-top: 0; font-size: 16px;">Your Booking Request Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 5px 0; color: #666; width: 120px;"><strong>From:</strong></td>
                  <td style="padding: 5px 0; color: #333;">${pickupLocation}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #666;"><strong>To:</strong></td>
                  <td style="padding: 5px 0; color: #333;">${destination}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #666;"><strong>Date:</strong></td>
                  <td style="padding: 5px 0; color: #333;"><strong>${formattedDate}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #666;"><strong>Time:</strong></td>
                  <td style="padding: 5px 0; color: #333;"><strong>${pickupTime}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #666;"><strong>Passengers:</strong></td>
                  <td style="padding: 5px 0; color: #333;">${passengers}</td>
                </tr>
                ${vehicleType ? `<tr>
                  <td style="padding: 5px 0; color: #666;"><strong>Vehicle:</strong></td>
                  <td style="padding: 5px 0; color: #333;">${vehicleType}</td>
                </tr>` : ""}
              </table>
            </div>
          </div>
          
          <div style="background: #001E73; padding: 25px; text-align: center; color: #ffffff;">
            <p style="margin: 0 0 10px 0; font-size: 16px;"><strong>365 Transfers</strong></p>
            <p style="margin: 0 0 10px 0; font-size: 14px;">Professional Taxi & Transfer Services</p>
            <p style="margin: 0; font-size: 14px;">
              Phone: <a href="tel:01785335563" style="color: #C2FE58; text-decoration: none; font-weight: bold;">01785 335563</a>
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
      { message: "Booking request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing booking request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

