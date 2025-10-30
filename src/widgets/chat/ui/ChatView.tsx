'use client';

import { useChat } from '@ai-sdk/react';
import { ChatInput, ChatList } from '@/features/chat';

export const ChatView = () => {
  const { messages, sendMessage, status } = useChat();

  return (
    <div className="flex flex-col pt-24 lg:w-[52%] lg:pb-24">
      <ChatList messages={messages} status={status} />
      <ChatInput onSendMessage={sendMessage} status={status} />
    </div>
  );
};
