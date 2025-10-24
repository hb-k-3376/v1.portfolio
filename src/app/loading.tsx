import { Loader2 } from 'lucide-react';

/**
 * 전역 로딩 페이지
 */
export default function Loading() {
  return (
    <div className="flex-center min-h-screen">
      <div className="flex gap-10 items-center">
        <div className="flex-center h-[400px]">
          <Loader2 className="text-primary animate-spin" size={100} />
        </div>
        <p className="text-slate-600 text-lg font-semibold">
          페이지를 불러 오는 중입니다.
        </p>
      </div>
    </div>
  );
}
