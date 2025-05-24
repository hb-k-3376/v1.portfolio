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
              'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none',
              {
                'w-16 bg-slate-200': isActive,
                ' w-8 bg-slate-600': !isActive,
              }
            )}
          />
          <span
            className={clsx(
              'text-sm leading-tight font-bold tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200',
              {
                'text-slate-200': isActive,
                'text-slate-500': !isActive,
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
