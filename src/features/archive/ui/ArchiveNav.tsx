'use client';

import clsx from 'clsx';
import {
  LayoutPanelLeft,
  FolderArchive,
  Search,
  ListRestart,
} from 'lucide-react';
import Link from 'next/link';
import { useSearchModalStore } from '../hook/useSearchModalStore';

/**
 * Archive 페이지 SNB
 */
export const ArchiveNav = () => {
  const open = useSearchModalStore((state) => state.open);
  const setQuery = useSearchModalStore((state) => state.setQuery);

  const handleClickSearch = () => {
    open();
  };

  const handleResetQuery = () => {
    setQuery(null);
  };

  return (
    <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:w-[50px] lg:bg-slate-950 lg:h-screen lg:items-center lg:justify-center">
      <ul
        className={clsx(
          'flex flex-col items-center gap-6',
          'transition-all duration-800 ease-in-out'
        )}
      >
        <li className="cursor-pointer hover:text-primary" title="Home">
          <Link href={'/'} className="focus-visible:text-primary">
            <LayoutPanelLeft />
          </Link>
        </li>
        <li className="cursor-pointer hover:text-primary" title="Archive">
          <Link href={'/archive'} className="focus-visible:text-primary">
            <FolderArchive />
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-primary flex items-center"
          title="Search"
        >
          <button
            type="button"
            className="focus-visible:text-primary"
            onClick={handleClickSearch}
          >
            <Search />
          </button>
        </li>
        <li
          className="cursor-pointer hover:text-primary flex items-center"
          title="Reset list"
        >
          <button
            type="button"
            className="focus-visible:text-primary"
            onClick={handleResetQuery}
          >
            <ListRestart />
          </button>
        </li>
      </ul>
    </nav>
  );
};
