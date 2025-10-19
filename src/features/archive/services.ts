import { APIResponse } from '@/shared/types/api';
import {
  getCreatedDate,
  getDescription,
  getModifiedDate,
  getTags,
  getTitle,
} from '@/shared/utils';
import { api } from '@/shared/lib';
import {
  NotionPageContent,
  NotionPageProperties,
  NotionPagesResponse,
} from '@/shared/types';

/**
 * get page content by id (service)
 * notion 데이터베이스 에서 id로 page content 가져오는 서비스 함수
 */
export const getPageContentById = async (slug: string) => {
  const res = await api.get<APIResponse<NotionPageContent>>(`/${slug}/content`);
  return res.data.body.results;
};

/**
 * get pages
 * notion 데이터베이스 에서 pages list 가져오는 서비스 함수
 */
export const getPages = async ({
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
  if (query) {
    params.append('query', query);
  }
  if (cursor) {
    params.append('cursor', cursor);
  }

  const res = await api.get<APIResponse<NotionPagesResponse>>(`/notion?${params}`);

  return {
    pages: res.data.body.pages,
    next_cursor: res.data.body.next_cursor,
    has_more: res.data.body.has_more,
  };
};
