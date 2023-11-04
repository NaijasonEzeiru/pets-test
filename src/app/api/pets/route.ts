import { NextResponse } from 'next/server';
import { PetSchema } from '@/utils/schemas';
import { db } from '@/db/db';
import { pets, users, categories } from '@/db/schema/schema';
import { eq, ilike, or } from 'drizzle-orm';

export const GET = async (request: Request, { nextUrl }: { nextUrl: any }) => {
  console.log(request);
  const q = nextUrl?.searchParams?.get('q') || null;
  console.log({ q });
  try {
    const allPets = !q
      ? await db.query.pets.findMany({ limit: 60 })
      : await db.query.pets.findMany({
          where: or(
            ilike(pets.breed, `%${q}%`),
            ilike(pets.purebred, `%${q}%`),
            ilike(pets.age, `%${q}%`),
            ilike(pets.gender, `%${q}%`),
            ilike(pets.category, `%${q}%`)
          ),
          limit: 60
        });
    if (!allPets)
      return new NextResponse(JSON.stringify({ message: 'No pet found' }), {
        status: 401
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
    userId
  } = PetSchema.parse(await request.json());
  console.log('passed val');
  try {
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
        userId: userId!
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
