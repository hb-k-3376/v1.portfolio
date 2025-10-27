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
  const alt = getImageCaption(image);

  if (!src || hasError) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center py-5">
      <Image
        src={src}
        alt={alt}
        height={400}
        width={700}
        quality={80}
        className="object-cover transition-opacity duration-300"
        onError={() => {
          console.error('Image load failed:', src);
          setHasError(true);
        }}
      />
      {alt && <p className="text-foreground text-sm">{alt}</p>}
    </div>
  );
};
