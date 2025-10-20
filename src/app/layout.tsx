import { Metadata } from 'next';
import { Lighter } from '@/shared/ui';
import { Analytics } from '@vercel/analytics/next';
import { Providers } from './_providers';
import './_styles/globals.css';

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
          {children}
          <Lighter />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
