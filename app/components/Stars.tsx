import Image from 'next/image';
import React from 'react';
type Props = {
  lvl: number;
};

const Stars = ({ lvl }:Props) => {
  const maxStars = 5;
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    if (i < lvl) {
      // Додаємо кольорову зірочку
      stars.push(
        <Image
          key={i}
          src="/img/icons/exp.png"
          width={16}
          height={16}
          alt="exp"
          style={{ objectFit: 'contain' }}
        />
      );
    } else {
      // Додаємо сіру зірочку
      stars.push(
        <Image
          key={i}
          src="/img/icons/exp_gray.png"
          width={16}
          height={16}
          alt="exp_gray"
          style={{ objectFit: 'contain' }}
        />
      );
    }
  }

  return <div className='flex gap-1'>{stars}</div>;
};

export default Stars;