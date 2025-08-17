import { Footer, Header } from '@/widgets/layout';
import { PortfolioView } from '@/widgets/portfolio';

/**
 *  루트 페이지
 */
export default function page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-[52%] lg:py-24">
          <PortfolioView />
          <Footer />
        </main>
      </div>
    </div>
  );
}
