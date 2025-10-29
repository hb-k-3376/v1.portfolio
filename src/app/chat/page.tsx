import { Metadata } from 'next';
import { ChatView } from '@/widgets/chat';

export const metadata: Metadata = {
  title: 'Chat Bot',
  description: '저를 대신해 질문에 답하는 챗봇입니다.',
};

const page = () => {
  return <ChatView />;
};
export default page;
