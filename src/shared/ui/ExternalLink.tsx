import Link from 'next/link';

interface IExternalLinkProp {
  href: string;
  className?: string;
  ariaLabel: string;
  title: string;
  children: React.ReactNode;
}
/**
 * 소셜 외부 링크 컴포넌트
 */
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
