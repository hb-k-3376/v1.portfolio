'use client';

import { useChat } from '@ai-sdk/react';
import { ChatInput, ChatList } from '@/features/chat';

export const ChatView = () => {
  const { messages, sendMessage, status } = useChat();

  return (
    <div className="relative flex mx-auto flex-col h-screen max-w-2xl px-5 lg:px-0">
      <div className="flex-1 overflow-auto">
        <ChatList messages={messages} status={status} />
      </div>
      <ChatInput onSendMessage={sendMessage} status={status} />
    </div>
  );
};
