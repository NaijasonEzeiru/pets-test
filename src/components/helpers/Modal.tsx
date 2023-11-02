import React from 'react';
import styles from '@/styles/Dashboard.module.css';

const Modal = ({ children, openModal }: any) => {
  if (!openModal) {
    return null;
  }
  return (
    <div>
      {' '}
      <div className='absolute top-0 left-0 right-0 bottom-0 z-30 bg-[#80808075]'></div>
      {children}
    </div>
  );
};

export default Modal;
