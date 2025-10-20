import { ArchiveListView } from '@/widgets/archive';

/**
 * 노션에서 불러오는 archive list
 */
export default async function page() {
  return (
    <div className="lg:py-24">
      <ArchiveListView />
    </div>
  );
}
