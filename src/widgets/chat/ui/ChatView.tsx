'use client';

import { useChat } from '@ai-sdk/react';
import { ChatInput, ChatList } from '@/features/chat';

export const ChatView = () => {
  const { messages, sendMessage } = useChat();

  return (
    <div className="flex mx-auto flex-col h-screen max-w-2xl">
      <div className="flex-1 overflow-auto ">
        <ChatList messages={messages} />
      </div>
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};
