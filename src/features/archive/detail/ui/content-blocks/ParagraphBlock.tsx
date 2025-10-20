import { ParagraphProperty } from '@/shared/types';
import { ContentsText } from '@/shared/ui';

interface IParagraphBlockProp {
  paragraph: ParagraphProperty;
}

export const ParagraphBlock = ({ paragraph }: IParagraphBlockProp) => {
  if (paragraph.rich_text.length === 0) {
    return <div className="h-10 py-2" />; // 공백
  }
  return <ContentsText paragraph={paragraph} className="py-2" />;
};
