import { ContentProperty } from '@/shared/types';
import { ContentsText } from '@/shared/ui';
import { RichText } from '@/shared/ui/RichText';
import { getColorClass } from '@/shared/utils';

interface IContentRendererProps {
  content: Omit<ContentProperty, 'id' | 'type'>;
}

/**
 * 노션에서 받아온 본문 데이터의 타입에 따라 다른 컴포넌트로 렌더링해주는 컴포넌트
 * H3 , Img , Bullet Pointer, Code Field, Callout, Paragraph
 */
export const ContentRenderer = ({ content }: IContentRendererProps) => {
  /**
   * 헤더 3 일 경우
   */
  if (content.heading_3) {
    return (
      <h3 className="text-2xl pt-5">
        <ContentsText paragraph={content.heading_3} className="font-bold" />
      </h3>
    );
  }
  /**
   * 이미지 일 경우
   */
  if (content.image) {
    return (
      <div className="flex justify-center py-5">
        <img src={content.image?.file.url} loading="lazy" alt={content?.image?.caption[0] || '이미지'} />
      </div>
    );
  }
  /**
   * 글 (text) 일 경우
   */
  if (content.paragraph) {
    return <ContentsText paragraph={content.paragraph} className="py-2" />;
  }
  /**
   * 블렛 포인터 인 경우
   */
  if (content.bulleted_list_item) {
    return (
      <span className="flex gap-2">
        •
        <ContentsText paragraph={content.bulleted_list_item} />
      </span>
    );
  }
  /**
   * 콜아웃 인 경우
   */
  if (content.callout) {
    return (
      <div className={`${getColorClass(content.callout.color)} rounded-lg p-5 flex my-5`}>
        <div className="mr-5">{content.callout.icon.emoji}</div>
        <ContentsText paragraph={content.callout} />
      </div>
    );
  }

  /**
   * 코드 인 경우
   */
  if (content.code) {
    return (
      <div className={`bg-gray-600 rounded-lg p-5 my-5`}>
        <div className="uppercase pb-2">{content.code.language}</div>
        {content.code.rich_text.map((text, idx) => {
          console.log(text);

          return <RichText item={text} key={idx} />;
        })}
      </div>
    );
  }
  return null;
};
