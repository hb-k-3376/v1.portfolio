interface Props {
  children: React.ReactNode;
}

export const SectionHeader = ({ children }: Props) => {
  return (
    <header className="sticky z-20 top-0 mb-4 -mx-6 px-6 py-5 md:-mx-12 md:px-12 bg-slate-900/75 backdrop-blur lg:sr-only w-screen">
      <h2 className="text-base text-sm uppercase tracking-widest font-bold">
        {children}
      </h2>
    </header>
  );
};
