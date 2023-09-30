import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import Cookies from 'js-cookie'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublicPath =
    path === '/account/create/login' ||
    path === '/account/create/register' ||
    path === '/'
  const token = request.cookies.get('token')?.value || ''
  // const token = Cookies.get('token') || ''

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/profile/profile', request.nextUrl))
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(
      new URL('/account/create/login', request.nextUrl),
    )
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/account/create/register',
    '/account/create/login',
    '/profile/profile',
    '/profile/pro',
    '/profile/addfood',
  ],
}