'use client';

import { useChat } from '@ai-sdk/react';
import { HeroSection } from './HeroSection';
import { MessageList } from '@/entities/message';
import { ChatForm } from './ChatForm';

export const ChatSection = () => {
  const { messages, sendMessage, status } = useChat();

  const isEmpty = messages.length === 0;

  return (
    <>
      {isEmpty ? <HeroSection /> : <MessageList messages={messages} status={status} />}
      <ChatForm onSendMessage={sendMessage} status={status} />
    </>
  );
};
