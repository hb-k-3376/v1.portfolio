import { Metadata } from 'next';
import { Lighter } from '@/shared/ui';
import { Analytics } from '@vercel/analytics/next';
import { Providers } from './_providers';
import './_styles/globals.css';

const SITE_URL = 'https://hyunbin.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '김현빈 | 프론트엔드 개발자',
    template: `%s | 김현빈`,
  },
  description: '사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 김현빈입니다.',
  openGraph: {
    title: '김현빈 | 프론트엔드 개발자',
    description: '사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 김현빈입니다.',
    url: SITE_URL,
    siteName: 'Hyunbin.dev',
    images: [
      {
        url: '/images/hyunbin.webp',
        width: '1200',
        height: '630',
        alt: '김현빈 프로필',
      },
    ],
    type: 'website',
  },
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
