import { apiAddress } from '@/utils/variables';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function fetchPet(id: string) {
  const res = await fetch(`${apiAddress}/api/users/${id}`);
  if (!res.ok) return undefined;
  return res.json();
}

const Profile = async ({ params }: { params: { id: string } }) => {
  const me = await fetchPet(params.id);
  console.log({ me: me });
  if (!me) {
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
        <div className='min-h-[75vh] bg-secondaryBg rounded-lg shadow-md text-primaryText py-12 my-8 px-3 m-3 flex gap-11 flex-col md:mx-14 md:px-16 lg:mx-32 justify-center'>
          <div className='flex flex-col gap-3'>
            {/* TODO: Tips on hiw to get an effective add */}
            <div className='flex gap-2 flex-col items-center justify-center mb-9'>
              <div className='w-28 h-28 rounded-full border-solid border-2 border-secondary shadow-lg bg-primaryBg flex items-center justify-center'>
                {me?.image ? (
                  <Image
                    alt='profile picture'
                    src={me.image}
                    width={56}
                    height={56}
                    className='object-cover'
                  />
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    aria-checked
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-14 h-14'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                    />
                  </svg>
                )}
              </div>
              <p className='text-lg font-semibold'>{me.name}</p>
            </div>
            <Link
              href={`/dashboard/${me.id}/pets`}
              className='w-full p-3 bg-primaryBg rounded-lg hover:bg-secondaryBg hover:shadow hover:shadow-ctaColor transition-all hover:transition-all'>
              <p>My Adverts</p>
            </Link>
            <Link
              href={'#'}
              className='w-full p-3 bg-primaryBg rounded-lg hover:bg-secondaryBg hover:shadow hover:shadow-ctaColor transition-all hover:transition-all'>
              <p>Edit Profile</p>
            </Link>
            <Link
              href={'#'}
              className='w-full p-3 bg-primaryBg rounded-lg hover:bg-secondaryBg hover:shadow hover:shadow-ctaColor transition-all hover:transition-all'>
              <p>Notifications</p>
            </Link>
            <Link
              href={'#'}
              className='w-full p-3 bg-primaryBg rounded-lg hover:bg-secondaryBg hover:shadow hover:shadow-ctaColor transition-all hover:transition-all'>
              <p>Performance</p>
            </Link>
            <Link
              href={'#'}
              className='w-full p-3 bg-primaryBg rounded-lg hover:bg-secondaryBg hover:shadow hover:shadow-ctaColor transition-all hover:transition-all'>
              <p>Wallet</p>
            </Link>
            <Link
              href={'#'}
              className='w-full p-3 bg-primaryBg rounded-lg hover:bg-secondaryBg hover:shadow hover:shadow-ctaColor transition-all hover:transition-all'>
              <p>Transactions</p>
            </Link>
            {/* <button
              // onClick={signout}
              className='btn m-auto mt-11'>
              Log Out
            </button> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
