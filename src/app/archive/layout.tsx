import { ArchiveNav } from '@/shared/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyun-Archive',
  description: '김현빈의 지식 창고 Archive입니다.',
};

export default function ArchiveLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ArchiveNav />
      {children}
    </>
  );
}
