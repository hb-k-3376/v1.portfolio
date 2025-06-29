import { Section } from '@/shared/ui';
import { Header } from '@/shared/ui/header';
import { Suspense } from 'react';
import { ArchiveSection } from '@/features/portfolio/ui/ArchiveSection';
import { Footer } from '@/shared/ui/footer';
import { SectionLoading } from '@/shared/ui/suspense/SectionLoading';

/**
 *  루트 페이지
 *  /about - about 영역
 *  /project   - project 영역
 *  /archive    - archive 영역
 */

export default function page() {
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
           * 동적으로 노션에서 데이터를 불러오기 떄문에 lazy loading
           */}
          <Suspense fallback={<SectionLoading />}>
            <ArchiveSection />
          </Suspense>
          <Footer />
        </main>
      </div>
    </div>
  );
}
