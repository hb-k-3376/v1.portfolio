'use client';

import Link from 'next/link';
import { IPage } from '../model/types';
import { Tag } from '@/shared/ui/Tag';
import { useRef } from 'react';

/**
 *  Page 데이터를 row 형태로 보여주느 entity
 */
export const PageRow = ({ created_time, description, tags, title, id }: IPage) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (e.currentTarget.closest('a') || e.currentTarget.closest('button')) {
      return;
    }
    e.preventDefault();
    linkRef.current?.click();
  };

  return (
    <tr className="group border-b border-slate-300/10 last:border-none cursor-pointer" onClick={handleClick}>
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">{created_time}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug">
        <Link
          href={`/archive/${id}`}
          ref={linkRef}
          className="group-hover:text-teal-300 group-hover:font-bold focus-visible:text-teal-300 items-baseline leading-tight"
        >
          {title}
        </Link>
      </td>
      <td>
        <ul className="flex -translate-y-1.5 flex-wrap">
          {tags.map((tag, idx) => (
            <Tag name={tag.name} key={idx} />
          ))}
        </ul>
      </td>
      <td>
        <div className="translate-y-px whitespace-nowrap truncate max-w-xs">{description}</div>
      </td>
    </tr>
  );
};
