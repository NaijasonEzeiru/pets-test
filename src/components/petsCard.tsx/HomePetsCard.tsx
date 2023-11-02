import { PetSchemaType } from '@/utils/schemas';
import VerticalProductCard from './VerticalPetsCard';
import { NextResponse } from 'next/server';
import { db } from '@/db/db';

async function fetchPets() {
  'use server';
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
}

const HomePetsCard = async () => {
  // const pets: PetSchemaType[] = await fetchPets();
  const v = await fetchPets();
  const pets: PetSchemaType[] = await v.json();
  console.log(pets);

  return (
    <div className='pl-3 md:pl-6 w-full py-11 grid gap-x-3 md:gap-x-5 gap-y-4 md:gap-y-6 gtc grid-flow-row'>
      {pets.map((v) => (
        <VerticalProductCard
          key={v.id}
          id={v.id!}
          location={`${v.city}, ${v.state}`}
          productName={`${v.breed} ${
            v.purebred == 'Yes' ? 'purebred' : 'mixed'
          } (${v.age}) ${v.gender}`}
          img={v.imgs[0]}
        />
      ))}
    </div>
  );
};

export default HomePetsCard;
