import { Suspense } from 'react';

import { ArchiveSection } from '@/features/portfolio';
import { SectionLoading } from '@/shared/ui/skeleton/SectionLoading';
import { AboutSection } from './AboutSection';
import { ProjectSection } from './ProjectSection';
import { Header } from './Header';
import { Footer } from './Footer';

export const PortfolioView = () => {
  return (
    <>
      <Header />
      <div className="pt-24 lg:w-[52%] lg:py-24">
        {/** about section */}
        <AboutSection />
        {/**  project section */}
        <ProjectSection />
        {/** archive section */}
        <Suspense fallback={<SectionLoading sectionId="archive" />}>
          <ArchiveSection />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};
