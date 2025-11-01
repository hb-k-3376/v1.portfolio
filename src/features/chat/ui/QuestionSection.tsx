import { Sparkles } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/shadcn/popover';
import { exampleQuestions } from '../model/constants';

interface Props {
  onSendMessage: (params: { text: string }) => void;
}

export const QuestionSection = ({ onSendMessage }: Props) => {
  const handleExampleClick = (question: string) => {
    onSendMessage({ text: question });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="flex-center mr-2 cursor-pointer transition-colors duration-200 text-background/80 hover:text-primary focus:text-primary"
          aria-label="예시 질문 보기"
        >
          <Sparkles size={18} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-1" side="top" align="end">
        <ul role="list">
          {exampleQuestions.map((question, idx) => (
            <li key={idx}>
              <button
                type="button"
                className="w-full rounded-sm p-3 text-sm cursor-pointer hover:bg-black/60"
                onClick={() => handleExampleClick(question)}
              >
                {question}
              </button>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
