import { ContentsText } from '@/shared/ui';
import { getPageContentById } from '../services';
import { ContentRenderer } from './ContentsRenderer';

/**
 * page 상세 페이지
 */
export const ArchiveContent = async ({ slug }: { slug: string }) => {
  const contents = await getPageContentById(slug);

  return (
    <section className="py-10 px-4">
      {contents.map((content, idx) => (
        <ContentRenderer content={content} key={idx} />
      ))}
    </section>
  );
};
