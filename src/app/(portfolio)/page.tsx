import { PortfolioView } from '@/widgets/portfolio';

// Portfolio page -> partial prerendering 적용
export const experimental_ppr = true;

/**
 *  포트폴리오 페이지
 */
export default function page() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <PortfolioView />
    </div>
  );
}
