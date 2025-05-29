'use client';

import { Bubbles } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * 전역 로딩 페이지
 */
export default function Loading() {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-300"></div> */}
      <div className="flex gap-10 items-center">
        <div className="animate-spin text-teal-300">
          <Bubbles size={50} />
        </div>
        <p className="text-slate-600 text-xl font-semibold">
          페이지를 불러 오는 중입니다
          <span className="inline-block w-8 text-left">{'.'.repeat(dotCount)}</span>
        </p>
      </div>
    </div>
  );
}
