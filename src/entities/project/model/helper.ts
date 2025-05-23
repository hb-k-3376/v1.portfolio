import { IPage } from './types';
import { ITag } from '@/shared/types';

/**
 * @param properties  노션에서 받아온 raw 데이터를 formatting 하는 함수
 * @returns odj { title , description, tags, createdBy }
 */
export const formatPageData = (rawData: any): IPage => {
  console.log('rawData', rawData);

  const title = getTitle(rawData.title);
  const description = getDescription(rawData.description);
  const tags = getTags(rawData.tags);
  const createdBy = getCreatedDate(rawData.createdBy);

  return {
    title,
    description,
    tags,
    createdBy,
  };
};

/**
 * @param title  rawData에 title
 * @returns  가공된 title
 */
const getTitle = (title: any): string => {
  return title.title[0].plain_text;
};

/**
 * @param desc rawData에 desc
 * @returns  가공된 desc
 */
const getDescription = (desc: any): string => {
  return desc.rich_text[0].plain_text;
};
/**
 * @param tags rawData에 tags
 * @returns  가공된 tags
 */
const getTags = (tags: any): ITag[] => {
  return tags.multi_select;
};

/**
 * @param createdDate rawData에 createdDate
 * @returns  가공된 createdDate
 */
const getCreatedDate = (createdDate: any): string => {
  const dateString = createdDate.created_time;
  return new Date(dateString).toLocaleDateString('en-CA');
};
