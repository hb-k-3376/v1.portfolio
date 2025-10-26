'use client';

import { URL_TYPE_LABELS } from '../model/constants';
import { Url } from '../model/type';
import { tw } from '@/shared/lib';

interface Props {
  urls: Url[];
  name: string;
  className?: string;
}
export const ActionButton = ({ urls, name, className }: Props) => {
  return (
    <ul
      className={tw('flex gap-2.5 relative z-20 text-sm', className)}
      role="list"
      aria-label={`${name} 프로젝트 링크`}
      onClick={(e) => e.stopPropagation()}
    >
      {urls.map((url) => {
        return (
          <li key={url.type}>
            <a
              href={url.link}
              target="_blank"
              rel="noopener noreferrer"
              className={tw(
                'text-muted-foreground hover:text-primary transition-color focus-visible:text-primary uppercase underline',
                !url.isActive && 'pointer-events-none line-through'
              )}
            >
              <span className="sr-only"> (새 탭에서 열림)</span>
              {URL_TYPE_LABELS[url.type]}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
