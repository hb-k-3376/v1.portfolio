import { ArchiveList } from '@/features/archive';
import TableHeader from '../_components/TableHeader';

export const ArchiveTable = () => {
  return (
    <table className="w-full border-collapse text-left table-fixed">
      <TableHeader />
      <ArchiveList />
    </table>
  );
};
