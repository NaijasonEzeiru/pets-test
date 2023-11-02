import Link from 'next/link';
import { useState } from 'react';

const Dropdown = ({
  value,
  content,
  tab
}: {
  value: string;
  content: string[];
  tab: number;
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <span className='relative'>
      <button
        className='flex text-sm gap-1 px-3 items-center w-full md:w-min'
        onClick={() => setDropdown(!dropdown)}
        aria-expanded='false'
        aria-controls={value}
        aria-label='expand'
        tabIndex={tab}>
        <p>{value}</p>
        <svg
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`w-4 h-4 relative top-[2px] transition-transform ${
            dropdown && 'rotate-180'
          }`}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>
      <div
        aria-hidden={dropdown}
        id={value}
        className={`grid transition-all relative md:absolute md:justify-center -translate-x-1/2 left-1/2 bg-secondaryBg md:top-10 md:w-36 rounded-b-xl ${
          dropdown
            ? 'grid-rows-[1fr] pt-2 md:py-5 px-10  md:border md:border-primaryText'
            : 'grid-rows-[0fr]'
        }`}>
        <div className='max-h-full overflow-hidden items-center w-max flex flex-col gap-2'>
          {content.map((item: string, i: number) => (
            <Link href={item} tabIndex={+dropdown - 1} key={i}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </span>
  );
};

export default Dropdown;
