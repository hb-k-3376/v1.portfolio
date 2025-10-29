import { useRef } from 'react';
import { ArrowUp } from 'lucide-react';

interface Props {
  onSendMessage: (params: { text: string }) => void;
}

export const ChatInput = ({ onSendMessage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;
    const trimmed = inputRef.current.value.trim();

    onSendMessage({ text: trimmed });
    inputRef.current.value = '';
  };

  return (
    <div className="sticky mb-10 bg-accent-foreground rounded-lg">
      <form onSubmit={handleSendMessage} className="flex not-last-of-type:gap-3.5 m-3.5">
        <input
          ref={inputRef}
          className="flex-1 text-background"
          type="text"
          name=""
          placeholder="ask about me!"
        />
        <button
          type="submit"
          className="text-background bg-primary ring-2 ring-teal-600 rounded-md cursor-pointer"
        >
          <ArrowUp />
        </button>
      </form>
    </div>
  );
};
