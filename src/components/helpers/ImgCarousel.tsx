'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/helpers/Modal';

export const ImgCarousel = ({ imgs }: { imgs: string[] }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [docImg, setDocImg] = useState('');

  const prevImg = () => {
    setImgIndex((index) => {
      if (index === 0) return 0;
      return index - 1;
    });
  };

  const nextImg = () => {
    setImgIndex((index) => {
      if (index === imgs.length - 1) return index;
      return index + 1;
    });
  };

  const handleImgView = (displayImg: string) => {
    setDocImg(displayImg);
    setOpenModal(true);
  };

  return (
    <div className='flex flex-col md:flex-row-reverse gap-5 md:h-80 md:max-w-2xl md:m-auto'>
      <div className='relative'>
        <div className='flex overflow-hidden w-full snap-mandatory snap-both h-full'>
          {imgs.map((url, i) => (
            <div
              key={i}
              onClick={() => handleImgView(imgs[imgIndex])}
              className='relative w-full snap-center snap-always basis-auto flex-shrink-0 flex-grow-0 transition-all motion-reduce:transition-none'
              style={{ translate: `${-100 * imgIndex}%` }}>
              <Image
                key={i}
                alt=''
                src={imgs[i]}
                aria-hidden={imgIndex !== i}
                // fill
                width={250}
                height={224}
                priority
                className={`object-cover h-64 md:h-80 w-full rounded-lg block`}
              />
            </div>
          ))}
        </div>
        <button
          className='absolute opacity-0 hover:opacity-100 transition-all h-full px-2 bg-[#e9d5ff40] top-1/2 left-0 translate-x-0 -translate-y-1/2 rotate-180'
          onClick={prevImg}>
          <Image
            src='/carousel-nav.png'
            alt='previous image'
            width={40}
            height={40}
            className='h-10 w-10 md:h-[13%]'
          />
        </button>
        <button
          className='absolute opacity-0 hover:opacity-100 transition-all h-full px-2 bg-[#e9d5ff40] top-1/2 right-0 translate-x-0 -translate-y-1/2'
          onClick={nextImg}>
          <Image
            src='/carousel-nav.png'
            alt='next image'
            className='h-10 w-10 md:h-[13%]'
            width={40}
            height={40}
          />
        </button>
      </div>
      <div className='flex md:flex-col gap-2 md:gap-4 w-full md:w-1/2 scroll-m-5 scroll-p-8 no-scrollbar overflow-auto'>
        {imgs.map((v, i) => (
          <div
            onClick={() => setImgIndex(i)}
            className='relative w-full cursor-pointer md:pr-4 '
            key={i}>
            <Image
              alt=''
              src={v}
              width={80}
              height={65}
              className='w-20 md:w-full rounded-md aspect-4/3 max-w-none block object-cover'
            />
          </div>
        ))}
      </div>
      <Modal openModal={openModal}>
        <div className='fixed -translate-x-1/2 -translate-y-1/2 bg-primaryBg left-1/2 top-1/2 w-[100vw] pb-16 px-5 h-[100vh] rounded-md z-30'>
          <button
            className='fixed m-0 right-5 top-10 text-4xl z-50'
            onClick={() => setOpenModal(false)}>
            X
          </button>
          <Image
            src={docImg}
            alt='Verification document'
            fill
            className='object-contain z-40 p-3'
            onClick={() => console.log('img')}
          />
        </div>
      </Modal>
    </div>
  );
};
