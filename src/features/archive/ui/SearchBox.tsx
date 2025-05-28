'use client';

import { ModalPortal } from '@/shared/ui/ModalPortal';
import { useSearchModal } from '../hook/useSearchModal';
import { Search, X } from 'lucide-react';
import { useSearchModalStore } from '../hook/useSearchModalStore';
import { FormEvent, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const SearchBox = () => {
  const { backdropRef, handleClickOutside, isOpen, close } = useSearchModal();
  const setQuery = useSearchModalStore((state) => state.setQuery);
  const [input, setInput] = useState<string | null>(null);

  // 로컬 스토리지 훅
  const { searchHistory, setSearchHistory, removeSearchHistory } = useLocalStorage();

  if (!isOpen) return null;

  /**
   * 검색
   */
  const handleSearch = () => {
    setQuery(input);
    setSearchHistory(input || '');
    close();
  };

  return (
    <ModalPortal>
      <div
        className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center items-start"
        ref={backdropRef}
        onClick={handleClickOutside}
      >
        <form
          className="mt-40 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-black rounded-xl overflow-hidden shadow-xl border-[#3f3f47] border"
          role="search"
          onClick={(e) => e.stopPropagation()}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="border-b h-15 border-[#3f3f47] px-5 py-3 flex items-center gap-5">
            <Search size={18} className="text-[#7a7a7c]" />
            <input
              placeholder="검색어를 입력해주세요."
              className="text-lg text-slate-400 w-full bg-transparent placeholder-text-[#7a7a7c] placeholder-text-sm"
              aria-label="검색어"
              onChange={(e) => {
                const { value } = e.currentTarget;
                setInput(value);
              }}
            />
          </div>
          <div className="py-4">
            <p className="text-slate-300 text-xs px-4 py-1">최근 검색어</p>
            {searchHistory.length === 0 ? (
              <div className="py-12 flex justify-center items-center text-sm text-slate-400">
                최근 검색 기록이 없습니다.
              </div>
            ) : (
              <ul className="flex flex-col gap-2">
                {searchHistory.map((term, idx) => {
                  return (
                    <li
                      className="bg-zinc-950 w-full px-6 py-3 cursor-pointer hover:bg-zinc-700"
                      key={idx}
                      onClick={handleSearch}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xl">{term}</span>
                        <button type="button" onClick={() => removeSearchHistory(term)}>
                          <X className="hover:text-slate-200 active:scale-[0.95]" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </form>
      </div>
    </ModalPortal>
  );
};
