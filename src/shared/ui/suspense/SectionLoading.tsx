import { Loader2 } from 'lucide-react';
import { Section } from '../Section';

export const SectionLoading = () => {
  return (
    <Section id="archive">
      <div className="sticky z-20 top-0 md-4 md:-mx-12 md:px-12 w-screen py-5 bg-slate-900/75 backdrop-blur lg:opacity-0 lg:relative lg:top-auto lg:w-full">
        <h2 className="text-base uppercase tracking-widest font-bold lg:sr-only">Archive</h2>
      </div>
      <div className="flex justify-center items-center">
        <Loader2 className="animate-spin" size={30} />
      </div>
    </Section>
  );
};
