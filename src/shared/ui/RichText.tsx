import { RichTextProperty } from '../types';
import { getStyleClasses } from '../utils';

/**
 * Rich text 별 스타일 적용
 */
export const RichText = ({ item }: { item: RichTextProperty }) => {
  const styleClasses = getStyleClasses(item.annotations);
  const content = item.plain_text;

  // 링크가 있는 경우
  if (item.text.link || item.href) {
    const linkUrl = item.text.link || item.href;
    return (
      <a
        href={linkUrl!}
        className={`${styleClasses} hover:opacity-70 transition-opacity underline`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  // 일반 텍스트
  return <span className={`${styleClasses} whitespace-pre-wrap`}>{content}</span>;
};
