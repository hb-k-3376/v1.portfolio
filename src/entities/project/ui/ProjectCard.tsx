import Image from 'next/image';
import { Badge, Title } from '@/shared/ui';
import { Project } from '../model';
import { ActionLinks } from './ActionLinks';

export const ProjectCard = ({
  description,
  tags,
  name,
  image,
  retroLink,
  roles,
  urls,
}: Project) => {
  return (
    <li className="mb-12">
      <div className="group relative flex gap-4 transition-opacity group-hover/list:opacity-60 hover:opacity-100">
        <div className="absolute z-0 -inset-x-6 -inset-y-4 rounded-md transition motion-reduce:transition-none lg:group-hover:bg-slate-800/50  lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <div className="hidden sm:block sm:min-w-36 sm:translate-y-1">
          <Image
            className="object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
            src={image}
            fill
            sizes="600px"
            alt={`${name} 페이지`}
          />
        </div>

        <div className="z-10 flex flex-col gap-2">
          <div className="flex justify-between">
            {retroLink ? (
              <Title slug={retroLink}>{name}</Title>
            ) : (
              <h3 className="font-medium leading-snug text-accent-foreground">{name}</h3>
            )}

            {urls && <ActionLinks urls={urls} name={name} className="" />}
          </div>
          <p className="text-sm leading-normal whitespace-pre-line">{description}</p>
          {roles && (
            <ul
              className="flex flex-col text-sm leading-normal"
              aria-label="직접 구현한 기능 리스트"
              role="list"
            >
              {roles.map((role, index) => (
                <li key={index}>• {role}</li>
              ))}
            </ul>
          )}
          <ul className="flex flex-wrap gap-3" aria-label="사용된 기술 스택" role="list">
            {tags.map((tag) => (
              <Badge name={tag} key={tag} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
