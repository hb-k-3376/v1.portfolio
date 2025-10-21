import Image from 'next/image';

interface Props {
  image: string;
  tech: string;
  url: string;
}

export const TechStackCard = ({ image, tech, url }: Props) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block transition-all group-hover/list:opacity-50 hover:opacity-100 focus-visible:opacity-100"
      >
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-4 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-focus-visible:bg-slate-800/50 lg:group-focus-visible:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-focus-visible:drop-shadow-lg" />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center aspect-square size-20">
            <Image
              src={`/images/techs/${image}`}
              alt={`${tech} logo`}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <span className="text-sm text-slate-200 font-medium whitespace-nowrap text-center">
            {tech}
          </span>
        </div>
      </a>
    </li>
  );
};
