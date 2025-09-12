'use client';

import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

import { useSearchModalStore } from '../hook/useSearchModalStore';

import { PageRow } from '@/entities/page';
import { formatPageData } from '@/entities/page/model/helper';
import { NotionPageProperties } from '@/shared/types';
import { useInfinityPages } from '../hook/useInfinityPages';
import useInfinityScrollObserver from '@/shared/hooks/useInfinityScrollObserver';

/**
 * /archive 페이지에서 notion Page 데이터를 렌더링하는 컴포넌트
 *  서버에서 page list를 페치해와서 tbody에 row 형태로 뿌린다.
 */
export const ArchiveList = () => {
  const query = useSearchModalStore((state) => state.query);
  const setQuery = useSearchModalStore((state) => state.setQuery);
  const { pages, isLoading, fetchNextPage, hasMore, isFetchingNextPage } =
    useInfinityPages({
      query: query,
    });

  // 중복 호출 방지를 위해 isFetchingNextPage 상태 체크
  const handleIntersect = () => {
    if (hasMore && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  const targetRef = useInfinityScrollObserver({
    onIntersect: handleIntersect,
    rootMargin: '100px', // 미리 로딩
    threshold: 0.1,
  });

  // 컨포넌트 언마운트 시 query 리셋
  useEffect(() => {
    return () => {
      setQuery(null);
    };
  }, [setQuery]);

  /**
   * 로딩 중
   */
  if (isLoading) {
    return (
      <tbody>
        <tr>
          <td colSpan={4}>
            <div className="flex justify-center items-center h-[400px]">
              <Loader2 className="text-primary animate-spin" size={100} />
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  /**
   * 결과가 없는 경우
   */
  if (pages.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={4}>
            <div className="flex justify-center items-center h-[400px] text-slate-400 text-lg">
              결과가 없습니다.
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <>
      <tbody>
        {/** 데이터 페칭  */}
        {pages.map(({ properties, id }) => {
          const pageData = { ...properties, id } as NotionPageProperties;
          const formatted = formatPageData({ ...pageData });
          return <PageRow {...formatted} key={id} />;
        })}
      </tbody>
      {/* page 목록이 더 있으면 렌더링 */}
      {hasMore && <tfoot ref={targetRef}></tfoot>}
    </>
  );
};
