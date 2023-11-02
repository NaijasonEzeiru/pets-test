import { NextResponse } from 'next/server';
import { db } from '@/db/db';

export const GET = async () => {
  try {
    const allUsers = await db.query.users.findMany();
    if (!allUsers)
      return new NextResponse(JSON.stringify({ message: 'No user found' }), {
        status: 400
      });
    return new NextResponse(JSON.stringify(allUsers), { status: 201 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ err, message: 'Something went wrong' }),
      {
        status: 500
      }
    );
  }
};
