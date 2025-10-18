import { Metadata } from 'next';
import { Lighter } from '@/shared/ui';
import { Providers } from '@/shared/lib';
import { Analytics } from '@vercel/analytics/next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Hyun',
  description: 'v1 portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body cz-shortcut-listen="true">
        <Providers>
          <Lighter />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
