import { ProjectType } from './type';

export const PROJECT_LIST: ProjectType[] = [
  {
    name: 'Seediary 감정일기 플랫폼',
    period: '07.22 - 08.06',
    description:
      '사용자 일기 데이터를 기반으로 AI 감정 분석과 멘탈 케어 챗봇등이 추가된 확장형 감정일기 플랫폼입니다. 로그인/회원가입, 멘탈 케어 챗봇, AI 감정 분석 기능을 담당했으며, useForm, localStorage 등 공통 훅과 로그인 상태 관리, 실시간 알림을 구현했습니다. 프로그래머스 데브코스 2차 프로젝트 우수작으로 선정되었습니다.',
    tags: [
      'React',
      'Supabase',
      'Gemini API',
      'React-router-dom',
      '프로그래머스 데브코스',
    ],
    image: '/images/projects/seediary.png',
    link: 'https://seediary.vercel.app/about',
  },
];
