import { ModeSwitch } from '@/shared/ui/ModeSwitch';
import { Header } from '@/widgets/portfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: '저의 프로젝트와 기술 스택을 소개하는 포트폴리오입니다.',
};

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4 h-full">
        <Header />
        {children}
      </div>
      <ModeSwitch />
    </main>
  );
}
