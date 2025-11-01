import { ChatSection } from '@/features/chat';

export const ChatView = () => {
  return (
    <div className="flex flex-col lg:pt-24 lg:w-[52%] lg:pb-24 h-[calc(100vh-128px)] lg:h-screen">
      <ChatSection />
    </div>
  );
};
