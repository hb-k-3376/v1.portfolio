import { PagesApiResponse } from '@/entities/page';
import { getPages } from '@/entities/page/api/queries';
import { ArchiveListView } from '@/widgets/archive';
import {
  dehydrate,
  HydrationBoundary,
  InfiniteData,
  QueryClient,
} from '@tanstack/react-query';

interface Props {
  searchParams: Promise<{ query: string }>;
}

export default async function page({ searchParams }: Props) {
  const { query } = await searchParams;
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery<
    PagesApiResponse,
    Error,
    InfiniteData<PagesApiResponse>,
    string[],
    string | null
  >({
    queryKey: ['pages', query ?? null],
    queryFn: ({ pageParam }) => getPages({ query, cursor: pageParam, pageSize: 15 }),
    initialPageParam: null,
    getNextPageParam: (lastPage: PagesApiResponse) => lastPage.next_cursor,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="lg:py-24">
        <ArchiveListView />
      </div>
    </HydrationBoundary>
  );
}
