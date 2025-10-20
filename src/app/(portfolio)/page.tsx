import { PortfolioView, Footer, Header } from '@/widgets/portfolio';

/**
 *  포트폴리오 페이지
 */

// Portfolio page -> partial prerendering 적용
export const experimental_ppr = true;

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
