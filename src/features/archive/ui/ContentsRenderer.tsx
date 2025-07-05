import { ContentProperty } from '@/shared/types';
import { ContentsText } from '@/shared/ui';
import { getColorClass } from '@/shared/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IContentRendererProps {
  content: Omit<ContentProperty, 'id' | 'type'>;
}

/**
 * 노션에서 받아온 본문 데이터의 타입에 따라 다른 컴포넌트로 렌더링해주는 컴포넌트
 * 빈 블럭, H1, H2, H3, Img , Bullet Pointer, Code Field, Callout, Paragraph
 */
export const ContentRenderer = ({ content }: IContentRendererProps) => {
  /**
   * 헤더 1 일 경우
   */
  if (content.heading_1) {
    return (
      <h1 className="text-4xl pt-5">
        <ContentsText paragraph={content.heading_1} className="font-bold" />
      </h1>
    );
  }
  /**
   * 헤더 2 일 경우
   */
  if (content.heading_2) {
    return (
      <h3 className="text-3xl pt-5">
        <ContentsText paragraph={content.heading_2} className="font-bold" />
      </h3>
    );
  }

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
    if (content.image.external) {
      return (
        <div className="flex justify-center py-5">
          <img src={content.image?.external?.url} loading="lazy" alt={content?.image?.caption[0] || '이미지'} />
        </div>
      );
    }
    return (
      <div className="flex justify-center py-5">
        <img src={content.image?.file?.url} loading="lazy" alt={content?.image?.caption[0] || '이미지'} />
      </div>
    );
  }
  /**
   * 글 (text) 일 경우
   */
  if (content.paragraph) {
    if (content.paragraph.rich_text.length === 0) {
      return <div className="h-10" />; // 공백
    }
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
      <SyntaxHighlighter
        language={content.code.language}
        style={cb}
        customStyle={{ padding: '15px', borderRadius: '8px' }}
      >
        {content.code.rich_text[0].plain_text}
      </SyntaxHighlighter>
    );
  }
  return null;
};
