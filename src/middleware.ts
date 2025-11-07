import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { APP_PAGES } from './config';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl;

  const isLoginPage = pathname === APP_PAGES.LOGIN;
  const isProtected =
    pathname === APP_PAGES.TOP ||
    pathname.startsWith(APP_PAGES.COLUMN) ||
    pathname.startsWith(APP_PAGES.MY_RECORD);

  // If not logged in, block access to protected pages
  if (!token && isProtected) {
    return NextResponse.redirect(new URL(APP_PAGES.LOGIN, req.url));
  }

  // If logged in, block access to login page
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL(APP_PAGES.TOP, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/column/:path*', '/my-record/:path*'],
};
