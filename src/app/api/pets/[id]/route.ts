import { NextResponse } from 'next/server';
import { db } from '@/db/db';

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    // const [pet] = await db.select().from(pets).where(eq(pets.id, params.id))
    const pet = await db.query.pets.findFirst({
      where: (pets, { eq }) => eq(pets.id, params.id)
    });
    if (!pet)
      new NextResponse(JSON.stringify({ message: 'User not found' }), {
        status: 400
      });
    return new NextResponse(JSON.stringify(pet), { status: 201 });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ err, message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};

// export const DELETE = async (request: Request) => {
//   const req = await request.json();
//   try {
//     const [pet] = await db.delete(pets).where(eq(pets.id, req.id)).returning();
//     for (let i = 0; i < pet.imgs.length; i++) {
//       await cloudinary.uploader.destroy('user.cloudinary_id{imageName}');
//     }
//     return new NextResponse(
//       JSON.stringify({
//         message: 'The product has been deleted successfully'
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error(error);
//     return new NextResponse(JSON.stringify({ message: 'Operation failed' }), {
//       status: 500
//     });
//   }
// };

// export const PUT = async (request: Request, response: Response) => {
//   const req = await request.json();
//   const { ...all } = req.body;
//   try {
//     const [updatedUser] = await db
//       .update(pets)
//       .set({ all })
//       .where(eq(pets.id, req.params.id))
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
