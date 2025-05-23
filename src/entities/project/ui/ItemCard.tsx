import { Tag } from '@/shared/ui/Tag';
import { Title } from '@/shared/ui/Title';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Fragment } from 'react';

export const ItemCard = ({ page }: { page?: PageObjectResponse }) => {
  return (
    <div className="group relative z-0 pb-1 transition-all group-hover/list:opacity-50 hover:opacity-100">
      <div className="absolute -inset-x-6 -inset-y-6 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="relative z-10">
        <Title title={'리액트'} />
        <p className="mt-2 text-sm leading-normal">
          Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the
          principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
        </p>
        <ul className="mt-2 flex flex-wrap">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <Fragment key={idx}>
                <Tag name="react" />
              </Fragment>
            ))}
        </ul>
      </div>
    </div>
  );
};
