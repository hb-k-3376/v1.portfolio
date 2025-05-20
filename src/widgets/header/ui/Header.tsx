import { Link } from 'react-router-dom';
import type { IMenuProps } from '../model/type';
import { MENU_LIST } from '../model/constant';
import { useScrollSpy } from '../../../shared/hooks/useScrlloSpy';
import clsx from 'clsx';

export const Header = () => {
  const sectionIds = MENU_LIST.map((item) => item.name);
  const activeId = useScrollSpy(sectionIds);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Hyunbin Kim</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front end Engineer</h2>
        <nav className="mt-16 w-max">
          <ul>
            {MENU_LIST.map((menu) => (
              <Menu {...menu} isActive={activeId === menu.name} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Menu = ({ name, path, isActive }: IMenuProps) => {
  return (
    <li>
      <Link to={path} className="group flex items-center py-3">
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
            'text-xs font-bold tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200',
            {
              'text-slate-200': isActive,
              'text-slate-500': !isActive,
            }
          )}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};
