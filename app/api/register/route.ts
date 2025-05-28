import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Path to JSON file
    const filePath = path.join(dataDir, 'registrations.json');
    
    // Read existing data or create empty array
    let registrations = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      try {
        registrations = JSON.parse(fileContent);
      } catch (e) {
        // If file exists but is not valid JSON, start with empty array
        registrations = [];
      }
    }
    
    // Add new registration with timestamp
    const newRegistration = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    
    registrations.push(newRegistration);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Registration saved successfully' 
    });
  } catch (error) {
    console.error('Error saving registration:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save registration: ' + error }, 
      { status: 500 }
    );
  }
} 