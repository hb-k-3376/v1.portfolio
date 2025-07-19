'use client';

import { useEffect, useState } from 'react';

/**
 * 스크롤을 감지하고 섹션의 id를 return 해주는 커스텀 훅
 * @param {string} sectionIds about |  project | archive
 * @param {object} options style | elements
 */
export const useScrollSpy = (
  sectionIds: string[],
  options?: IntersectionObserverInit
) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 뷰포트에 교차한 섹션 중, 비율이 가장 큰(또는 isIntersecting인) 걸 골라 active 처리
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px 0px -50% 0px', // 섹션 상단이 뷰포트 상단에서 50% 내려왔을 때 잡기
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...options,
      }
    );

    // 관찰 대상 등록
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeId;
};
