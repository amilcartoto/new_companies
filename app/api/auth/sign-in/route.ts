import { NextResponse } from 'next/server';
import { generateToken } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const token = generateToken(email);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error('Error signing in:', error);
    return NextResponse.json({ error: 'Failed to sign in' }, { status: 500 });
  }
}
