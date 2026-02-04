import { NextResponse } from 'next/server'

// Get the password from the environment variable
const PASSWORD = process.env.BeckyStock
const USERNAME = 'cnlselectronics' // You can keep this static

export function middleware(req) {
  const authHeader = req.headers.get('authorization')

  const validAuth = 'Basic ' + Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64')

  // If no auth or wrong auth, prompt for login
  if (!authHeader || authHeader !== validAuth) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Internal Site"',
      },
    })
  }

  // Allow access
  return NextResponse.next()
}

// Apply middleware to all paths
export const config = {
  matcher: '/:path*',
}
