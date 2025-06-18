import { ArchiveList, ArchiveNav, getPages } from '@/features/archive';
import { SearchBox } from '@/features/archive/ui/SearchBox';
import { ARCHIVE_PAGE_SIZE } from '@/shared/constants';
import { BackButton } from '@/shared/ui';

/**
 * 노션에서 불러오는 archive list
 */
export const dynamic = 'force-dynamic'; // api 같은 외부 api를 서버 사이드에서 호출하려고 할 시 에 문제가 됨

export default async function page() {
  const initialData = await getPages({ pageSize: ARCHIVE_PAGE_SIZE, query: null });
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:py-24">
        <SearchBox />
        <ArchiveNav />
        <BackButton label="Hyunbin" path="/" />
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Archive</h1>
        <ArchiveList initialData={initialData.pages} />
      </div>
    </main>
  );
}
