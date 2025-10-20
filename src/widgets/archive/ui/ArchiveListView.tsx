'use client';

import { useEffect } from 'react';
import { ArchiveHeader } from './ArchiveHeader';

import { ArchiveTable, useInfinityPages } from '@/features/archive';
import { useSearchModalStore } from '@/features/archive/search';
import { useInfinityScrollObserver } from '@/shared/hooks';

export const ArchiveListView = () => {
  // 1. 검색어 상태 관리
  const query = useSearchModalStore((state) => state.query);
  const setQuery = useSearchModalStore((state) => state.setQuery);

  // 2. 데이터 패칭 훅 호출 (초기 데이터 전달)
  const { pages, isLoading, fetchNextPage, hasMore, isFetchingNextPage } =
    useInfinityPages({
      query: query,
    });

  // 3. 무한 스크롤 로직
  const handleIntersect = () => {
    if (hasMore && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  const targetRef = useInfinityScrollObserver({
    onIntersect: handleIntersect,
    rootMargin: '100px',
    threshold: 0.1,
  });

  useEffect(() => {
    return () => {
      setQuery(null);
    };
  }, [setQuery]);

  return (
    <>
      <ArchiveHeader />
      <ArchiveTable
        pages={pages}
        isLoading={isLoading}
        hasMore={hasMore}
        targetRef={targetRef}
      />
    </>
  );
};
