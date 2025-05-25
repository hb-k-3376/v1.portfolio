import { ParagraphProperty } from '../types';
import { RichText } from './RichText';

/**
 * 아카이브 본문 text 어노테이션 적용후 렌더링
 */

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
