'use client';

import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';

import { useLocalStorage } from '@/shared/hooks/useLocalStorage';
import { ModalPortal } from '@/shared/ui/ModalPortal';

import { useSearchModalStore } from '../model';

/**
 * Archive 검색 박스
 */
export const SearchBox = () => {
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isOpen = useSearchModalStore((state) => state.isOpen);
  const close = useSearchModalStore((state) => state.close);

  // 로컬 스토리지 훅
  const { searchHistory, setSearchHistory, removeSearchHistory } = useLocalStorage();

  // 폼 검색
  const handleFormSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value.trim()) return;
    const query = inputRef.current.value.trim();
    setSearchHistory(query);
    router.push(`${pathname}?query=${query}`);
    // 모달 닫기
    close();
  };

  // 히스토리 검색
  const handleHistorySearch = (historyTerm: string) => {
    router.push(`${pathname}?query=${historyTerm}`);
    // 모달 닫기
    close();
  };

  if (!isOpen) return null;

  return (
    <ModalPortal isOpen={isOpen} onClose={close}>
      <form
        className="mx-5 mt-40 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-black rounded-xl overflow-hidden shadow-xl border-[#3f3f47] border"
        role="search"
        onSubmit={handleFormSearch}
      >
        <div className="border-b h-15 border-[#3f3f47] px-5 py-3 flex items-center gap-5">
          <Search size={18} className="text-[#7a7a7c]" />
          <input
            autoFocus
            placeholder="검색어를 입력해주세요."
            className="text-lg text-slate-400 w-full bg-transparent placeholder-text-[#7a7a7c] placeholder-text-sm"
            aria-label="검색어"
            ref={inputRef}
          />
        </div>
        <div className="py-4">
          <p className="text-slate-300 text-xs px-4 mb-3">최근 검색어</p>
          {searchHistory.length === 0 ? (
            <div className="py-12 flex justify-center items-center text-sm text-slate-400">
              최근 검색 기록이 없습니다.
            </div>
          ) : (
            <ul className="flex flex-col gap-2">
              {searchHistory.map((term) => {
                return (
                  <li
                    className="bg-zinc-950 w-full px-6 py-3 cursor-pointer hover:bg-zinc-700"
                    key={term}
                    onClick={() => handleHistorySearch(term)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xl">{term}</span>
                      <button
                        type="button"
                        aria-label={`'${term}' 검색 기록 삭제`}
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSearchHistory(term);
                        }}
                      >
                        <X className="hover:text-base active:scale-[0.95]" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </form>
    </ModalPortal>
  );
};
