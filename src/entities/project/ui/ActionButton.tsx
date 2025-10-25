'use client';

import Link from 'next/link';
import { URL_TYPE_ICONS, URL_TYPE_LABELS } from '../model/constants';
import { Url } from '../model/type';
import { tw } from '@/shared/lib';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/shadcn/tooltip';

interface Props {
  urls: Url[];
  className?: string;
}
export const ActionButton = ({ urls, className }: Props) => {
  return (
    <ul
      className={tw('flex gap-2.5 relative z-20', className)}
      onClick={(e) => e.stopPropagation()}
    >
      {urls.map((url) => {
        const Icon = URL_TYPE_ICONS[url.type];
        return (
          <li key={url.type}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={url.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-color focus-visible:text-primary"
                >
                  <Icon size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{URL_TYPE_LABELS[url.type]}</p>
              </TooltipContent>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
};
