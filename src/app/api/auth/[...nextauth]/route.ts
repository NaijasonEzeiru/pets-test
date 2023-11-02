import NextAuth from 'next-auth';
import CryptoJS from 'crypto-js';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/db/db';
import { eq } from 'drizzle-orm';
import { users } from '@/db/schema/schema';

const handler = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        console.log('authorise');
        console.log({ credentials: credentials });
        console.log({ req: req });
        if (!credentials?.email || !credentials.password) {
          console.log('no credentials');
          return null;
        } else {
          try {
            console.log('try block');
            const [user] = await db
              .select()
              .from(users)
              .where(eq(users.email, credentials.email.toLowerCase()));
            if (!user) {
              // new NextResponse(
              //   JSON.stringify({
              //     emailError: 'This email address is not registered'
              //   }),
              //   {
              //     status: 401
              //   }
              // );
              return null;
            }
            const { passwordHash, ...rest } = user;
            const unhashedPassword = CryptoJS.AES.decrypt(
              passwordHash!,
              process.env.PASSWORD_SECRET!
            ).toString(CryptoJS.enc.Utf8);
            if (credentials.password !== unhashedPassword) {
              // new NextResponse(
              //   JSON.stringify({ passwordError: 'This password is incorrect' }),
              //   {
              //     status: 401
              //   }
              // );

              return null;
            } else {
              console.log('apt!');
              return user;
            }
          } catch (err) {
            console.error(err);
            // new NextResponse(JSON.stringify(err), {
            //   status: 500
            // });
            return null;
          }
        }
      }
    })
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    // jwt({ token, account, user }) {
    //   if (account) {
    //     token.accessToken = account.access_token;
    //     token.id = user?.id;
    //   }
    //   return token;
    // }
    session: ({ session, token }) => ({
      ...session,
      user: { ...session.user, id: token.sub }
      // session.user.id = token.id;
      // return session;
    })
  }
});

export { handler as GET, handler as POST };
