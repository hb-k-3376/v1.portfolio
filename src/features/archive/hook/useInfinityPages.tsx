import { getPages } from '@/features/archive';
import { PageObjectResponse } from '@notionhq/client';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

interface IUsePagesQueryProps {
  query: string | null;
}
/**
 * @description  페이지 목록을 서버에서 가져오고, 로딩 상태와 함께 반환하는 커스텀 훅
 * @param {number} object.pageSize 처음 보여줄 row 수
 * @returns
 */
export const useInfinityPages = ({ query }: IUsePagesQueryProps) => {
  const getPagesQuery = useInfiniteQuery<
    {
      pages: PageObjectResponse[];
      next_cursor: string | null;
      has_more: boolean;
    },
    Error,
    InfiniteData<{
      pages: PageObjectResponse[];
      next_cursor: string | null;
      has_more: boolean;
    }>,
    (string | null)[],
    string | null
  >({
    queryKey: ['pages', query],
    queryFn: ({ pageParam }) => {
      return getPages({ query, cursor: pageParam });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.has_more ? lastPage.next_cursor : undefined;
    },
  });

  return {
    pages: getPagesQuery.data?.pages.flatMap((page) => page.pages) ?? [],
    hasMore: getPagesQuery.hasNextPage,
    isLoading: getPagesQuery.isPending,
    fetchNextPage: getPagesQuery.fetchNextPage,
  };
};
