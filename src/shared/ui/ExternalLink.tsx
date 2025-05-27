import Link from 'next/link';

interface IExternalLinkProp {
  href: string;
  className?: string;
  ariaLabel: string;
  title: string;
  children: React.ReactNode;
}
export const ExternalLink = ({ href, className, ariaLabel, title, children }: IExternalLinkProp) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </Link>
  );
};
