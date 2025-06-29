import { ArchiveList, ArchiveNav } from '@/features/archive';
import { SearchBox } from '@/features/archive/ui/SearchBox';
import { BackButton } from '@/shared/ui';

/**
 * 노션에서 불러오는 archive list
 */
export default function page() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:py-24">
        <SearchBox />
        <ArchiveNav />
        <BackButton label="Hyunbin" path="/" />
        <h1 className="text-4xl font-bold tracking-tight text-base sm:text-5xl">Archive</h1>
        <table className="mt-12 w-full border-collapse text-left table-fixed">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 w-1/12 text-sm font-semibold text-base">created</th>
              <th className="py-4 pr-8 w-1/6 text-sm font-semibold text-base">subject</th>
              <th className="hidden py-4 pr-8 w-1/5 text-sm font-semibold text-base md:table-cell">tags</th>
              <th className="hidden py-4 w-1/4 pr-8 text-sm font-semibold text-base lg:table-cell">desc</th>
            </tr>
          </thead>
          <ArchiveList />
        </table>
      </div>
    </main>
  );
}
