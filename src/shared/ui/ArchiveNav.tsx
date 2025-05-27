import clsx from 'clsx';
import { LayoutPanelLeft, FolderArchive, Search } from 'lucide-react';
import Link from 'next/link';

export const ArchiveNav = () => {
  return (
    <nav className="fixed w-[50px] bg-slate-950 h-screen flex items-center justify-center">
      <ul className={clsx('flex flex-col items-center gap-10', 'transition-all duration-800 ease-in-out')}>
        <li className="cursor-pointer hover:text-teal-300" title="portfolio">
          <Link href={'/'}>
            <LayoutPanelLeft />
          </Link>
        </li>
        <li className="cursor-pointer hover:text-teal-300" title="Archive">
          <Link href={'/archive'}>
            <FolderArchive />
          </Link>
        </li>
        <li className="cursor-pointer hover:text-teal-300" title="Search">
          <Search />
        </li>
      </ul>
    </nav>
  );
};
