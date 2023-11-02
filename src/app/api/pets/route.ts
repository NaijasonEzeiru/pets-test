import { NextResponse } from 'next/server';
import { PetSchema } from '@/utils/schemas';
import { db } from '@/db/db';
import { pets, users, categories } from '@/db/schema/schema';
import { eq } from 'drizzle-orm';

export const GET = async () => {
  try {
    const allPets = await db.query.pets.findMany({ limit: 60 });
    if (!allPets)
      return new NextResponse(JSON.stringify({ message: 'No pet found' }), {
        status: 400
      });
    return new NextResponse(JSON.stringify(allPets), { status: 201 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ err, message: 'Something went wrong' }),
      {
        status: 500
      }
    );
  }
};

export const POST = async (request: Request, res: Response) => {
  // validate data
  const {
    age,
    breed,
    category,
    city,
    country,
    description,
    gender,
    imgs,
    petName,
    purebred,
    state,
    userEmail
  } = PetSchema.parse(await request.json());
  console.log('passed val');
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, userEmail));
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid user credential' }),
        {
          status: 401
        }
      );
    }
    console.log(user.id);
    let [pet] = await db
      .insert(pets)
      .values({
        age,
        breed,
        city,
        country,
        description,
        gender,
        imgs,
        petName,
        purebred,
        state,
        category,
        userId: user.id
      })
      .returning();
    if (pet) {
      return new NextResponse(JSON.stringify({ pet }), {
        status: 201
      });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ error, message: 'Something went wrong' }),
      {
        status: 500
      }
    );
  }
};

// Not releveant. Just for creating the categories beforehand.
export const PUT = async (request: Request, res: Response) => {
  console.log('passed val');
  try {
    let [cat] = await db.insert(categories).values({ name: 'Cat' }).returning();
    let [dog] = await db.insert(categories).values({ name: 'Dog' }).returning();
    if (cat) {
      return new NextResponse(JSON.stringify({ cat, dog }), {
        status: 201
      });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ error, message: 'Something went wrong' }),
      {
        status: 500
      }
    );
  }
};
