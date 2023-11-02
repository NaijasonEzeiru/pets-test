'use client';

import { apiAddress } from '@/utils/variables';
import { useState } from 'react';

export default function ShowContact({ userId }: { userId: string }) {
  const [showContact, setShowContact] = useState("Show Owner's contact");
  const [disabled, setDisabled] = useState(false);

  const fetchContact = async () => {
    setShowContact('loading...');
    const res = await fetch(`${apiAddress}/api/phone/${userId}`, {
      method: 'POST'
    });
    if (res.ok) {
      const contact = await res.json();
      setShowContact(contact.phone);
    } else {
      setShowContact('Contact not provided');
    }
    setDisabled(true);
  };

  return (
    <button
      className='px-4 py-2 bg-ctaColor rounded-lg text-white m-auto'
      disabled={disabled}
      onClick={() => fetchContact()}>
      {showContact}
    </button>
  );
}
