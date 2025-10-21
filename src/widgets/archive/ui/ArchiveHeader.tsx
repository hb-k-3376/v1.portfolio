import { SearchBox, SearchInput } from '@/features/archive';
import { BackButton } from '@/shared/ui';

export const ArchiveHeader = () => {
  return (
    <header className="flex flex-col justify-between mb-6">
      <BackButton label="Hyun-bin" path="/" />
      <div className="flex flex-col justify-between sm:flex-row">
        <h1 className="text-4xl font-bold tracking-tight text-base sm:text-5xl">
          Archive
        </h1>
        <SearchInput />
      </div>
      <SearchBox />
    </header>
  );
};
