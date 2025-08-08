import { getPages } from '@/features/archive';
import { useQuery } from '@tanstack/react-query';

interface IUsePagesQueryProps {
  pageSize?: string;
  cursor?: string | undefined;
  query: string | null;
}
/**
 * @description  페이지 목록을 서버에서 가져오고, 로딩 상태와 함께 반환하는 커스텀 훅
 * @param {object} initialData 초기 데이터 SSR이나 캐시된 데이터 사용 시
 * @param {number} object.pageSize 처음 보여줄 row 수
 * @param {string} object.cursor 초기값은 undefined, 다음 페이지의 시작 위치 저장 데이터
 * @returns
 */
export const usePagesQuery = ({
  pageSize = '10',
  cursor = undefined,
  query,
}: IUsePagesQueryProps) => {
  const getPagesQuery = useQuery({
    queryKey: ['pages', { pageSize, cursor, query }], // pageSize와 cursor로 캐시 키
    queryFn: () => getPages({ pageSize, cursor, query }),
    refetchOnWindowFocus: true, // default
  });

  return {
    pages: getPagesQuery.data?.pages ?? [],
    cursor: getPagesQuery.data?.cursor ?? undefined,
    isLoading: getPagesQuery.isPending,
  };
};
