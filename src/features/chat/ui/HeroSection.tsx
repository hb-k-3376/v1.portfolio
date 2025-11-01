import { Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-16 px-4">
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <div className="space-y-3">
          <h1 className="text-balance text-center text-4xl font-semibold tracking-tight text-foreground">
            무엇을 도와드릴까요?
          </h1>
          <p className="text-pretty text-center text-base text-muted-foreground">
            아래 예시 질문을 선택하거나 직접 질문해보세요
          </p>
        </div>
      </div>
    </div>
  );
};
