import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const VerticalProductCard = ({
  productName,
  location,
  id,
  img
}: {
  productName: string;
  location: string;
  id: string;
  img: string;
}) => {
  return (
    <Link
      href={`/pet/${id}`}
      className='shadow-md dark:shadow-[#8b5cf6] dark:shadow-sm rounded-md'>
      <div className='relative h-36'>
        <Image
          src={img}
          // placeholder='blur' TODO: add shimmer img for placeholder
          // width={250}
          // height={144}
          fill
          sizes='(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw'
          alt=''
          className='object-cover relative rounded-t-md h-36 w-full'
          priority
        />
      </div>
      <div className='h-[92px] bg-secondaryBg w-full flex flex-col px-2 justify-center gap-[1px] rounded-b-md'>
        <h5 className='line-clamp-2'>{productName}</h5>
        <p className='font-light text-xs'>{location}</p>
      </div>
    </Link>
  );
};

export default VerticalProductCard;
