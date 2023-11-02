import {
  InferInsertModel,
  InferSelectModel,
  relations,
  sql
} from 'drizzle-orm';
import {
  pgTable,
  text,
  varchar,
  timestamp,
  uuid,
  integer,
  primaryKey
} from 'drizzle-orm/pg-core';
import { AdapterAccount } from 'next-auth/adapters';

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .notNull()
    .default(sql`gen_random_uuid()`),
  name: varchar('name', { length: 120 }).notNull(),
  passwordHash: varchar('password_hash', { length: 120 }),
  email: varchar('email', { length: 120 }).notNull().unique(),
  emailVerified: timestamp('email_verified', { mode: 'date' }),
  image: text('image'),
  role: text('role', { enum: ['admin', 'user', 'moderator'] })
    .default('user')
    .notNull(),
  phone: varchar('phone', { length: 20 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

export const userRelations = relations(users, ({ many }) => ({
  pets: many(pets)
}));

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('type').notNull(),
    providerAccountId: text('provider_account_id').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state')
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId)
  })
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull()
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('indentifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull()
  },
  (vt) => ({ compoundKey: primaryKey(vt.identifier, vt.token) })
);

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

//   user_id     Int    @unique
//   user        User   @relation(fields: [user_id], references: [id])
// }

export const pets = pgTable('pet', {
  id: uuid('id').primaryKey().defaultRandom(),
  petName: varchar('pet_name', { length: 20 }).notNull(),
  country: varchar('country', { length: 20 }).notNull(),
  state: varchar('state', { length: 20 }).notNull(),
  breed: varchar('breed', { length: 30 }).notNull(),
  purebred: varchar('pure_bred', { length: 30 }).notNull(),
  age: varchar('age', { length: 20 }).notNull(),
  gender: varchar('gender', { length: 7 }).notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(), // update timestamp
  imgs: varchar('cloudinary_ids', { length: 120 })
    .array()
    .notNull()
    .$type<Array<string>>(), // array
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  category: text('category')
    .notNull()
    .references(() => categories.name),
  city: varchar('city', { length: 20 }).notNull()
});

export const petsRelations = relations(pets, ({ one }) => ({
  user: one(users, {
    fields: [pets.userId],
    references: [users.email]
  }),
  pets: one(categories, {
    fields: [pets.category],
    references: [categories.name]
  })
}));

export type Pet = InferSelectModel<typeof pets>;
export type NewPet = InferInsertModel<typeof pets>;

export const categories = pgTable('category', {
  name: text('name').primaryKey()
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(pets)
}));

export type Categories = InferSelectModel<typeof categories>;
export type NewCategories = InferInsertModel<typeof categories>;
