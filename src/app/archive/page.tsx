import { BackButton } from '@/shared/ui';
import ArchiveView from '@/widgets/ui/ArchiveView';

/**
 * 노션에서 불러오는 archive list
 */
export default function page() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:py-24">
        <BackButton label="Hyunbin" path="/" />
        <ArchiveView />
      </div>
    </main>
  );
}
