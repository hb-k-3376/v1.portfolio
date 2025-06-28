import { Metadata } from 'next';
import { Lighter } from '@/shared/ui';
import { Providers } from '@/shared/lib';
import '@/shared/styles/globals.css';

export const metadata: Metadata = {
  title: 'Hyun',
  description: 'v2 portfolio',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-primary selection:text-teal-900"
        cz-shortcut-listen="true"
      >
        <Providers>
          <div className="relative">
            <Lighter />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
