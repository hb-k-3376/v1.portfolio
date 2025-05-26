import { getCreatedDate, getDescription, getTags, getTitle } from '@/shared/utils';
import { IPage } from './types';

/**
 * @param properties  노션에서 받아온 raw 데이터를 formatting 하는 함수
 * @returns odj { title , description, tags, createdBy }
 */
export const formatPageData = (rawData: any): IPage => {
  const title = getTitle(rawData.title);
  const description = getDescription(rawData.description);
  const tags = getTags(rawData.tags);
  const created_time = getCreatedDate(rawData.created_time);

  return {
    id: rawData.id,
    title,
    description,
    tags,
    created_time,
  };
};
