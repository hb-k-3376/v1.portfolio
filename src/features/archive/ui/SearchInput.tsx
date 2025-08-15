'use client';

import { Search, X } from 'lucide-react';
import { useSearchModalStore } from '../hook/useSearchModalStore';

const SearchInput = () => {
  const open = useSearchModalStore((state) => state.open);
  const setQuery = useSearchModalStore((state) => state.setQuery);
  const query = useSearchModalStore((state) => state.query);

  const handleClickSearch = () => {
    open();
  };

  const handleResetQuery = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setQuery(null);
  };

  return (
    <div className="relative">
      <button
        type="button"
        role="searchbox"
        aria-label="아키이브 검색"
        className="flex gap-3 border-b-1 w-full sm:min-w-xs items-center cursor-pointer p-3 focus:border-primary"
        onClick={handleClickSearch}
      >
        <Search aria-hidden="true" />
        <div className="flex justify-between items-center w-full">
          <span>{query ? query : '키워드를 입력해주세요.'} </span>
        </div>
      </button>
      {query && (
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
export default SearchInput;
