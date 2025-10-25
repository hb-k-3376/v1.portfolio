'use client';

import { Loader2 } from 'lucide-react';

import { formatPageData, PageRow, useInfinityScrollObserver } from '@/entities/page';
import { NotionPageProperties } from '@/shared/types';
import { useInfinityPages } from '../model';

export const ArchiveTable = () => {
  const { pages, fetchNextPage, hasMore, isFetchingNextPage, isFetching } =
    useInfinityPages();

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

  return (
    <table className="w-full border-collapse text-left table-fixed">
      {/* 테이블 헤더 */}
      <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 py-5 backdrop-blur">
        <tr className="text-sm font-semibold text-accent-foreground">
          <th className="py-4 pr-8 w-24 md:w-1/12">Created</th>
          <th className="py-4 pr-8 w-2/3 md:w-1/6">Title</th>
          <th className="hidden py-4 pr-8 w-1/5 md:table-cell">Built with</th>
          <th className="hidden py-4 w-1/4 pr-8 lg:table-cell">Slug</th>
        </tr>
      </thead>
      <tbody>
        {pages.length === 0 && !isFetching ? (
          // 빈 결과 상태
          <tr>
            <td colSpan={4}>
              <div className="flex-center h-[400px] text-lg">결과가 없습니다.</div>
            </td>
          </tr>
        ) : (
          // 데이터가 있는 경우
          pages.map(({ properties, id }) => {
            const pageData = { ...properties, id } as NotionPageProperties;
            const formatted = formatPageData({ ...pageData });
            return <PageRow {...formatted} key={id} />;
          })
        )}
      </tbody>

      {/* <tfoot>도 테이블 내부에 위치 */}
      <tfoot ref={targetRef}>
        {isFetchingNextPage && (
          <tr>
            <td colSpan={4}>
              <div className="flex-center h-[100px]">
                <Loader2 className="text-primary animate-spin" size={40} />
              </div>
            </td>
          </tr>
        )}
      </tfoot>
    </table>
  );
};
