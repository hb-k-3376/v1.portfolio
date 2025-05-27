'use client';

import { PageRow } from '@/entities/page';
import { formatPageData } from '@/entities/page/model/helper';
import { PageObjectResponse } from '@notionhq/client';
import { usePagesQuery } from '../hook/usePagesQuery';
import { useEffect, useState } from 'react';
import { ARCHIVE_PAGE_SIZE } from '@/shared/conatants';
import { Loader2 } from 'lucide-react';
import { useSearchModalStore } from '../hook/useSearchModalStore';
import { IFormattedPageData } from '@/entities/page/model/types';

interface IArchiveListProps {
  initialData: PageObjectResponse[];
}

/**
 * /archive 페이지에서 notion Page 데이터를 렌더링하는 컴포넌트
 *  서버에서 page list를 페치해와서 tbody에 row 형태로 뿌린다.
 */
export const ArchiveList = ({ initialData }: IArchiveListProps) => {
  const [currentCursor, setCurrentCursor] = useState<string | undefined>(undefined);

  const query = useSearchModalStore((state) => state.query);

  const { pages, cursor, isLoading } = usePagesQuery({
    initialData: { pages: initialData, cursor: undefined },
    pageSize: ARCHIVE_PAGE_SIZE,
    cursor: currentCursor,
    query,
  });

  // ArchiveList에서 query가 변경될 때 cursor 리셋
  useEffect(() => {
    setCurrentCursor(undefined); // 검색어 변경 시 첫 페이지로
  }, [query]);

  /**
   * TODO : 페이지 네이션
   */
  // const handleNextPage = () => {
  //   setCurrentCursor(cursor);
  // };

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
        {/** 데이터 페칭  */}
        {isLoading ? (
          <tr>
            <td colSpan={4}>
              <div className="flex justify-center items-center h-[300px]">
                <Loader2 className="text-teal-300 animate-spin" size={100} />
              </div>
            </td>
          </tr>
        ) : pages.length === 0 ? ( // 검색 결과가 없는 경우
          <tr>
            <td colSpan={4}>
              <div className="flex justify-center items-center h-[300px] text-slate-400 text-lg">결과가 없습니다.</div>
            </td>
          </tr>
        ) : (
          <>
            {pages.map(({ properties, id }, idx) => {
              const pageData = { ...properties, id } as IFormattedPageData;
              const formatted = formatPageData({ ...pageData });
              return <PageRow {...formatted} key={idx} />;
            })}
          </>
        )}
      </tbody>
    </table>
  );
};
