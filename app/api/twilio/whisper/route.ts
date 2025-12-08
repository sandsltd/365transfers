import { NextResponse } from 'next/server';

// This endpoint handles the "whisper" - the message played to the receiver when they answer
export async function POST() {
  console.log('Whisper endpoint called');
  
  // Play audio file to the receiver
  const audioUrl = 'https://taxisstone.co.uk/audio/whisper_receiver.mp3';
  
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Play>${audioUrl}</Play>
</Response>`;

  console.log('Playing whisper audio to receiver:', audioUrl);
  
  return new NextResponse(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

// Handle GET requests (Twilio sometimes uses GET)
export async function GET() {
  console.log('Whisper endpoint GET request');
  
  // Play audio file to the receiver
  const audioUrl = 'https://taxisstone.co.uk/audio/whisper_receiver.mp3';
  
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Play>${audioUrl}</Play>
</Response>`;
  
  return new NextResponse(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}