import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import {
  checkAdminCredentials,
  createSessionToken
} from '../../../../lib/admin-auth';

export async function POST(request) {
  try {
    const body = await request.json();

    const email = String(body.email || '').trim();
    const password = String(body.password || '');

    const valid = checkAdminCredentials(email, password);

    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = createSessionToken();

    const cookieStore = await cookies();

    cookieStore.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 8
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Admin login error:', error);

    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
