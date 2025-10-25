import { TooltipProvider } from '@/shared/shadcn/tooltip';
import { QueryProvider } from './QueryProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <TooltipProvider disableHoverableContent>{children}</TooltipProvider>
    </QueryProvider>
  );
};
