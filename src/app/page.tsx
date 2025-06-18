import { Section } from '@/shared/ui';
import { Header } from '@/shared/ui/header';
import { getPages } from '@/features/archive';
import { HOME_PAGE_SIZE } from '@/shared/constants';
import { ArchiveSection } from '@/features/portfolio/ui/ArchiveSection';
import { Footer } from '@/shared/ui/footer';

/**
 *  루트 페이지
 *  /intro - introduction 영역
 *  /project   - project 영역
 *  /archive    - archive 영역
 */

export const dynamic = 'force-dynamic'; // api 같은 외부 api를 서버 사이드에서 호출하려고 할 시 에 문제가 됨

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
