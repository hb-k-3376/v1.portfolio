'use client';

import { PageRow } from '@/entities/page';
import { formatPageData } from '@/entities/page/model/helper';
import { usePagesQuery } from '../hook/usePagesQuery';
import { useEffect, useState } from 'react';
import { ARCHIVE_PAGE_SIZE } from '@/shared/constants';
import { Loader2 } from 'lucide-react';
import { useSearchModalStore } from '../hook/useSearchModalStore';
import { NotionPageProperties } from '@/shared/types';

/**
 * /archive 페이지에서 notion Page 데이터를 렌더링하는 컴포넌트
 *  서버에서 page list를 페치해와서 tbody에 row 형태로 뿌린다.
 */
export const ArchiveList = () => {
  const [currentCursor, setCurrentCursor] = useState<string | undefined>(
    undefined
  );
  const query = useSearchModalStore((state) => state.query);
  const {
    pages,
    isLoading,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cursor: _cursor, // TODO : 페이지 네이션
  } = usePagesQuery({
    pageSize: ARCHIVE_PAGE_SIZE,
    cursor: currentCursor,
    query: query,
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
    <tbody>
      {/** 데이터 페칭  */}
      {isLoading ? (
        <tr>
          <td colSpan={4}>
            <div className="flex justify-center items-center h-[400px]">
              <Loader2 className="text-primary animate-spin" size={100} />
            </div>
          </td>
        </tr>
      ) : pages.length === 0 ? ( // 검색 결과가 없는 경우
        <tr>
          <td colSpan={4}>
            <div className="flex justify-center items-center h-[400px] text-slate-400 text-lg">
              결과가 없습니다.
            </div>
          </td>
        </tr>
      ) : (
        <>
          {pages.map(({ properties, id }, idx) => {
            const pageData = { ...properties, id } as NotionPageProperties;
            const formatted = formatPageData({ ...pageData });
            return <PageRow {...formatted} key={idx} />;
          })}
        </>
      )}
    </tbody>
  );
};
