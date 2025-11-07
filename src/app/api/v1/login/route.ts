import { APP_PAGES, APP_USER_DUMMY } from '@/config';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (username === APP_USER_DUMMY.username && password === APP_USER_DUMMY.password) {
    const res = NextResponse.json({
      message: 'Login successful',
      status: 'success',
      data: {
        token: 'authenticated',
      },
    });
    res.cookies.set('token', 'authenticated', { path: APP_PAGES.TOP });
    return res;
  }

  return NextResponse.json(
    { success: false, message: 'Invalid username or password' },
    { status: 401 },
  );
}
