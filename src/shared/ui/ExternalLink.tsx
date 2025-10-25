import Link from 'next/link';
import { forwardRef } from 'react';
import { tw } from '../lib';

interface Props {
  href: string;
  className?: string;
  ariaLabel: string;
  title: string;
  children: React.ReactNode;
}

export const ExternalLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, className, ariaLabel, title, children }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={tw('block hover:text-primary focus-visible:text-primary', className)}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
);
