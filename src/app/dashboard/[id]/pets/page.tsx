import { notFound } from 'next/navigation';
import { type PetSchemaType } from '@/utils/schemas';
import { apiAddress } from '@/utils/variables';

async function fetchPet(id: string) {
  const res = await fetch(`${apiAddress}/api/users/${id}/pets`);
  if (!res.ok) return undefined;
  return res.json();
}

const PetDetails = async ({ params }: { params: { id: string } }) => {
  const { pets }: { pets: PetSchemaType[] | [] } = await fetchPet(params.id);

  if (!pets) {
    notFound();
  }

  return (
    <main>
      <header className='m-auto py-8 bg-secondaryBg pt-28 '>
        <h1 className='text-2xl font-semibold mb-4 md:text-center px-3 md:px-14 lg:px-32 text-center'>
          Your Pets
        </h1>
      </header>
      <div className='py-16 px-3 md:px-14 lg:px-32 flex flex-col gap-3'>
        {pets.length < 1 ? (
          <p>You have no uploaded pet</p>
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
