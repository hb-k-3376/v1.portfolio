import { APIResponse } from '@/shared/types/api';
import axios from 'axios';
import { IArchivePage } from './model/type';
import { getCreatedDate, getDescription, getModifiedDate, getTags, getTitle } from '@/shared/utils';
import { PageObjectResponse } from '@notionhq/client';

/**
 * get page metadata by id (service)
 * notion 데이터베이스 에서 id로 page metadata 가져오는 서비스 함수
 */
export const getPageMetadataById = async (slug: string) => {
  const { data } = await axios.get<APIResponse<IArchivePage>>(`http://localhost:3000/api/notion/metadata/${slug}`);

  const title = getTitle(data.body.title);
  const createdBy = getCreatedDate(data.body.createdBy);
  const tags = getTags(data.body.tags);
  const modifiedBy = getModifiedDate(data.body.modifiedBy);
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
 * get pages
 * notion 데이터베이스 에서 pages list 가져오는 서비스 함수
 */
export const getPages = async () => {
  const res = await axios.get<APIResponse<PageObjectResponse[]>>('http://localhost:3000/api/notion');
  return res.data.body;
};
