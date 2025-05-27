import { getCreatedDate, getDescription, getTags, getTitle } from '@/shared/utils';
import { IFormattedPageData, IPage } from './types';

/**
 * @param properties  노션에서 받아온 raw 데이터를 formatting 하는 함수
 * @returns odj { title , description, tags, createdBy }
 */
export const formatPageData = ({ created_time, description, tags, title, id }: IFormattedPageData): IPage => {
  const formattedTitle = getTitle(title);
  const formattedDescription = getDescription(description);
  const formattedTags = getTags(tags);
  const formattedCreatedTime = getCreatedDate(created_time);

  return {
    id,
    title: formattedTitle,
    description: formattedDescription,
    tags: formattedTags,
    created_time: formattedCreatedTime,
  };
};
