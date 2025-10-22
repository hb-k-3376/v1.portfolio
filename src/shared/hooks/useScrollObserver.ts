'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollObserver = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string>('');
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 350; // 헤더 높이 offset

      // 아래부터 위로 체크
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollY >= el.offsetTop) {
          setActiveId(sectionIds[i]);
          return;
        }
      }

      // 맨 위면 첫 섹션
      if (sectionIds[0]) setActiveId(sectionIds[0]);
    };

    handleScroll();

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [sectionIds]);

  return activeId;
};
