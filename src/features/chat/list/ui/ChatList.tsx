import { Avatar, AvatarImage } from '@/shared/shadcn/avatar';
import { UIMessage } from 'ai';

interface Props {
  messages: UIMessage[];
}

export const ChatList = ({ messages }: Props) => {
  return (
    <ul className="">
      {messages.map((message) => {
        const profile = message.role === 'user' ? 'you.webp' : 'hyunbin.webp';

        return (
          <div className="flex gap-2" key={message.id}>
            <Avatar>
              <AvatarImage src={`/images/${profile}`} alt="profile" />
            </Avatar>
            {message.parts.map((part, index) => {
              switch (part.type) {
                case 'text':
                  return <pre key={`${message.id}-${index}`}>{part.text}</pre>;
                default:
                  return null;
              }
            })}
          </div>
        );
      })}
      <li>테스트 합니다</li>
    </ul>
  );
};
