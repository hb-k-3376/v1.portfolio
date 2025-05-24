import { ArchiveList } from '@/features/archive';
import { BackButton } from '@/shared/ui';

export default function page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:py-24">
        <BackButton label="Hyunbin" path="/" />
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Archive</h1>
        <ArchiveList />
      </div>
    </div>
  );
}
