import { ChatStatus, UIMessage } from 'ai';
import { MessageItem } from '@/entities/message';
import { useEffect, useRef } from 'react';

interface Props {
  messages: UIMessage[];
  status: ChatStatus;
}

export const MessageList = ({ messages, status }: Props) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const isGenerating = status === 'submitted';

  const displayMessages: UIMessage[] = isGenerating
    ? [
        ...messages,
        { id: 'loading', role: 'assistant', parts: [{ type: 'text', text: '' }] },
      ]
    : messages;

  // 스크롤 제어
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [isGenerating, messages]);

  return (
    <ul className="h-full pb-10 overflow-y-scroll" ref={scrollRef}>
      {displayMessages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          isLoading={isGenerating && message.id === 'loading'}
        />
      ))}
    </ul>
  );
};
