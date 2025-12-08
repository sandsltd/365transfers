import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handle GET method (Twilio sometimes uses GET for webhooks)
export async function GET(request: Request) {
  console.log('Twilio webhook GET request received');
  
  const url = new URL(request.url);
  const params = url.searchParams;
  
  if (params.get('CallSid')) {
    return handleTwilioCall(params);
  }
  
  return NextResponse.json({ 
    message: 'Twilio webhook endpoint is active',
    timestamp: new Date().toISOString()
  });
}

// Handle POST method (Twilio's default)
export async function POST(request: Request) {
  console.log('Twilio webhook POST request received');
  
  try {
    const bodyText = await request.text();
    const params = new URLSearchParams(bodyText);
    console.log('POST data received:', Object.fromEntries(params.entries()));
    
    return handleTwilioCall(params);

  } catch (error) {
    console.error('Error processing Twilio webhook:', error);
    
    const errorTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Say voice="alice">We're experiencing technical difficulties. Please try again later.</Say>
</Response>`;

    return new NextResponse(errorTwiml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  }
}

// Main function to handle calls
async function handleTwilioCall(params: URLSearchParams) {
  // Extract call information
  const callSid = params.get('CallSid');
  const from = params.get('From') || params.get('Caller');
  const to = params.get('To') || params.get('Called');
  const callStatus = params.get('CallStatus');
  const direction = params.get('Direction');
  
  console.log('Twilio webhook received:', {
    callSid,
    from,
    to,
    callStatus,
    direction
  });

  // Send email notification (non-blocking)
  try {
    await sendCallNotification({
      callSid: callSid as string,
      from: from as string,
      to: to as string,
      callStatus: callStatus as string,
      direction: direction as string,
      timestamp: new Date().toISOString()
    });
  } catch (emailError) {
    console.error('Email notification failed, but continuing with call:', emailError);
  }

  // Forward to the 365 Transfers number
  const FORWARD_TO_NUMBER = '+447432205615';
  
  // Enhanced TwiML response with audio message to caller and whisper to agent
  const whisperUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.365transfers.co.uk'}/api/twilio/whisper`;
  const audioUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.365transfers.co.uk'}/audio/365transfers_greeting.mp3`;
  
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Play>${audioUrl}</Play>
    <Dial callerId="${from || '+441785335563'}" timeout="60" answerOnBridge="true">
        <Number url="${whisperUrl}">${FORWARD_TO_NUMBER}</Number>
    </Dial>
</Response>`;

  console.log('Forwarding call to:', FORWARD_TO_NUMBER);
  
  return new NextResponse(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  });
}

// Email notification function
async function sendCallNotification(callData: {
  callSid: string;
  from: string;
  to: string;
  callStatus: string;
  direction: string;
  timestamp: string;
}) {
  try {
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the notification message
    const message = `
Call Notification - 365 Transfers
==============================

Call Details:
- Call ID: ${callData.callSid}
- From: ${callData.from}
- To: ${callData.to}
- Status: ${callData.callStatus}
- Direction: ${callData.direction}
- Time: ${new Date(callData.timestamp).toLocaleString('en-GB', {
    timeZone: 'Europe/London',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })}

This is an automated notification from your 365 Transfers call forwarding system.
    `;

    // Send email - using TWILIO_EMAIL_TO for Twilio notifications
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.TWILIO_EMAIL_TO || process.env.EMAIL_TO, // Use TWILIO_EMAIL_TO if set, fallback to EMAIL_TO
      subject: `365 Transfers - Incoming Call from ${callData.from}`,
      text: message,
    });

    console.log('Call notification email sent successfully');
  } catch (error) {
    console.error('Error sending call notification email:', error);
  }
}