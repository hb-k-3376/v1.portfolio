'use client';

import { Search, X } from 'lucide-react';
import { useSearchModalStore } from '../model/useSearchModalStore';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const openModel = useSearchModalStore((state) => state.open);

  const trim = searchParams.get('query') ?? null;

  const handleClickSearch = () => {
    // 모달 열기
    openModel();
  };

  const handleResetQuery = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('query');
    router.push(pathname);
  };

  return (
    <div className="group relative">
      <button
        type="button"
        role="searchbox"
        aria-label="아키이브 검색"
        className="flex gap-3 border-muted-foreground border-b-1 sm:min-w-xs items-center cursor-pointer py-3 group-hover:text-primary transition-colors"
        onClick={handleClickSearch}
      >
        <Search aria-hidden="true" />
        <div className="flex justify-between items-center">
          <span>{trim ? trim : '키워드를 입력해주세요.'} </span>
        </div>
      </button>
      {trim && (
        <button
          type="button"
          aria-label="검색어 삭제"
          className="absolute hover:text-red-300 cursor-pointer right-2 top-1/2 -translate-y-1/2 p-2"
          onClick={handleResetQuery}
        >
          <X aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
