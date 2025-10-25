'use client';

import { URL_TYPE_LABELS } from '../model/constants';
import { Url } from '../model/type';
import { tw } from '@/shared/lib';

interface Props {
  urls: Url[];
  className?: string;
}
export const ActionButton = ({ urls, className }: Props) => {
  return (
    <ul
      className={tw('flex gap-2.5 relative z-20 text-sm', className)}
      onClick={(e) => e.stopPropagation()}
    >
      {urls.map((url) => {
        return (
          <li key={url.type}>
            <a
              href={url.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-color focus-visible:text-primary uppercase underline"
            >
              {URL_TYPE_LABELS[url.type]}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
