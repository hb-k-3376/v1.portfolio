import { ContentRenderer } from './ContentsRenderer';
import { ContentProperty } from '@/shared/types';

interface Props {
  contents: ContentProperty[];
}

/**
 * page 상세 페이지
 */
export const ArchiveContent = async ({ contents }: Props) => {
  return (
    <div className="py-10">
      {contents.map((content) => (
        <ContentRenderer content={content} key={content.id} />
      ))}
    </div>
  );
};
