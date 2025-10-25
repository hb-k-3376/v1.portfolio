interface SectionProps {
  id: string;
  children: React.ReactNode;
}

interface SectionHeaderProps {
  children: React.ReactNode;
}

const SectionRoot = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {children}
    </section>
  );
};

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <header className="sticky z-20 top-0 mb-4 -mx-6 px-6 py-5 md:-mx-12 md:px-12 bg-slate-900/75 backdrop-blur lg:sr-only w-screen">
      <h2 className="text-accent-foreground text-sm uppercase tracking-widest font-bold">
        {children}
      </h2>
    </header>
  );
};

interface SectionComponent extends React.FC<SectionProps> {
  Header: React.FC<SectionHeaderProps>;
}

const Section = SectionRoot as SectionComponent;
Section.Header = SectionHeader;

export { Section };
