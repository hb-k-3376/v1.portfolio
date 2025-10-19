/**
 * 환경변수 체크 함수
 */
export const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`환경변수 ${key}가 설정되지 않았습니다.`);
  }
  return value;
};
