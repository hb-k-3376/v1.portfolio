import { PageCard } from '@/entities/page';
import { formatPageData } from '@/entities/page/model/helper';
import { LinkMoreContent, Section } from '@/shared/ui';
import { NotionPageProperties } from '@/shared/types';
import { getPages } from '@/entities/page/api/queries';

/**
 * 메인 페이지의 Notion Archive 리스트 섹션
 */
export const ArchiveSection = async () => {
  const { pages } = await getPages();

  return (
    <Section id="archive">
      <Section.Header>Archive</Section.Header>
      <ul className="group/list">
        {pages.map(({ properties, id }) => {
          const pageData = { ...properties, id } as NotionPageProperties;
          const formatted = formatPageData({ ...pageData });
          return <PageCard {...formatted} key={id} />;
        })}
      </ul>
      <LinkMoreContent text="아카이브 더보기" link="/archive" />
    </Section>
  );
};
