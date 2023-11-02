const { migrate } = require('drizzle-orm/postgres-js/migrator');
const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');
require('dotenv').config();

const sql = postgres(process.env.DATABASE_URL, { max: 1 });
const db = drizzle(sql);
const mig = async () => {
  await migrate(db, { migrationsFolder: 'drizzle' });
};
mig();
