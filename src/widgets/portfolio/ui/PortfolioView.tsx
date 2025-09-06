'use client';

import dynamic from 'next/dynamic';
import { AboutSection } from '@/features/portfolio/ui/AboutSection';
import { ProjectSection } from '@/features/portfolio/ui/ProjectSection';
import { SectionLoading } from '@/shared/ui/skeleton/SectionLoading';

const ArchiveSection = dynamic(
  () => import('@/features/portfolio').then((mod) => ({ default: mod.ArchiveSection })),
  {
    ssr: false,
    loading: () => <SectionLoading sectionId="archive" />,
  }
);

export const PortfolioView = () => {
  return (
    <>
      {/** about section */}
      <AboutSection />
      {/**  project section */}
      <ProjectSection />
      {/** archive section */}
      <ArchiveSection />
    </>
  );
};
