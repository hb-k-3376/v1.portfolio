'use client';

import { PageRow } from '@/entities/page';
import { formatPageData } from '@/entities/page/model/helper';
import { PageObjectResponse } from '@notionhq/client';
import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 * /archive 페이지에서 notion Page 데이터를 렌더링하는 컴포넌트
 *  서버에서 page list를 페치해와서 tbody에 row 형태로 뿌린다.
 */
export const ArchiveList = () => {
  const [pages, setPages] = useState<PageObjectResponse[]>([]);

  /**
   *  fetch 함수
   *  axios를 사용해서 데이터를 불러옴
   */
  const fetchNotionData = async () => {
    const res = await axios.get('/api/notion/');
    setPages(res.data.body);
  };

  useEffect(() => {
    fetchNotionData();
  }, []);

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
