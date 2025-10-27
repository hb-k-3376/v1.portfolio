'use client';

import { tw } from '@/shared/lib';
import { ProjectUrl } from '../model/type';
import { ProjectLink } from './ProjectLink';

interface Props {
  urls: ProjectUrl[];
  name: string;
  className?: string;
}
export const ActionLinks = ({ urls, name, className }: Props) => {
  return (
    <ul
      className={tw('flex gap-2.5 relative z-20', className)}
      role="list"
      aria-label={`${name} 프로젝트 링크`}
      onClick={(e) => e.stopPropagation()}
    >
      {urls.map((url) => (
        <ProjectLink url={url} key={url.type} />
      ))}
    </ul>
  );
};
