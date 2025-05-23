'use client';

import { PageRow } from '@/entities/project';
import { formatPageData } from '@/entities/project/model/helper';
import { PageObjectResponse } from '@notionhq/client';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Archive() {
  const [pages, setPages] = useState<PageObjectResponse[]>([]);
  const fetchNotionData = async () => {
    const res = await axios.get('/api/notion/pages');
    setPages(res.data.body);
  };

  useEffect(() => {
    fetchNotionData();
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:py-24">
        <Link className="group text-teal-300 mb-2 inline-flex items-center font-semibold leading-tight " href={'/'}>
          <ArrowLeft className="mr-1 w-4 h-4 transition-transform group-hover:-translate-x-2" fill="currentColor" />
          Hyunbin
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Archive</h1>
        <table className="mt-12 w-full border-collapse text-left table-fixed">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="hidden py-4 pr-8 w-1/9 text-sm font-semibold text-slate-200 lg:table-cell">created</th>
              <th className="py-4 pr-8 w-1/4 text-sm font-semibold text-slate-200">subject</th>
              <th className="py-4 pr-8 w-1/5 text-sm font-semibold text-slate-200">tags</th>
              <th className="hidden py-4 w-1/4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">desc</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, idx) => {
              const formatted = formatPageData(page.properties);

              return <PageRow {...formatted} key={idx} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
