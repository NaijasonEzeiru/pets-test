'use client';

import { useState } from 'react';

export function HeaderAndTextAccordions({
  header,
  text
}: {
  header: string;
  text: string;
}) {
  const [showText, setShowText] = useState(false);
  return (
    <div className='py-4 md:py-7 px-3 hover:bg-secondaryBg rounded-xl'>
      <button
        className='flex justify-between w-full text-left mb-2 md:mb-5 items-baseline gap-2'
        onClick={() => {
          setShowText(!showText);
        }}>
        <h3 className='text-xl max-w-[79vw] font-semibold mt-3'>{header}</h3>{' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='15'
          viewBox='0 0 26 15'
          className={`${!showText && 'rotate-180'} transition-all w-6 block`}
          fill='none'>
          <path
            d='M1.33329 13.1899L13 1.52328L24.6666 13.1899'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <div
        className={`grid transition-all ${
          showText ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}>
        <p className='overflow-hidden max-h-full' aria-hidden={showText}>
          {text}
        </p>
      </div>
    </div>
  );
}
