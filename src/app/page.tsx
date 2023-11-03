import Hero from '@/components/Hero';
import HomePetsCard from '@/components/petsCard.tsx/HomePetsCard';

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-30rem)] md:min-h-[calc(100vh-15rem)]min-h-screen'>
      <Hero />
      {/* <h2>Available Pets Looking for Mates</h2> */}
      <div className='flex flex-col md:flex-row gap-6 px-3 md:px-14 lg:px-32'>
        {/* <PetsFilter /> */}
        <HomePetsCard query={null} />
      </div>
    </main>
  );
}
