import { ParagraphProperty } from '../types';
import { RichText } from './RichText';

export const ContentsText = ({ paragraph, className = '' }: { paragraph: ParagraphProperty; className?: string }) => {
  if (!paragraph.rich_text || paragraph.rich_text.length === 0) {
    return null;
  }

  return (
    <div className={`${className}`}>
      {paragraph.rich_text.map((item, index) => (
        <RichText key={index} item={item} />
      ))}
    </div>
  );
};
