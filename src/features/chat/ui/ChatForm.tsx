import { useEffect, useRef } from 'react';
import { ArrowUp, Loader2 } from 'lucide-react';
import { ChatStatus } from 'ai';
import { QuestionSection } from './QuestionSection';

interface Props {
  onSendMessage: (params: { text: string }) => void;
  status: ChatStatus;
}

export const ChatForm = ({ onSendMessage, status }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const isProcessing = status === 'streaming' || status === 'submitted';

  useEffect(() => {
    if (!isProcessing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isProcessing]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;
    const trimmed = inputRef.current.value.trim();

    if (trimmed.length > 0) onSendMessage({ text: trimmed });
    inputRef.current.value = '';
  };

  return (
    <div className="sticky bottom-0 lg:bottom-24 right-0 left-0 bg-accent-foreground rounded-lg">
      <form onSubmit={handleSendMessage} className="flex gap-3.5 mx-3.5 my-2.5">
        <input
          ref={inputRef}
          className="flex-1 text-background"
          type="text"
          name=""
          placeholder="ask about me!"
          disabled={isProcessing}
        />
        <QuestionSection onSendMessage={onSendMessage} />
        <button
          type="submit"
          disabled={isProcessing}
          className="flex-center bg-black text-accent-foreground p-2 rounded-md cursor-pointer hover:bg-teal-600 active:scale-[0.98] transition-colors duration-200 focus:bg-black/80"
        >
          {isProcessing ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <ArrowUp size={18} />
          )}
        </button>
      </form>
    </div>
  );
};
