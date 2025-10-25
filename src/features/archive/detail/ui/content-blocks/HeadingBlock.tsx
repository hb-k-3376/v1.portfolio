import { tw } from '@/shared/lib';

interface IHeadingBlockProps {
  level: 1 | 2 | 3;
  children: React.ReactNode;
}

export const HeadingBlock = ({ level, children }: IHeadingBlockProps) => {
  const commonClasses = 'font-bold mt-6 md-3';

  switch (level) {
    case 1:
      return <h1 className={tw(commonClasses, 'text-3xl pb-2')}>{children}</h1>;
    case 2:
      return <h2 className={tw(commonClasses, 'text-2xl pb-1')}>{children}</h2>;
    case 3:
      return <h3 className={tw(commonClasses, 'text-xl')}>{children}</h3>;
    default:
      return <p>{children}</p>;
  }
};
