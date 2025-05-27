'use client';

import { useEffect, useRef } from 'react';
import { useSearchModalStore } from './useSearchModalStore';

/**
 *  모달 컴포넌트와 키보드 esc 키 닫기, 모달 영역외 클릭시 닫기
 */
export const useSearchModal = () => {
  const isOpen = useSearchModalStore((state) => state.isOpen);
  const close = useSearchModalStore((state) => state.close);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  /**
   * esc 버튼 클릭 시 모달창 닫음
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  /**
   *  모달 영역 외 클릭시 모달창 close
   */
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) close();
  };

  return {
    isOpen,
    backdropRef,
    handleClickOutside,
  };
};
