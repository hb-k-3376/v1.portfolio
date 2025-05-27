'use client';

import clsx from 'clsx';
import { LayoutPanelLeft, FolderArchive, Search } from 'lucide-react';
import Link from 'next/link';
import { useSearchModalStore } from '../hook/useSearchModalStore';

export const ArchiveNav = () => {
  const open = useSearchModalStore((state) => state.open);

  const handleClickSearch = () => {
    open();
  };

  return (
    <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:w-[50px] lg:bg-slate-950 lg:h-screen lg:items-center lg:justify-center">
      <ul className={clsx('flex flex-col items-center gap-10', 'transition-all duration-800 ease-in-out')}>
        <li className="cursor-pointer hover:text-teal-300 " title="portfolio">
          <Link href={'/'} className="focus-visible:text-teal-300">
            <LayoutPanelLeft />
          </Link>
        </li>
        <li className="cursor-pointer hover:text-teal-300" title="Archive">
          <Link href={'/archive'} className="focus-visible:text-teal-300">
            <FolderArchive />
          </Link>
        </li>
        <li className="cursor-pointer hover:text-teal-300" title="Search">
          <button type="button" className="focus-visible:text-teal-300" onClick={handleClickSearch}>
            <Search />
          </button>
        </li>
      </ul>
    </nav>
  );
};
