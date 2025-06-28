import axios from 'axios';

const isServer = typeof window === 'undefined';

// 서버 사이드에서 baseURL 생성
const getServerBaseURL = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // 로컬 개발 환경
  return 'http://localhost:3000';
};

const baseURL = isServer ? getServerBaseURL() : '/api';

/**
 * 지금은 노션 데이터베이스만 사용하기 떄문에, 따로 토큰등이 필요 없음
 */
export const api = axios.create({
  baseURL,
  timeout: 100000,
});
