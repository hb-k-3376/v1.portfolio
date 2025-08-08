import { Section } from '@/shared/ui';
import { Header } from '@/shared/ui/header';
import { ArchiveSection } from '@/features/portfolio/ui/ArchiveSection';
import { Footer } from '@/shared/ui/footer';
import { ProjectSection } from '@/features/portfolio/ui/ProjectSection';

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
            <div className="flex justify-center items-center bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] rounded-md drop-shadow-lg p-10">
              <div className="h-[500px]"></div>
            </div>
          </Section>
          {/**
           * project section
           */}
          <ProjectSection />
          {/**
           * archive section
           * 동적으로 노션에서 데이터를 불러오기 떄문에 lazy loading
           */}
          <ArchiveSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
