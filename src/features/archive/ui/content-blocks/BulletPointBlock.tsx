import { BulletedPointProperty } from '@/shared/types';
import { ContentsText } from '@/shared/ui';

interface IBulletPointBlockProps {
  bulletPoint: BulletedPointProperty;
}

export const BulletPointBlock = ({ bulletPoint }: IBulletPointBlockProps) => {
  return (
    <span className="flex gap-2">
      •
      <ContentsText paragraph={bulletPoint} />
    </span>
  );
};
