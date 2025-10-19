import { Suspense } from 'react';

import { ArchiveSection } from '@/features/portfolio';
import { SectionLoading } from '@/shared/ui/skeleton/SectionLoading';
import { AboutSection } from './AboutSection';
import { ProjectSection } from './ProjectSection';

// ArchiveSection 컴포넌트에 partial prerendering 적용
export const experimental_ppr = true;

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
