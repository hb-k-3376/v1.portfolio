import { Suspense } from 'react';

import { ArchiveSection } from '@/features/portfolio';
import { SectionLoading } from '@/shared/ui/skeleton/SectionLoading';
import { AboutSection } from './AboutSection';
import { ProjectSection } from './ProjectSection';

export const PortfolioView = () => {
  return (
    <>
      {/** about section */}
      <AboutSection />
      {/**  project section */}
      <ProjectSection />
      {/** archive section */}
      <Suspense fallback={<SectionLoading sectionId="archive" />}>
        <ArchiveSection />
      </Suspense>
    </>
  );
};
