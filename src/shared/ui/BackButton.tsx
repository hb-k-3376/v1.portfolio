import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BackButtonProps {
  path: string;
  label: string;
}

export const BackButton = ({ path, label }: BackButtonProps) => {
  return (
    <Link
      className="group text-primary mb-2 inline-flex items-center font-semibold leading-tight"
      href={path}
    >
      <ArrowLeft
        className="mr-1 w-4 h-4 transition-transform group-hover:-translate-x-2 group-focus:-translate-x-2"
        fill="currentColor"
        aria-hidden="true"
      />
      {label}
    </Link>
  );
};
