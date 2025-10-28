'use client';

import { ImageProperty } from '@/shared/types';
import { getImageUrl, getImageCaption } from '@/shared/utils';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  image: ImageProperty;
}

export const ImageBlock = ({ image }: Props) => {
  const [hasError, setHasError] = useState(false);
  const src = getImageUrl(image);
  const caption = getImageCaption(image);

  if (!src || hasError) {
    return null;
  }

  console.log('image', image);
  return (
    <div className="flex flex-col justify-center py-5">
      <Image
        src={src}
        alt=""
        height={400}
        width={700}
        quality={80}
        aria-hidden="true"
        className="object-cover transition-opacity duration-300"
        onError={() => {
          setHasError(true);
        }}
      />
      {caption && <p className="text-foreground text-sm">{caption}</p>}
    </div>
  );
};
