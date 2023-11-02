import { users } from '@/db/schema/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { db } from '@/db/db';

export const POST = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    // const [user] = await db.select().from(users).where(eq(users.id, params.id));
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, params.id),
      columns: { phone: true }
    });
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid user credential' }),
        {
          status: 401
        }
      );
    }
    return new NextResponse(JSON.stringify(user), { status: 201 });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ err, message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
