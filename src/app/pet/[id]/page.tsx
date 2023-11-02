import { ImgCarousel } from '@/components/helpers/ImgCarousel';
import { notFound } from 'next/navigation';
import { FaRegClock } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { type PetSchemaType } from '@/utils/schemas';
import ShowContact from '@/components/ShowContact';
import { apiAddress } from '@/utils/variables';

async function fetchPet(id: string) {
  const res = await fetch(`${apiAddress}/api/pets/${id}`);
  if (!res.ok) return undefined;
  return res.json();
}

const PetDetails = async ({ params }: { params: { id: string } }) => {
  const pet: PetSchemaType = await fetchPet(params.id);

  if (!pet) {
    notFound();
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const postedDate = new Date(pet.updatedAt!);
  const v = postedDate.getTime();
  const w = new Date().getTime();
  const daysAgo = Math.round((w - v) / oneDay);
  console.log(daysAgo);

  return (
    <main>
      <header className='m-auto py-8 bg-secondaryBg pt-28 '>
        <h1 className='text-2xl font-semibold mb-4 md:text-center px-3 md:px-14 lg:px-32'>
          {`${pet.breed} ${pet.purebred == 'Yes' ? 'purebred' : 'mixed'} (${
            pet.age
          }) ${pet.gender}`}
          ... Ready for mating
        </h1>
      </header>
      <div className='py-16 px-3 md:px-14 lg:px-32 flex flex-col gap-3'>
        <ImgCarousel imgs={pet.imgs} />
        <span className='flex flex-wrap justify-between gap-x-14 opacity-70'>
          <span className='flex items-center gap-1'>
            <FaRegClock />{' '}
            <i> Posted {daysAgo > 0 ? `${daysAgo} days ago` : 'today'}</i>
          </span>
          <span className='flex items-center gap-1'>
            <IoLocationOutline />{' '}
            <i>{`${pet.city}, ${pet.state}, ${pet.country}`}</i>
          </span>
        </span>
        <hr className='opacity-60' />
        <div className='flex flex-wrap gap-3 justify-between'>
          <span className='min-w-[45%] md:min-w-[30%]'>
            <h6 className='font-bold opacity-80'>Name:</h6> <p>{pet.petName}</p>
          </span>
          <span className='min-w-[45%] md:min-w-[30%]'>
            <h6 className='font-bold opacity-80'>Breed:</h6> <p>{pet.breed}</p>
          </span>
          <span className='min-w-[45%] md:min-w-[30%]'>
            <h6 className='font-bold opacity-80'>Age:</h6> <p>{pet.age}</p>
          </span>
          <span className='min-w-[45%] md:min-w-[30%]'>
            <h6 className='font-bold opacity-80'>Gender:</h6>{' '}
            <p>{pet.gender}</p>
          </span>
          <span className='min-w-[45%] md:min-w-[30%]'>
            <h6 className='font-bold opacity-80'>Weight:</h6>{' '}
            {/* <p>{pet.weight}</p> */}
            <p>50kg</p>
          </span>
          <span className='min-w-[45%] md:min-w-[30%]'>
            <h6 className='font-bold opacity-80'>Purebred:</h6>{' '}
            <p>{pet.purebred}</p>
          </span>
          <hr className='opacity-60 w-full' />
          <span className='w-full'>
            <h6 className='font-bold opacity-80'>Details:</h6>{' '}
            <p>{pet.description}</p>
          </span>
          <span className='w-full flex gap-2'>
            {/* <button className='px-4 py-2 bg-ctaColor rounded-lg text-white'>
              Show Contact
            </button> */}
            <ShowContact userId={pet.userId!} />
            {/* <h5 className='font-bold opacity-80'>Owner&apos;s Contact:</h5>
            <a href='tel:+2348053662673'>+2348053662673</a> */}
          </span>
        </div>
      </div>
    </main>
  );
};

export default PetDetails;
