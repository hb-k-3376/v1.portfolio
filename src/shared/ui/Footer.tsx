export const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        이 프로젝트는&nbsp;
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </a>
        로 만들었으며,
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        로 스타일링 했습니다.
        <br />더 자세한 내용은 제&nbsp;
        <a
          href="https://github.com/Priest-kim/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github(opens in a new tab)"
        >
          Github
        </a>
        를 참고하시면 됩니다.
        <br />
        Portfolio inspired by&nbsp;
        <a
          href="https://github.com/bchiang7"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (opens in a new tab)"
        >
          Brittany Chiang
        </a>
        's design aesthetic.
      </p>
    </footer>
  );
};
