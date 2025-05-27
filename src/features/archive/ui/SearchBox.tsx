'use client';

import { ModalPortal } from '@/shared/ui/ModalPortal';
import { useSearchModal } from '../hook/useSearchModal';
import { Search } from 'lucide-react';

export const SearchBox = () => {
  const { backdropRef, handleClickOutside, isOpen } = useSearchModal();

  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div
        className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center items-start"
        ref={backdropRef}
        onClick={handleClickOutside}
      >
        <form
          className="mt-40 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-black rounded-xl overflow-hidden shadow-xl"
          role="search"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-b h-15 border-[#3f3f47] px-5 py-3 flex items-center gap-5">
            <Search size={18} className="text-[#7a7a7c]" />
            <input
              placeholder="검색어를 입력해주세요."
              className="text-sm text-[#7a7a7c] w-full bg-transparent"
              aria-label="검색어"
            />
          </div>
          <div className="py-4">
            <p className="text-slate-300 text-xs px-4 py-1">최근 검색어</p>
            <div className="py-12 flex justify-center items-center text-sm text-slate-400">
              최근 검색 기록이 없습니다.
            </div>
          </div>
        </form>
      </div>
    </ModalPortal>
  );
};
