import {
  getCreatedDate,
  getDescription,
  getModifiedDate,
  getSlug,
  getTags,
  getTitle,
} from '@/shared/utils';
import { Page } from './type';
import { NotionPageProperties } from '@/shared/types';

/**
 * @param properties  노션에서 받아온 raw 데이터를 formatting 하는 함수
 * @returns odj { title , description, tags, createdBy }
 */
export const formatPageData = ({
  created_time,
  description,
  tags,
  title,
  id,
  slug,
}: NotionPageProperties): Page => {
  const formattedTitle = getTitle(title);
  const formattedDescription = getDescription(description);
  const formattedTags = getTags(tags);
  const formattedCreatedTime = getCreatedDate(created_time);
  const formattedSlug = getSlug(slug);

  return {
    id,
    title: formattedTitle,
    description: formattedDescription,
    tags: formattedTags,
    created_time: formattedCreatedTime,
    slug: formattedSlug,
  };
};

export const formatMetaData = ({
  created_time,
  description,
  tags,
  title,
  modified_time,
  id,
}: Omit<NotionPageProperties, 'slug'>) => {
  const formattedTitle = getTitle(title);
  const formattedDescription = getDescription(description);
  const formattedTags = getTags(tags);
  const formattedCreatedTime = getCreatedDate(created_time);
  const formattedModifiedTime = getModifiedDate(modified_time);

  return {
    id,
    title: formattedTitle,
    description: formattedDescription,
    tags: formattedTags,
    createdBy: formattedCreatedTime,
    modifiedBy: formattedModifiedTime,
  };
};
