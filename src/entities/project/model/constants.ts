import { FileText, Github, Globe, LucideIcon } from 'lucide-react';
import { Project, UrlType } from './type';

export const PROJECT_LIST: Project[] = [
  {
    name: 'ZOOPZOOP 자료 공유 협업 플랫폼',
    period: '09.11 - 10.20',
    description:
      '웹에서 찾은 콘텐츠를 손쉽게 저장하고 팀과 함께 시각적으로 아이디어를 확장할 수 있는 지식 협업 플랫폼입니다. \n프로그래머스 데브코스 4차 프로젝트 🥇최우수작으로 선정',
    roles: [
      '확장 프로그램 설계 및 구현',
      '스페이스 관리 및 팀원 관리',
      '로그인, 회원가입, 토큰 컨트롤 및 Auth 기능',
      'API(server, client) 통신 흐름 설계 및 공통 에러 설계',
      'Next, tanstack-query 캐시 전략 설계',
    ],
    tags: ['Next.js', 'Tanstack Query', 'Zustand', 'Chrome-extension'],
    image: '/images/projects/ZOOPZOOP.webp',
    link: 'https://www.zoopzoop.kro.kr',
    urls: [
      {
        type: 'github',
        link: 'https://github.com/hb-k-3376/WEB5_6_ZOOPZOOP_FE',
      },
      {
        type: 'retro',
        link: 'https://v1-portfolio-nine.vercel.app/archive/last-project-ZOOPZOOP',
      },
    ],
  },
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
    tags: ['React', 'Tanstack Virtual', 'Zustand', 'Tailwind CSS'],
    image: '/images/projects/anonimo.webp',
    link: 'https://anonimo-virid.vercel.app',
    urls: [
      {
        type: 'github',
        link: 'https://github.com/hb-k-3376/anonimo',
      },
      {
        type: 'retro',
        link: 'https://v1-portfolio-nine.vercel.app/archive/3rd-project-anonimo',
      },
    ],
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
    tags: ['React', 'Vite', 'Supabase', 'Gemini API'],
    image: '/images/projects/seediary.webp',
    link: 'https://seediary.vercel.app/about',
    urls: [
      {
        type: 'github',
        link: 'https://github.com/hb-k-3376/FES-5-Project2-TEAM-5',
      },
      {
        type: 'retro',
        link: 'https://v1-portfolio-nine.vercel.app/archive/2nd-project-seediary',
      },
    ],
  },
  {
    name: 'connectdid 해외 패션 플랫폼',
    period: '2024.07 - 2025.01',
    description:
      '패션 업계의 창작자들(사진작가, 디자이너, 스타일리스트, 아티스트)을 연결하고, 그들의 진정성 있는 창작 스토리와 창의성을 공유하는 플랫폼입니다',
    tags: ['Next.js', 'Jotai', 'Styled-components', 'AWS'],
    image: '/images/projects/connectdid.webp',
    link: 'https://connectdid.com/home',
  },
];

export const URL_TYPE_ICONS: Record<UrlType, LucideIcon> = {
  github: Github,
  website: Globe,
  retro: FileText,
};

export const URL_TYPE_LABELS = {
  github: 'GitHub 저장소',
  website: '데모 사이트',
  retro: '회고록',
} as const;
