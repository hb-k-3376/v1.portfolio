'use client';

import { MENU_LIST } from '../model/constant';
import { useScrollSpy } from '@/shared/hooks';
import { Nav } from './Nav';

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
            {MENU_LIST.map((menu, idx) => (
              <Nav {...menu} isActive={activeId === menu.name} key={idx} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
