'use client';

import { useScrollObserver } from '@/shared/hooks';
import { menuList } from '../model/constant';
import { NavItem } from './NavItem';
import { SocialList } from './SocialList';

export const Header = () => {
  const sectionIds = menuList.map((item) => item.name);
  const activeId = useScrollObserver(sectionIds);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-accent-foreground sm:text-5xl">
          Kim Hyunbin
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-accent-foreground sm:text-xl">
          Frontend Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-tight text-inherit">
          깊이 있게 고민하고, 꼼꼼하게 구현하여 완성도 높은 사용자 경험을 추구합니다.
        </p>
        <nav className="mt-16 w-max hidden lg:block">
          <ul>
            {menuList.map((menu) => (
              <NavItem {...menu} isActive={activeId === menu.name} key={menu.name} />
            ))}
          </ul>
        </nav>
      </div>
      <SocialList />
    </header>
  );
};
