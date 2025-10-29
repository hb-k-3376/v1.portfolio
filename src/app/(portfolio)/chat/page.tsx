import { ChatView } from '@/widgets/chat';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat-bot',
  description: '저를 대신해 질문에 답하는 챗봇입니다.',
};

const page = () => {
  return <ChatView />;
};
export default page;
