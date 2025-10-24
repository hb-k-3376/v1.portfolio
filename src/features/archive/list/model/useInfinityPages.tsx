'use client';

import { useSearchParams } from 'next/navigation';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { PageCursor, PagesApiResponse, PagesQueryKey } from '@/entities/page';

import { fetchPagesClient } from '../api/client';

export const useInfinityPages = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? null;

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, isFetching } =
    useInfiniteQuery<
      PagesApiResponse,
      Error,
      InfiniteData<PagesApiResponse>,
      PagesQueryKey,
      PageCursor
    >({
      queryKey: ['pages', query],
      queryFn: ({ pageParam }) => {
        return fetchPagesClient({ query, cursor: pageParam });
      },
      initialPageParam: null,
      getNextPageParam: (lastPage: PagesApiResponse) => lastPage.next_cursor,
    });

  return {
    pages: data?.pages.flatMap((page) => page.pages) ?? [],
    hasMore: hasNextPage,
    isFetchingNextPage: isFetchingNextPage,
    isFetching,
    fetchNextPage: fetchNextPage,
  };
};
