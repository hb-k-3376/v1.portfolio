'use client';

import { useScrollSpy } from '@/hooks';
import { MENU_LIST } from '../model/constant';
import { Nav } from './Nav';
import { ExternalLink } from '../../ExternalLink';

export const Header = () => {
  const sectionIds = MENU_LIST.map((item) => item.name);
  const activeId = useScrollSpy(sectionIds);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Hyunbin Kim</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front end Engineer</h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <nav className="mt-16 w-max hidden lg:block">
          <ul>
            {MENU_LIST.map((menu, idx) => (
              <Nav {...menu} isActive={activeId === menu.name} key={idx} />
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 shrink-0 text-xs">
          <ExternalLink
            href="https://github.com/Priest-kim"
            ariaLabel="Github (opens in a new tab)"
            title="Github"
            className="block hover:text-slate-200 focus-visible:text-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </ExternalLink>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <ExternalLink
            href="https://github.com/Priest-kim"
            ariaLabel="LinkedIn (opens in a new tab)"
            title="LinkedIn"
            className="block hover:text-slate-200 focus-visible:text-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </ExternalLink>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <ExternalLink
            href="mailto:hyunbin.kim.3376@email.com"
            ariaLabel="Open Email (opens in a new tab)"
            title="Email"
            className="block hover:text-slate-200 focus-visible:text-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20H15V18H10C5.66 18 2 14.34 2 10C2 5.66 5.66 2 10 2C14.34 2 18 5.66 18 10V11.43C18 12.22 17.29 13 16.5 13C15.71 13 15 12.22 15 11.43V10C15 7.24 12.76 5 10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C11.38 15 12.64 14.44 13.54 13.53C14.19 14.42 15.31 15 16.5 15C18.47 15 20 13.4 20 11.43V10C20 4.48 15.52 0 10 0ZM10 13C8.34 13 7 11.66 7 10C7 8.34 8.34 7 10 7C11.66 7 13 8.34 13 10C13 11.66 11.66 13 10 13Z" />
            </svg>
          </ExternalLink>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <ExternalLink
            href="https://leetcode.com/u/priest-kim/"
            ariaLabel="Leet Code (opens in a new tab)"
            title="Leet Code"
            className="block hover:text-slate-200 focus-visible:text-slate-200 m-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          </ExternalLink>
        </li>
      </ul>
    </header>
  );
};
