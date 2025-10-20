import { PagesApiResponse } from '@/entities/page';
import { getPages } from '@/entities/page/api/queries';
import { SearchBox } from '@/features/archive';
import { BackButton } from '@/shared/ui';
import { ArchiveHeader, ArchiveTable } from '@/widgets/archive';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

interface Props {
  searchParams: Promise<{ query: string }>;
}

/**
 * 노션에서 불러오는 archive list
 */
export default async function page({ searchParams }: Props) {
  const queryClient = new QueryClient();
  const { query } = await searchParams;

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['pages', query],
    queryFn: async ({ pageParam }) => {
      return await getPages({
        pageSize: 15,
        searchQuery: query,
        cursor: pageParam ?? null,
      });
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.has_more ? lastPage.next_cursor : undefined;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="lg:py-24">
        <BackButton label="Hyunbin" path="/" />
        <ArchiveHeader />
        <ArchiveTable />
        <SearchBox />
      </div>
    </HydrationBoundary>
  );
}
