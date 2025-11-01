import { Metadata } from 'next';
import { ChatView } from '@/widgets/chat';

export const metadata: Metadata = {
  title: '챗봇',
  description:
    '프론트엔드 개발자 김현빈 포트폴리오에 대한 질문에 답해주는 챗봇 페이지입니다.',
};

const page = () => {
  return <ChatView />;
};
export default page;
