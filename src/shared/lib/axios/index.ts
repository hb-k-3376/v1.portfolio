import axios from 'axios';

const isServer = typeof window === 'undefined';

const baseURL = isServer ? 'http://localhost:3000/api' : '/api';

/**
 * 지금은 노션 데이터베이스만 사용하기 떄문에, 따로 토큰등이 필요 없음
 */
export const api = axios.create({
  baseURL,
  timeout: 100000,
});
