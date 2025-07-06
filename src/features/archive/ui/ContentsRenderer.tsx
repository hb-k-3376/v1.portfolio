import { ContentProperty } from '@/shared/types';
import { ContentsText } from '@/shared/ui';
import { BulletPointBlock } from './content-blocks/BulletPointBlock';
import { CalloutBlock } from './content-blocks/CalloutBlock';
import { CodeBlock } from './content-blocks/CodeBlock';
import { HeadingBlock } from './content-blocks/HeadingBlock';
import { ImageBlock } from './content-blocks/ImageBlock';
import { ParagraphBlock } from './content-blocks/ParagraphBlock';

interface IContentRendererProps {
  content: Omit<ContentProperty, 'id' | 'type'>;
}

/**
 * 노션에서 받아온 본문 데이터의 타입에 따라 다른 컴포넌트로 렌더링해주는 컴포넌트
 * 빈 블럭, H1, H2, H3, Img , Bullet Pointer, Code Field, Callout, Paragraph
 */
export const ContentRenderer = ({ content }: IContentRendererProps) => {
  // 제목 블록 렌더링
  if (content.heading_1) {
    return (
      <HeadingBlock level={1}>
        <ContentsText paragraph={content.heading_1} className="font-bold" />
      </HeadingBlock>
    );
  }
  if (content.heading_2) {
    return (
      <HeadingBlock level={2}>
        <ContentsText paragraph={content.heading_2} className="font-bold" />
      </HeadingBlock>
    );
  }
  if (content.heading_3) {
    return (
      <HeadingBlock level={3}>
        <ContentsText paragraph={content.heading_3} className="font-bold" />
      </HeadingBlock>
    );
  }

  // 이미지 블록 렌더링
  if (content.image) {
    return <ImageBlock image={content.image} type={content.image.type} />;
  }

  // 텍스트 블록 렌더링
  if (content.paragraph) {
    return <ParagraphBlock paragraph={content.paragraph} />;
  }

  // 리스트 블록 렌더링
  if (content.bulleted_list_item) {
    return <BulletPointBlock bulletPoint={content.bulleted_list_item} />;
  }

  // 콜아웃 블록 렌더링
  if (content.callout) {
    return <CalloutBlock callout={content.callout} />;
  }

  // 코드 블록 렌더링
  if (content.code) {
    return <CodeBlock code={content.code} />;
  }

  // 매칭되는 컨텐츠 타입이 없거나 빈 블록인 경우
  return <div className="h-4" />; // 빈 공간 유지
};
