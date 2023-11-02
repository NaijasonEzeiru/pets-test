import Link from 'next/link';

const Hero = () => {
  return (
    <div className='bg-[url(/puppy-kitten-heart.png)] bg-contain lg:bg-auto bg-right bg-no-repeat'>
      <div className='px-3 md:px-14 md:py-24 lg:px-32 bg-[#00043ce0] lg:bg-[#00043c3d] w-full text-white h-full pb-16 pt-28 grd flex lg:items-center'>
        <div className='w-full lg:w-1/2 flex flex-col lg:gap-5 gap-3'>
          <h3 className='text-2xl text-left'>
            Welcome to PetsMatchUp - Where Furry Hearts Find Their Match.
          </h3>
          <p>
            Our mission is to bring together pets and their perfect companions
            in a tail-wagging, purr-fect partnership. Whether you&apos;re a
            proud pet parent seeking a playdate, a furry friend looking for
            love, or simply want to connect with fellow pet enthusiasts,
            you&apos;re in the right place.
          </p>
          <p>
            Join our vibrant community of pet lovers today and embark on a
            journey to discover your pet&apos;s ideal mate. Because when it
            comes to love and companionship, every pet deserves a happily ever
            after. Let&apos;s make those paw-sibilities come to life! 🐶❤️🐱
          </p>
          <Link href={'/pet'}>
            <button className='btn !m-0 w-max'>
              Find Mates{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'>
                <path
                  d='M9 5L16 12L9 19'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
