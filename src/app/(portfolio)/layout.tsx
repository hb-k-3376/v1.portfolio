import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyun',
  description: 'v1 portfolio',
};

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      {children}
    </main>
  );
}
