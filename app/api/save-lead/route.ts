import { NextRequest, NextResponse } from 'next/server';

const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzEuQpOkqPOigIAwU9i_msxrR7csTdlvxH2H_PRRBZRt88KBK6uem0e4VaemymlQ6uuuw/exec';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const lead = body.lead;
    if (!lead) {
      return NextResponse.json({ error: 'Missing lead data' }, { status: 400 });
    }

    const row = Object.entries(lead).flat();
    const response = await fetch(SHEET_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ row })
    });

    const raw = await response.text();
    let result;

    try {
      result = JSON.parse(raw);
    } catch (e) {
      return NextResponse.json({ error: 'Non-JSON response from script', body: raw }, { status: 500 });
    }

    if (!response.ok || !result.success) {
      return NextResponse.json({ error: 'Script error', details: result }, { status: 500 });
    }
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ error: 'Internal server error', details: error }, { status: 500 });
  }
}
