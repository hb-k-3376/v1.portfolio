'use client';

import { PageCard } from '@/entities/page';
import { formatPageData } from '@/entities/page/model/helper';
import { Section } from '@/shared/ui';
import { HOME_PAGE_SIZE } from '@/shared/constants';
import { NotionPageProperties } from '@/shared/types';
import { usePagesQuery } from '@/shared/hooks/usePagesQuery';
import { LinkMoreContent } from './LinkMoreContent';

/**
 * 메인 페이지의 Notion Archive 리스트 섹션
 */
export const ArchiveSection = () => {
  const { pages } = usePagesQuery({
    pageSize: HOME_PAGE_SIZE,
    query: null,
  });

  return (
    <Section id="archive">
      <header className="sticky z-20 top-0 md-4 md:-mx-12 md:px-12 w-screen py-5 bg-slate-900/75 backdrop-blur lg:opacity-0 lg:relative lg:top-auto lg:w-full">
        <h2 className="text-base uppercase tracking-widest font-bold lg:sr-only">
          Archive
        </h2>
      </header>
      <ul className="group/list">
        {pages.map(({ properties, id }) => {
          const pageData = { ...properties, id } as NotionPageProperties;
          const formatted = formatPageData({ ...pageData });
          return (
            <li className="mb-12" key={id}>
              <PageCard {...formatted} />
            </li>
          );
        })}
      </ul>
      <LinkMoreContent text="   View Development Archive" link="/archive" />
    </Section>
  );
};
