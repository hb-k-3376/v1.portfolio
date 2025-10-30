import { PortfolioView } from '@/widgets/portfolio';

// Portfolio page -> partial prerendering 적용
export const experimental_ppr = true;

/**
 *  포트폴리오 페이지
 */
export default function page() {
  return <PortfolioView />;
}
