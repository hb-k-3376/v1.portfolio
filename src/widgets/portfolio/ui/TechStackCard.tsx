import Image from 'next/image';

interface Props {
  image: string;
  tech: string;
}

export const TechStackCard = ({ image, tech }: Props) => {
  return (
    <li className="group relative block transition-all group-hover/list:opacity-60 hover:opacity-100">
      <div className="absolute -inset-x-3 -inset-y-3 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-3 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-focus-visible:bg-slate-800/50 lg:group-focus-visible:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-focus-visible:drop-shadow-lg" />

      <div className="relative z-10 flex items-center gap-3">
        <Image
          src={`/images/techs/${image}`}
          alt={`${tech} logo`}
          width={5}
          height={5}
          className="object-contain size-5"
          aria-hidden
        />
        <span className="text-sm group-hover:text-primary font-medium whitespace-nowrap text-center">
          {tech}
        </span>
      </div>
    </li>
  );
};
