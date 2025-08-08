'use client';

import { ImageProperty } from '@/shared/types';
import { getImageUrl, getImageCaption } from '@/shared/utils';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

interface IImageBlockProps {
  image: ImageProperty;
}

export const ImageBlock = ({ image }: IImageBlockProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const src = getImageUrl(image);
  const alt = getImageCaption(image);

  if (!src) {
    return null; // 또는 placeholder 이미지
  }

  return (
    <div className="flex justify-center py-5">
      {/* 로딩 스켈레톤 */}
      {isLoading && <Loader2 className="animate-spin" size={30} />}
      <img
        src={src}
        alt={alt}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
