import { Metadata } from 'next';
import { Providers } from './_providers';
import { Lighter } from '@/shared/ui';
import '@/shared/styles/globals.css';

export const metadata: Metadata = {
  title: 'Hyun Kim',
  description: 'v2 portfolio',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
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
