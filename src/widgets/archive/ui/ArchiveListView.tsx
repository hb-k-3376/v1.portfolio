import { ArchiveHeader } from './ArchiveHeader';
import { ArchiveTable } from '@/features/archive';

export const ArchiveListView = () => {
  return (
    <>
      <ArchiveHeader />
      <ArchiveTable />
    </>
  );
};
