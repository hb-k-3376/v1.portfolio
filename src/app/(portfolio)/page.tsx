import { Footer, Header } from '@/widgets/layout';
import { PortfolioView } from '@/widgets/portfolio';

/**
 *  포트폴리오 페이지
 */
export default function page() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <div className="pt-24 lg:w-[52%] lg:py-24">
        <PortfolioView />
        <Footer />
      </div>
    </div>
  );
}
