'use client';

import { tw } from '@/shared/lib';
import { ProjectUrl } from '../model/type';
import { ProjectLink } from './ProjectLink';

interface Props {
  urls: ProjectUrl[];
  title: string;
  className?: string;
}
export const ActionLinks = ({ urls, title, className }: Props) => {
  return (
    <ul
      className={tw('flex gap-2.5 relative z-20', className)}
      role="list"
      aria-label={`${title} 프로젝트 링크`}
      onClick={(e) => e.stopPropagation()}
    >
      {urls.map((url) => (
        <ProjectLink url={url} key={url.type} />
      ))}
    </ul>
  );
};
