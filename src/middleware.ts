// import { getToken } from 'next-auth/jwt';
// import { NextRequest, NextResponse } from 'next/server';
// import { getServerSession } from 'next-auth/next';
// import { options } from './app/api/auth/[...nextauth]/options';

// export default async function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname;

//   if (path === '/') {
//     return NextResponse.next();
//   }

//   console.log(req);
//   //   const serve = await getServerSession(options);
//   //   console.log({ serve });

//   const session = await getToken({
//     req,
// secret: process.env.NEXTAUTH_SECRET,
//     cookieName: 'next-auth.session-token'
//   });
//   console.log({ session });

//   const isProtected = path.includes('/dashboard') || path === '/pet/new-pet';

//   if (!session && isProtected) {
//     return NextResponse.redirect(
//       new URL(
//         `/auth/login?alert=You are not logged in&callbackUrl=${path}`,
//         req.url
//       )
//     );
//   } else if (session && (path === '/auth/login' || path === '/auth/register')) {
//     return NextResponse.redirect(
//       new URL('/?alert=You are already logged in', req.url)
//     );
//   }
//   return NextResponse.next();
// }

export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    // '/login',
    // '/register',
    '/dashboard',
    '/dashboard/:path*',
    // '/dashboard/*',
    // '/admin',
    // '/admin/:path*',
    // '/api/admin/:path*',
    // '/api/auth/logout',
    '/api/admin',
    '/pet/new-pet'
  ]
};
