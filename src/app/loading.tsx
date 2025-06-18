import { Bubbles } from 'lucide-react';

/**
 * 전역 로딩 페이지
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-10 items-center">
        <div className="animate-spin text-teal-300">
          <Bubbles size={50} />
        </div>
        <p className="text-slate-600 text-xl font-semibold">페이지를 불러 오는 중입니다.</p>
      </div>
    </div>
  );
}
