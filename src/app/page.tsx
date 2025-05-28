import { Section } from '@/shared/ui';
import { formatPageData } from '@/entities/page/model/helper';
import { PageCard } from '@/entities/page';
import { Header } from '@/shared/ui/header';
import { getPages } from '@/features/archive';
import { HOME_PAGE_SIZE } from '@/shared/constants';
import { IFormattedPageData } from '@/entities/page/model/types';
import Link from 'next/link';
import { ArchiveSection } from '@/features/portfolio/ui/ArchiveSection';
import { Footer } from '@/shared/ui/Footer';

/**
 *  루트 페이지
 *  /intro - introduction 영역
 *  /project   - project 영역
 *  /archive    - archive 영역
 */
export default async function page() {
  const { pages } = await getPages({ pageSize: HOME_PAGE_SIZE, query: null });

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-[52%] lg:py-24">
          {/**
           * about section
           */}
          <Section id="about">
            <div className="h-[500px]"></div>
          </Section>
          {/**
           * project section
           */}
          <Section id="project">
            <div className="h-[500px]"></div>
          </Section>
          {/**
           * archive section
           */}
          <ArchiveSection pages={pages} />
          {/* <footer className="h-50 w-full">test</footer> */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
