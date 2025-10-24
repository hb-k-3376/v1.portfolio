import { APIResponse, NotionPagesResponse } from '@/shared/types';

/**
 * get pages
 * notion 데이터베이스 에서 pages list 가져오는 서비스 함수
 */
export const fetchPagesClient = async ({
  pageSize = '15',
  query,
  cursor,
}: {
  pageSize?: string;
  query: string | null;
  cursor?: string | null;
}) => {
  const params = new URLSearchParams({ pageSize });

  // query 유효한 값일 때만 파라미터에 추가
  query && params.append('query', query);
  cursor && params.append('cursor', cursor);

  const response = await fetch(`/api/notion?${params.toString()}`);
  const { body } = (await response.json()) as APIResponse<NotionPagesResponse>;

  console.log('body', body);
  return {
    pages: body.pages,
    next_cursor: body.next_cursor,
    has_more: body.has_more,
  };
};
