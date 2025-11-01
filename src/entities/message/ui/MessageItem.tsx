import { memo } from 'react';
import { UIMessage } from 'ai';

import { tw } from '@/shared/lib';
import { Avatar, AvatarImage } from '@/shared/shadcn/avatar';
import { TypingIndicator } from '@/shared/ui/skeleton/TypingIndicator';

interface Props {
  message: UIMessage;
  isLoading: boolean;
}

export const MessageItem = memo(({ message, isLoading }: Props) => {
  const isUser = message.role === 'user';
  const profile = isUser ? 'you.webp' : 'hyunbin.webp';
  const alignment = isUser ? 'justify-end' : 'justify-start';
  const padding = isUser ? 'ml-10' : 'mr-10';

  const showTyping = !isUser && isLoading;

  return (
    <li className={tw('flex items-center gap-3 mb-2', alignment)}>
      {!isUser && (
        <Avatar className="self-start mt-2">
          <AvatarImage src={`/images/${profile}`} alt="AI profile" />
        </Avatar>
      )}

      {showTyping ? (
        <TypingIndicator className="px-3 py-2 h-10.5 rounded-xl my-auto bg-black/70" />
      ) : (
        message.parts
          .filter((part) => part.type === 'text')
          .map((p, i) => (
            <span
              key={i}
              className={tw(
                'my-auto bg-black/70 px-3 py-2 rounded-xl text-accent-foreground',
                padding
              )}
            >
              {p.text}
            </span>
          ))
      )}
      {isUser && (
        <Avatar className="self-start mt-2">
          <AvatarImage src={`/images/${profile}`} alt="User profile" />
        </Avatar>
      )}
    </li>
  );
});

MessageItem.displayName = 'MessageItem';
