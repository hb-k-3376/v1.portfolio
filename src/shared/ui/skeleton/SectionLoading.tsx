import { Loader2 } from 'lucide-react';
import { Section } from '../Section';

interface Props {
  sectionId: string;
}

export const SectionLoading = ({ sectionId }: Props) => {
  return (
    <Section id={sectionId}>
      <header className="sticky z-20 top-0 md-4 md:-mx-12 md:px-12 w-screen py-5 bg-slate-900/75 backdrop-blur lg:opacity-0 lg:relative lg:top-auto lg:w-full">
        <h2 className="text-base uppercase tracking-widest font-bold lg:sr-only">
          로딩 중...
        </h2>
      </header>
      <div className="flex justify-center items-center bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] rounded-md drop-shadow-lg p-10">
        <Loader2 className="animate-spin" size={30} />
      </div>
    </Section>
  );
};
