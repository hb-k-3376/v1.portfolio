export const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <section id={id} className="mb-16 scroll-mt-16 md:mb-20 lg:scroll-mt-24">
      {children}
    </section>
  );
};
