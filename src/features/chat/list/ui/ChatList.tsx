import { ChatStatus, UIMessage } from 'ai';
import { MessageItem } from '@/entities/message';

interface Props {
  messages: UIMessage[];
  status: ChatStatus;
}

export const ChatList = ({ messages, status }: Props) => {
  const isGenerating = status === 'submitted';

  const displayMessages: UIMessage[] = isGenerating
    ? [
        ...messages,
        { id: 'loading', role: 'assistant', parts: [{ type: 'text', text: '' }] },
      ]
    : messages;

  return (
    <ul className="py-20">
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
