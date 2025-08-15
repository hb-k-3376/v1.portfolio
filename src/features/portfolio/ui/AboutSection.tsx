import { Section } from '@/shared/ui';

export const AboutSection = () => {
  return (
    <Section id="about">
      <header className="sticky z-20 top-0 md-4 md:-mx-12 md:px-12 w-screen py-5 bg-slate-900/75 backdrop-blur lg:opacity-0 lg:relative lg:top-auto lg:w-full">
        <h2 className="text-base uppercase tracking-widest font-bold lg:sr-only">
          About
        </h2>
      </header>
    </Section>
  );
};
