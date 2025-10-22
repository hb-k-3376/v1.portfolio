import { Fragment } from 'react';

import { Badge } from '@/shared/ui';
import { Title } from '@/shared/ui/Title';
import { Page } from '../model';

/**
 *  Page 데이터를 card 형태로 보여주느 entity
 */
export const PageCard = ({ created_time, description, tags, title, slug }: Page) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all group-hover/list:opacity-20 hover:opacity-100 sm:grid-cols-8">
        <div className="absolute -inset-x-6 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">
          {created_time}
        </div>
        <div className="z-10 sm:col-span-6 flex flex-col gap-2">
          <Title slug={slug}>{title}</Title>
          <p className="text-sm leading-normal">{description}</p>
          <ul className="flex flex-wrap gap-3">
            {tags?.map((tag) => (
              <Fragment key={tag.id}>
                <Badge name={tag.name} />
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
