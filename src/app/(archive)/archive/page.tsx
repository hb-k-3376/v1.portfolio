import { BackButton } from '@/shared/ui';
import { ArchiveView } from '@/widgets/archive';

/**
 * 노션에서 불러오는 archive list
 */
export default function page() {
  return (
    <div className="lg:py-24">
      <BackButton label="Hyunbin" path="/" />
      <ArchiveView />
    </div>
  );
}
