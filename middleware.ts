import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
const url = process.env.NEXTAUTH_URL
console.log(url)
export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL(`${url}/crm`, req.url))
    }
    return NextResponse.next()
  },
  { 
    callbacks: {
      authorized: ({ token }) => !!token
    },
    pages: {
      signIn: '/auth/login',
    },
  }
)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth).*)']
}
