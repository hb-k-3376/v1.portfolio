import { ImageProperty } from '@/shared/types';

interface IImageBlockProps {
  image: ImageProperty;
  type: 'external' | 'file';
}

export const ImageBlock = ({ image, type }: IImageBlockProps) => {
  switch (type) {
    case 'external':
      return (
        <div className="flex justify-center py-5">
          <img src={image.external?.url} loading="lazy" alt={image?.caption[0] || '이미지'} />
        </div>
      );
    case 'file':
      return (
        <div className="flex justify-center py-5">
          <img src={image.file?.url} loading="lazy" alt={image?.caption[0] || '이미지'} />
        </div>
      );
  }
};
