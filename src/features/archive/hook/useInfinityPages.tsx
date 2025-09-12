import { getPages } from '@/features/archive';
import { PageObjectResponse } from '@notionhq/client';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

interface IUsePagesQueryProps {
  query: string | null;
}

// 페이지 응답
type PagesApiResponse = {
  pages: PageObjectResponse[];
  next_cursor: string | null;
  has_more: boolean;
};
// 쿼리키
type PagesQueryKey = (string | null)[];
// 커서
type PageCursor = string | null;

/**
 * @description  페이지 목록을 서버에서 가져오고, 로딩 상태와 함께 반환하는 커스텀 훅
 * @param {number} object.pageSize 처음 보여줄 row 수
 * @returns
 */
export const useInfinityPages = ({ query }: IUsePagesQueryProps) => {
  const getPagesQuery = useInfiniteQuery<
    PagesApiResponse,
    Error,
    InfiniteData<PagesApiResponse>,
    PagesQueryKey,
    PageCursor
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
    isFetchingNextPage: getPagesQuery.isFetchingNextPage,
    fetchNextPage: getPagesQuery.fetchNextPage,
  };
};
