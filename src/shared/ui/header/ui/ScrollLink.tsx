'use client';

export const ScrollLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = () => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="group flex items-center py-3">
      {children}
    </a>
  );
};
