import { Menu } from '../model/type';
import { tw } from '@/shared/lib';

interface Props extends Menu {
  isActive: boolean;
}

export const NavItem = ({ name, path, isActive }: Props) => {
  return (
    <li>
      <a href={path} className="group flex items-center py-3 cursor-pointer">
        <span
          className={tw(
            'mr-4 h-px transition-all',
            'group-hover:w-16 group-hover:bg-accent-foreground group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none',
            isActive && 'w-16 bg-primary',
            !isActive && 'w-8 bg-slate-600'
          )}
        />
        <span
          className={tw(
            'text-xs leading-tight font-bold tracking-widest group-hover:text-accent-foreground group-focus-visible:text-primary uppercase',
            isActive && 'text-primary',
            !isActive && 'text-muted-foreground'
          )}
        >
          {name}
        </span>
      </a>
    </li>
  );
};
