export { default } from 'next-auth/middleware';
// import { migrate } from 'drizzle-orm/postgres-js/migrator';

// import { db } from './db/db.js';

// const mig = async () => {
//   migrate(db, { migrationsFolder: 'drizzle' });
// };
// mig();

export const config = {
  matcher: [
    // '/login',
    // '/register',
    // '/dashboard',
    // '/dashboard/:path*',
    // '/admin',
    // '/admin/:path*',
    // '/api/admin/:path*',
    // '/api/auth/logout',
    '/api/admin'
  ]
};
