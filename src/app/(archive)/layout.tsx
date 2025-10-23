import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archive',
  description: '기술, 생각, 경험을 기록하고 공유하는 공간입니다.',
};

export default function ArchiveLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      {children}
    </main>
  );
}
