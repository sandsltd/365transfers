import { NextResponse } from 'next/server';

// This endpoint handles the "whisper" - the message played to the client when they answer
export async function POST(request: Request) {
  try {
    const bodyText = await request.text();
    const params = new URLSearchParams(bodyText);
    
    console.log('Whisper endpoint called:', Object.fromEntries(params.entries()));
    
    // TwiML to deliver message to the client before connecting the caller
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Say voice="alice">Incoming call from Saunders Simmons website.</Say>
</Response>`;

    console.log('Sending whisper message');
    
    return new NextResponse(twiml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });

  } catch (error) {
    console.error('Error in whisper endpoint:', error);
    
    // Fallback to text-to-speech if audio file fails
    const fallbackTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Say voice="alice">Incoming call from Saunders Simmons website.</Say>
</Response>`;

    return new NextResponse(fallbackTwiml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  }
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Twilio whisper endpoint is active',
    timestamp: new Date().toISOString()
  });
}