import { ArrowUpRight } from 'lucide-react';
import { tw } from '../lib';

interface Props {
  children: React.ReactNode;
  slug?: string;
  className?: string;
}

export const Title = ({ children, slug, className }: Props) => {
  const targetHref = slug && slug.startsWith('http') ? slug : `/archive/${slug}`;

  return (
    <h3
      className={tw('font-medium leading-snug hover:text-primary', className)}
      aria-label={`${children} (opens in a new tab)`}
    >
      <a
        className="group/link inline-flex items-baseline leading-tight text-accent-foreground hover:text-primary"
        target="_blank"
        rel="noopener noreferrer"
        href={targetHref}
      >
        <span className="absolute shrink-0 -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
        <span className="group-focus-visible/link:text-primary">
          {children}
          <span className="inline-block align-bottom">
            <ArrowUpRight
              className="h-4 w-4 ml-1 transition-transform 
                  group-hover/link:-translate-y-1 group-hover/link:translate-x-1 
                  group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 
                  translate-y-px"
            />
          </span>
        </span>
      </a>
    </h3>
  );
};
