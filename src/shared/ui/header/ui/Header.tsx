'use client';

import { useScrollSpy } from '@/hooks';
import { MENU_LIST } from '../model/constant';
import { Nav } from './Nav';
import { SocialList } from './SocialList';

export const Header = () => {
  const sectionIds = MENU_LIST.map((item) => item.name);
  const activeId = useScrollSpy(sectionIds);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-base sm:text-5xl">Hyunbin Kim</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-base sm:text-xl">Frontend Engineer</h2>
        <p className="mt-4 max-w-xs leading-tight text-inherit">
          호기심을 원동력으로, 끈기 있게 사용자 중심의 웹을 만들어갑니다.
          <br />
          깊이 있게 고민하고, 꼼꼼하게 구현하여 완성도 높은 사용자 경험을 추구합니다.
        </p>
        <nav className="mt-16 w-max hidden lg:block">
          <ul>
            {MENU_LIST.map((menu, idx) => (
              <Nav {...menu} isActive={activeId === menu.name} key={idx} />
            ))}
          </ul>
        </nav>
      </div>
      <SocialList />
    </header>
  );
};
