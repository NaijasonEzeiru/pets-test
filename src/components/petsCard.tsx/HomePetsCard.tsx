import { PetSchemaType } from '@/utils/schemas';
import VerticalProductCard from './VerticalPetsCard';
import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { ilike, or } from 'drizzle-orm';
import { pets } from '@/db/schema/schema';

async function fetchPets(q: string | null) {
  'use server';
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
}

const HomePetsCard = async ({ query }: { query: string | null }) => {
  // const data = query
  //   ? await fetch(`${apiAddress}/api/pets?q=${query}`, {
  //       cache: 'no-store'
  //     })
  //   : await fetch(`${apiAddress}/api/pets`, {
  //       cache: 'no-store'
  //     });

  const v = await fetchPets(query);
  const pets: PetSchemaType[] = await v.json();
  console.log(pets);

  // const pets: PetSchemaType[] = await data.json();
  // console.log(pets);
  if (pets.length) {
    return (
      <div className='pl-3 md:pl-6 w-full py-11 grid gap-x-3 md:gap-x-5 gap-y-4 md:gap-y-6 gtc grid-flow-row'>
        {pets.map((v) => (
          <VerticalProductCard
            key={v.id}
            id={v.id!}
            location={`${v.city}, ${v.state}`}
            productName={`${v.breed} ${v.purebred.toLocaleLowerCase()} (${
              v.age
            }) ${v.gender}`}
            img={v.imgs[0]}
          />
        ))}
      </div>
    );
  } else
    return (
      <p className='text-3xl text-center py-9'>No pet matches your query</p>
    );
};

export default HomePetsCard;
