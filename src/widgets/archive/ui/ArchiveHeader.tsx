import { SearchInput } from '@/features/archive/ui/SearchInput';

export const ArchiveHeader = () => {
  return (
    <header className="flex flex-col sm:flex-row gap-6  justify-between mb-6">
      <h1 className="text-4xl font-bold tracking-tight text-base sm:text-5xl">
        Archive
      </h1>
      <SearchInput />
    </header>
  );
};
