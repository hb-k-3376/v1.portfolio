import { FileText } from 'lucide-react';
import Link from 'next/link';

export const Resume = () => {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-teal-400"
    >
      <FileText className="h-4 w-4" />
      <span className="underline decoration-slate-400/50 underline-offset-4 group-hover:decoration-teal-400">
        resume.pdf
      </span>
    </Link>
  );
};
