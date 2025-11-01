'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Switch } from '../shadcn/switch';

export const ModeSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isAi = pathname === '/chat';

  const handleChange = (checked: boolean) => {
    router.push(checked ? '/chat' : '/');
  };
  return (
    <div className="fixed top-2 lg:top-auto lg:bottom-8 right-6 z-50">
      <div className="flex items-center gap-3 transition-colors duration-200">
        <span
          className={`text-sm font-medium transition-colors ${
            !isAi ? 'text-accent-foreground' : 'text-muted-foreground'
          }`}
        >
          포트폴리오
        </span>
        <Switch checked={isAi} onCheckedChange={handleChange} />
        <span
          className={`text-sm font-medium transition-colors ${
            isAi ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          AI
        </span>
      </div>
    </div>
  );
};
