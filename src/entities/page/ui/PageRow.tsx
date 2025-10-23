'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { Page } from '../model/';
import { Badge } from '@/shared/ui';

/**
 *  Page 데이터를 row 형태로 보여주느 entity
 */
export const PageRow = ({ created_time, tags, title, slug }: Page) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <tr
      className="group border-b border-slate-300/10 last:border-none cursor-pointer"
      onClick={handleClick}
    >
      <td className="py-4 pr-4 align-top leading-tight text-sm">
        <p>{created_time}</p>
      </td>
      <td className="py-4 pr-4 align-top leading-tight text-gray-50">
        <Link
          href={`/archive/${slug}`}
          ref={linkRef}
          className="group-hover:text-primary focus-visible:text-primary leading-tight"
        >
          {title}
        </Link>
      </td>
      <td className="hidden py-4 pr-4 md:table-cell">
        <ul className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Badge name={tag.name} key={tag.id} />
          ))}
        </ul>
      </td>
      <td className="hidden py-4 pr-4 align-top leading-tight text-sm lg:table-cell ">
        <p className="truncate">{slug}</p>
      </td>
    </tr>
  );
};
