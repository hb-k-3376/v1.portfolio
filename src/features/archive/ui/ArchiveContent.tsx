import { ContentsText } from '@/shared/ui';
import { getPageContentById } from '../services';

/**
 * page 상세 페이지
 */
export const ArchiveContent = async ({ slug }: { slug: string }) => {
  const contents = await getPageContentById(slug);

  return (
    <section className="py-10 px-4">
      {contents.map((content, idx) => {
        if (content.type === 'paragraph') {
          if (!content.paragraph) return '';
          return <ContentsText paragraph={content.paragraph} key={idx} />;
        }

        return (
          <div className="flex justify-center py-5" key={idx}>
            <img src={content.image?.file.url} />
          </div>
        );
      })}
    </section>
  );
};
