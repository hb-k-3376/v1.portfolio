import { formatPageData, PageRow } from '@/entities/page';
import { NotionPageProperties } from '@/shared/types';
import { PageObjectResponse } from '@notionhq/client';
import { Loader2 } from 'lucide-react';
import { RefObject } from 'react';

interface Props {
  pages: PageObjectResponse[];
  isLoading: boolean;
  hasMore: boolean;
  targetRef: RefObject<HTMLTableSectionElement | null>;
}

export const ArchiveTable = ({ pages, hasMore, isLoading, targetRef }: Props) => {
  return (
    <table className="w-full border-collapse text-left table-fixed">
      <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
        <tr className="text-sm font-semibold text-normal">
          <th className="py-4 pr-8 w-24 md:w-1/12">created</th>
          <th className="py-4 pr-8 w-2/3 md:w-1/6">subject</th>
          <th className="hidden py-4 pr-8 w-1/5 md:table-cell">tags</th>
          <th className="hidden py-4 w-1/4 pr-8 lg:table-cell">desc</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          // 로딩 상태
          <tr>
            <td colSpan={4}>
              <div className="flex justify-center items-center h-[400px]">
                <Loader2 className="text-primary animate-spin" size={100} />
              </div>
            </td>
          </tr>
        ) : pages.length === 0 ? (
          // 빈 결과 상태
          <tr>
            <td colSpan={4}>
              <div className="flex justify-center items-center h-[400px] text-slate-400 text-lg">
                결과가 없습니다.
              </div>
            </td>
          </tr>
        ) : (
          // 데이터가 있는 경우
          pages.map(({ properties, id }) => {
            const pageData = { ...properties, id } as NotionPageProperties;
            const formatted = formatPageData({ ...pageData });
            return <PageRow {...formatted} key={id} />;
          })
        )}
      </tbody>

      {/* <tfoot>도 테이블 내부에 위치 */}
      {hasMore && <tfoot ref={targetRef} />}
    </table>
  );
};
