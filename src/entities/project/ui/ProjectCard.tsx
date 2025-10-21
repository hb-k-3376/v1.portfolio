import Image from 'next/image';
import { Tag, Title } from '@/shared/ui';
import { Project } from '../model';

export const ProjectCard = ({ description, tags, name, image, link, roles }: Project) => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all group-hover/list:opacity-50 hover:opacity-100 sm:grid-cols-8">
        <div className="absolute -inset-x-6 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        <div className="z-10 sm:col-span-6 flex flex-col gap-2 sm:order-2 order-1">
          <Title title={name} slug={link} />
          <p className="text-sm leading-normal whitespace-pre-line">{description}</p>
          <ul className="flex flex-col text-sm leading-normal">
            {roles.map((role, index) => (
              <li key={index}>• {role}</li>
            ))}
          </ul>
          <ul className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag name={tag} key={tag} />
            ))}
          </ul>
        </div>
        <Image
          className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 order-2 sm:col-span-2 sm:translate-y-1 "
          src={image}
          alt={`${name} 페이지`}
          width={200}
          height={120}
        />
      </div>
    </li>
  );
};
