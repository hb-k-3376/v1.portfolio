import { ArchiveSection } from '@/features/portfolio';
import { AboutSection } from '@/features/portfolio/ui/AboutSection';
import { ProjectSection } from '@/features/portfolio/ui/ProjectSection';
import { SectionLoading } from '@/shared/ui/skeleton/SectionLoading';
import { Suspense } from 'react';

export const PortfolioView = () => {
  return (
    <>
      {/**
       * about section
       */}
      <AboutSection />
      {/**
       * project section
       */}
      <ProjectSection />
      {/**
       * archive section
       */}
      <Suspense fallback={<SectionLoading sectionId="archive" />}>
        <ArchiveSection />
      </Suspense>
    </>
  );
};
