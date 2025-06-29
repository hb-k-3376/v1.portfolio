import { Loader2 } from 'lucide-react';

export const SectionLoading = () => {
  return (
    <div className="flex justify-center items-center bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] rounded-md drop-shadow-lg p-10">
      <Loader2 className="animate-spin" size={30} />
    </div>
  );
};
