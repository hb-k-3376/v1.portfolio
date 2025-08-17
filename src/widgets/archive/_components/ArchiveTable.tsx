import { ArchiveList } from '@/features/archive';
import TableHeader from './TableHeader';

export const ArchiveTable = () => {
  return (
    <table className="w-full border-collapse text-left table-fixed">
      <TableHeader />
      <ArchiveList />
    </table>
  );
};
