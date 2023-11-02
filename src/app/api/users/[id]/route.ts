import { users } from '@/db/schema/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { db } from '@/db/db';

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const [user] = await db.select().from(users).where(eq(users.id, params.id));
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

// export const updateUser = async (req: Request, res: Response) => {
//   if (req.body.password) {
//     req.body.password = CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASSWORD_SECRET!
//     ).toString();
//   }
//   const { ...all } = req.body;
//   console.log(all);
//   try {
//     const [updatedUser] = await db
//       .update(users)
//       .set({})
//       .where(eq(users.id, req.params.id))
//       .returning({});
//     res.status(201).json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ err, message: 'Operation failed' });
//   }
// };

// export const UPDATE = async (request: Request, response: Response) => {
//   const req = await request.json();
//   const { ...all } = req.body;
//   try {
//     const [updatedUser] = await db
//       .update(users)
//       .set({ all })
//       .where(eq(users.id, req.params.id))
//       .returning({});
//     return new NextResponse(JSON.stringify(updatedUser), {
//       status: 200
//     });
//   } catch (err) {
//     return new NextResponse(JSON.stringify({ message: 'Operation failed' }), {
//       status: 500
//     });
//   }
// };
