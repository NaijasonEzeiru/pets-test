import type { Config } from 'drizzle-kit';
import 'dotenv/config';

console.log(process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing');
}

export default {
  schema: './src/db/schema/*',
  breakpoints: false,
  driver: 'pg',
  out: './drizzle',
  dbCredentials: { connectionString: process.env.DATABASE_URL! }
} satisfies Config;
