import { SearchBox } from '@/features/archive/ui/SearchBox';
import ArchiveHeader from '../_components/ArchiveHeader';
import ArchiveTable from '../_components/ArchiveTable';

const ArchiveView = () => {
  return (
    <>
      <SearchBox />
      <ArchiveHeader />
      <ArchiveTable />
    </>
  );
};
export default ArchiveView;
