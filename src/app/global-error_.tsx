'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // useEffect(() => {
  //   console.error(error);
  // }, [error]);

  return (
    <div>
      <h2 className='text-2xl pt-10 text-center'>Something Went Wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
