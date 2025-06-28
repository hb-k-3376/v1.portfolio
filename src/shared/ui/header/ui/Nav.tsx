import clsx from 'clsx';
import { IMenuProps } from '../model/type';
import { ScrollLink } from './ScrollLink';

export const Nav = ({ name, path, isActive }: IMenuProps) => {
  return (
    <li>
      <ScrollLink href={path}>
        <>
          <span
            className={clsx(
              'mr-4 h-px transition-all',
              'group-hover:w-16 group-hover:bg-base group-focus-visible:w-16 group-focus-visible:bg-base motion-reduce:transition-none',
              {
                'w-16 bg-primary': isActive,
                'w-8 bg-slate-600': !isActive,
              }
            )}
          />
          <span
            className={clsx(
              'text-xs leading-tight font-bold tracking-widest group-hover:text-base group-focus-visible:text-base uppercase',
              {
                'text-primary': isActive,
                'text-muted': !isActive,
              }
            )}
          >
            {name}
          </span>
        </>
      </ScrollLink>
    </li>
  );
};
