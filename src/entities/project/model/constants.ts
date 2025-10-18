import { Project } from './type';

export const PROJECT_LIST: Project[] = [
  {
    name: 'Anonimo 익명 소통 서비스',
    period: '08.18 - 09.08',
    description:
      '단순한 텍스트를 넘어 그림, 이모지, 이미지로 진짜 마음을 전하는 새로운 확장형 익명 소통 플랫폼입니다. \n프로그래머스 데브코스 3차 프로젝트 🥇최우수작으로 선정',
    roles: [
      '피드 실시간 업데이트 및 최적화 (가상화)',
      '이모지 실시간 업데이트 및 낙관적 업데이트',
      '이스터에그 설계 및 구현',
      '공통 모달 레이아웃, 공통 Input 컴포넌트',
      '전반적인 프로젝트 리드 및 셋업',
    ],
    tags: [
      'React',
      'vite',
      'tanstack/react-query',
      'React-router-dom',
      'Zustand',
      'Tailwind CSS',
    ],
    image: '/images/projects/anonimo.png',
    link: 'https://v1-portfolio-nine.vercel.app/archive/3rd-project-anonimo',
  },
  {
    name: 'Seediary 감정일기 플랫폼',
    period: '07.22 - 08.06',
    description:
      '사용자 일기 데이터를 기반으로 AI 감정 분석과 멘탈 케어 챗봇등이 추가된 확장형 감정일기 플랫폼입니다. \n프로그래머스 데브코스 2차 프로젝트 🥇최우수작으로 선정',
    roles: [
      '로그인/회원가입 기능 및 Auth 상태 관리',
      'Gemini API를 활용한 멘탈 케어 챗봇 및 AI 감정 분석',
      '실시간 알림',
      'useForm, localStorage, useAuth 등 공통 훅',
    ],
    tags: ['React', 'vite', 'Supabase', 'Gemini API', 'React-router-dom', 'Tailwind CSS'],
    image: '/images/projects/seediary.png',
    link: 'https://v1-portfolio-nine.vercel.app/archive/2nd-project-seediary',
  },
];
