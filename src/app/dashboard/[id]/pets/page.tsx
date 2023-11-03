import { notFound } from 'next/navigation';
import { type PetSchemaType } from '@/utils/schemas';
import { apiAddress } from '@/utils/variables';

async function fetchPet(id: string) {
  const res = await fetch(`${apiAddress}/api/users/${id}/pets`, {
    cache: 'no-store'
  });
  if (!res.ok) return undefined;
  return res.json();
}

const PetDetails = async ({ params }: { params: { id: string } }) => {
  // const { pets }: { pets: PetSchemaType[] | [] } = await fetchPet(params.id);
  const user = await fetchPet(params.id);

  if (!user) {
    notFound();
  }

  const { pets }: { pets: PetSchemaType[] | [] } = user;

  return (
    <main className='min-h-[calc(100vh-30rem)] md:min-h-[calc(100vh-15rem)]'>
      <header className='m-auto py-8 bg-secondaryBg pt-28 '>
        <h1 className='text-2xl font-semibold mb-4 md:text-center px-3 md:px-14 lg:px-32 text-center'>
          Your Pets
        </h1>
      </header>
      <div className='py-16 px-3 md:px-14 lg:px-32 flex flex-col gap-3'>
        {pets.length < 1 ? (
          <p className='text-center text-3xl'>You have no uploaded pet</p>
        ) : (
          pets.map((v) => (
            <p key={v.id} className='text-3xl'>
              {v.petName}
            </p>
          ))
        )}
      </div>
    </main>
  );
};

export default PetDetails;
