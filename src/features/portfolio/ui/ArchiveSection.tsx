'use client';

import { PageCard } from '@/entities/page';
import { formatPageData } from '@/entities/page/model/helper';
import { Section } from '@/shared/ui';
import { HOME_PAGE_SIZE } from '@/shared/constants';
import Link from 'next/link';
import { usePagesQuery } from '@/features/archive/hook/usePagesQuery';
import { SectionLoading } from '@/shared/ui/skeleton/SectionLoading';
import { NotionPageProperties } from '@/shared/types';

/**
 * 메인 페이지의 Notion Archive 리스트 섹션
 */
export const ArchiveSection = () => {
  const { pages, isLoading } = usePagesQuery({
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
      {isLoading ? (
        <SectionLoading />
      ) : (
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
      )}
      <div className="mt-12">
        <Link
          href={'/archive'}
          className="flex items-center leading-tight font-semibold text-base group"
          aria-label="View Development Archive"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none group-focus-visible:border-primary">
            View Development Archive
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="ml-1 inline-flex h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </Section>
  );
};
