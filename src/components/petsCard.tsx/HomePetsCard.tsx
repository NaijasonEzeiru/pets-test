import { PetSchemaType } from '@/utils/schemas';
import VerticalProductCard from './VerticalPetsCard';
import { apiAddress } from '@/utils/variables';

const HomePetsCard = async ({ query }: { query: string | null }) => {
  const data = query
    ? await fetch(`${apiAddress}/api/pets?q=${query}`, {
        cache: 'no-store'
      })
    : await fetch(`${apiAddress}/api/pets`, {
        cache: 'no-store'
      });
  const pets: PetSchemaType[] = await data.json();
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
