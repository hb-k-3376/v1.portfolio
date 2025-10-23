'use client';

import Link from 'next/link';
import { Page } from '../model/';
import { Badge } from '@/shared/ui';
import { useRef } from 'react';

/**
 *  Page 데이터를 row 형태로 보여주느 entity
 */
export const PageRow = ({ created_time, description, tags, title, slug }: Page) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (e.currentTarget.closest('a') || e.currentTarget.closest('button')) {
      return;
    }
    e.preventDefault();
    linkRef.current?.click();
  };

  return (
    <tr
      className="group border-b border-slate-300/10 last:border-none cursor-pointer"
      onClick={handleClick}
    >
      <td className="py-4 pr-4 text-sm">
        <p className="whitespace-nowrap">{created_time}</p>
      </td>
      <td className="py-4 pr-4 leading-snug text-white">
        <Link
          href={`/archive/${slug}`}
          ref={linkRef}
          className="group-hover:text-primary focus-visible:text-primary items-baseline leading-tight whitespace-nowrap"
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
      <td className="hidden py-4 pr-4 lg:table-cell max-w-[500px]">
        <p className="truncate">{slug}</p>
      </td>
    </tr>
  );
};
