import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

export const Title = ({ title }: { title: string }) => {
  return (
    <h3 className={clsx('font-medium leading-snug text-slate-200', 'group-hover:text-teal-300')}>
      <a
        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
        target="_blank"
      >
        <span className="absolute shrink-0 -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
        <span>
          {title}
          <span className="inline-block align-bottom">
            <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 translate-y-px" />
          </span>
        </span>
      </a>
    </h3>
  );
};
