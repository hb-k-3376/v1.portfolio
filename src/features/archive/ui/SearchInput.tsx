'use client';

import { Search } from 'lucide-react';
import { useSearchModalStore } from '../hook/useSearchModalStore';

const SearchInput = () => {
  const open = useSearchModalStore((state) => state.open);
  const setQuery = useSearchModalStore((state) => state.setQuery);

  const handleClickSearch = () => {
    open();
  };

  const handleResetQuery = () => {
    setQuery(null);
  };

  return (
    <button
      type="button"
      role="searchbox"
      aria-label="아키이브 검색"
      className="flex gap-3 outline-1 rounded-lg sm:min-w-xs items-center cursor-pointer px-2 py-1"
      onClick={handleClickSearch}
    >
      <Search />
      <span>키워드를 입력해주세요.</span>
    </button>
  );
};
export default SearchInput;
