import clsx from 'clsx';
import { Menu } from '../model/type';

interface Props extends Menu {
  isActive: boolean;
}

export const NavItem = ({ name, path, isActive }: Props) => {
  return (
    <li>
      <a href={path} className="group flex items-center py-3 cursor-pointer">
        <span
          className={clsx(
            'mr-4 h-px transition-all',
            'group-hover:w-16 group-hover:bg-base group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none',
            {
              'w-16 bg-primary': isActive,
              'w-8 bg-slate-600': !isActive,
            }
          )}
        />
        <span
          className={clsx(
            'text-xs leading-tight font-bold tracking-widest group-hover:text-base group-focus-visible:text-primary uppercase',
            {
              'text-primary': isActive,
              'text-muted': !isActive,
            }
          )}
        >
          {name}
        </span>
      </a>
    </li>
  );
};
