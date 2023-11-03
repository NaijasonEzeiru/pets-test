import PetsFilter from '@/components/PetsFilter';
import HomePetsCard from '@/components/petsCard.tsx/HomePetsCard';

const AllPets = ({
  searchParams
}: {
  searchParams?: { [key: string]: string };
}) => {
  const q = searchParams?.q ?? null;
  return (
    <main className='min-h-[calc(100vh-30rem)] md:min-h-[calc(100vh-15rem)]min-h-[calc(100vh-476px)] md:min-h-[calc(100vh-16rem)]'>
      <header className='m-auto py-8 bg-secondaryBg pt-28 '>
        <h1 className='text-2xl font-semibold mb-4 md:text-center text-center'>
          All Pets
        </h1>
      </header>
      <div className='flex flex-col md:flex-row gap-6 px-3 md:px-14 lg:px-32'>
        <PetsFilter />
        <HomePetsCard query={q} />
      </div>
    </main>
  );
};

export default AllPets;
