import { ArchiveSection } from '@/features/portfolio';
import { AboutSection } from '@/features/portfolio/ui/AboutSection';
import { ProjectSection } from '@/features/portfolio/ui/ProjectSection';

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
      <ArchiveSection />
    </>
  );
};
