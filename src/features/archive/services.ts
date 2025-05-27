import { APIResponse } from '@/shared/types/api';
import { IPageContent, IPageMetadata, IPagesResponse } from './model/type';
import { getCreatedDate, getDescription, getModifiedDate, getTags, getTitle } from '@/shared/utils';
import { api } from '@/shared/lib';

/**
 * get page metadata by id (service)
 * notion 데이터베이스 에서 id로 page metadata 가져오는 서비스 함수
 */
export const getPageMetadataById = async (slug: string) => {
  const { data } = await api.get<APIResponse<IPageMetadata>>(`/notion/metadata/${slug}`);

  const title = getTitle(data.body.title);
  const createdBy = getCreatedDate(data.body.created_time);
  const tags = getTags(data.body.tags);
  const modifiedBy = getModifiedDate(data.body.modified_time);
  const description = getDescription(data.body.description);

  return {
    title,
    createdBy,
    tags,
    modifiedBy,
    description,
  };
};

/**
 * get page content by id (service)
 * notion 데이터베이스 에서 id로 page content 가져오는 서비스 함수
 */
export const getPageContentById = async (slug: string) => {
  const res = await api.get<APIResponse<IPageContent>>(`/notion/content/${slug}`);
  return res.data.body.results;
};

/**
 * get pages
 * notion 데이터베이스 에서 pages list 가져오는 서비스 함수
 */
export const getPages = async ({ pageSize = '10', cursor = undefined }: { pageSize?: string; cursor?: string }) => {
  const params = new URLSearchParams({ pageSize });

  // cursor가 유효한 값일 때만 파라미터에 추가
  if (cursor) {
    params.append('cursor', cursor);
  }
  const res = await api.get<APIResponse<IPagesResponse>>(`/notion?${params}`);

  return {
    pages: res.data.body.pages,
    cursor: res.data.body.cursor,
  };
};
