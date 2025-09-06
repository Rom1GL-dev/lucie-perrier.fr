'use client';

import React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

interface Props {
  alt: string;
  image: string;
  description: React.ReactNode;
  size: number;
}

export default function FooterItem({ alt, image, description, size }: Props) {
  return (
    <div
      className={clsx(`mb-3 flex items-start text-white`, {
        'whitespace-nowrap': alt === 'siret'
      })}
    >
      <Image
        src={image}
        title={alt}
        alt={alt}
        height={size}
        width={size}
        className={'mr-4'}
      />
      {description}
    </div>
  );
}
