'use client';

import { useChat } from '@ai-sdk/react';
import { HeroSection } from './HeroSection';
import { MessageList } from '@/entities/message';
import { ChatForm } from './ChatForm';

export const ChatSection = () => {
  const { messages, sendMessage, status } = useChat({
    onFinish: ({ message, messages, isError, isDisconnect, isAbort }) => {
      console.log('[onFinish]', {
        messages,
        isError,
        isDisconnect,
        isAbort,
        messageLength: message.parts.length,
      });
    },
    onError: (error) => {
      console.log('[onError]', {
        message: error instanceof Error ? error.message : JSON.stringify(error),
      });
    },
  });

  const isEmpty = messages.length === 0;

  return (
    <>
      {isEmpty ? (
        <HeroSection onSendMessage={sendMessage} />
      ) : (
        <MessageList messages={messages} status={status} />
      )}
      <ChatForm onSendMessage={sendMessage} status={status} />
    </>
  );
};
