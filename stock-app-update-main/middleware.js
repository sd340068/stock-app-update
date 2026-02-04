import { NextResponse } from 'next/server'

export function middleware(request) {
  const authHeader = request.headers.get('authorization')

  const USER = 'cnlselectronics'
  const PASS = 'BeckyStock'

  const validAuth =
    'Basic ' + Buffer.from(`${USER}:${PASS}`).toString('base64')

  if (authHeader !== validAuth) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Internal Site"',
      },
    })
  }

  return NextResponse.next()
}
