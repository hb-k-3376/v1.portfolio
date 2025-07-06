import { ImageProperty } from '@/shared/types';
import { getImageUrl, getImageCaption } from '@/shared/utils';

interface IImageBlockProps {
  image: ImageProperty;
}

export const ImageBlock = ({ image }: IImageBlockProps) => {
  const src = getImageUrl(image);
  const alt = getImageCaption(image);

  if (!src) {
    return null; // 또는 placeholder 이미지
  }

  return (
    <div className="flex justify-center py-5">
      <img src={src} loading="lazy" alt={alt} />
    </div>
  );
};
