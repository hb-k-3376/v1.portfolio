import { Sparkles } from 'lucide-react';
import { exampleQuestions } from '../model/constants';
import Image from 'next/image';

interface Props {
  onSendMessage: (params: { text: string }) => void;
}

export const HeroSection = ({ onSendMessage }: Props) => {
  const handleExampleClick = (question: string) => {
    onSendMessage({ text: question });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-12 px-4">
      <div className="flex flex-col items-center gap-6">
        <Image
          className="object-contain rounded-md"
          src="/images/hyunbin.webp"
          alt="hyunbin profile"
          width={100}
          height={100}
        />
        <div className="space-y-3">
          <h1 className="text-balance text-center text-4xl font-semibold tracking-tight text-foreground">
            무엇이든 질문해주세요!
          </h1>
          <p className="flex-center text-pretty text-center text-base text-muted-foreground">
            <Sparkles className="inline-block text-primary mr-2" size={15} />
            아래 예시 질문을 선택하거나 직접 질문해보세요.
          </p>
        </div>
      </div>

      <ul className="flex w-full flex-col gap-3" role="list">
        {exampleQuestions.map((question, index) => (
          <li key={index}>
            <button
              type="button"
              className="group cursor-pointer px-5 text-left"
              onClick={() => handleExampleClick(question)}
            >
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground transition-all duration-300 group-hover:text-accent-foreground group-focus-within:text-primary">
                ◦ {question}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
