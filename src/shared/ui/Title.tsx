import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const Title = ({ title, slug }: { title: string; slug: string }) => {
  const targetHref = slug.startsWith('http') ? slug : `/archive/${slug}`;

  return (
    <h3
      className="font-medium leading-snug group-hover:text-primary"
      aria-label={`${title} (opens in a new tab)`}
    >
      <div>
        <Link
          className="group/link inline-flex items-baseline leading-tight text-base hover:text-primary"
          target="_blank"
          href={targetHref}
        >
          <span className="absolute shrink-0 -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span className="group-focus-visible/link:text-primary">
            {title}
            <span className="inline-block align-bottom">
              <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 translate-y-px" />
            </span>
          </span>
        </Link>
      </div>
    </h3>
  );
};
