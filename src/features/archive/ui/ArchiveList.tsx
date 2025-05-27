import { PageRow } from '@/entities/page';
import { formatPageData } from '@/entities/page/model/helper';
import { getPages } from '../services';

/**
 * /archive 페이지에서 notion Page 데이터를 렌더링하는 컴포넌트
 *  서버에서 page list를 페치해와서 tbody에 row 형태로 뿌린다.
 */
export const ArchiveList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3초 대기
  const pages = await getPages();

  return (
    <table className="mt-12 w-full border-collapse text-left table-fixed">
      <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
        <tr>
          <th className="py-4 pr-8 w-1/12 text-sm font-semibold text-slate-200">created</th>
          <th className="py-4 pr-8 w-1/6 text-sm font-semibold text-slate-200">subject</th>
          <th className="hidden py-4 pr-8 w-1/5 text-sm font-semibold text-slate-200 md:table-cell">tags</th>
          <th className="hidden py-4 w-1/4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">desc</th>
        </tr>
      </thead>
      <tbody>
        {pages.map((page, idx) => {
          const formatted = formatPageData({ ...page.properties, id: page.id });
          return <PageRow {...formatted} key={idx} />;
        })}
      </tbody>
    </table>
  );
};
