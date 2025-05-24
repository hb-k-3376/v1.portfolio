import { ITag } from '@/shared/types';

/**
 * @param title  rawData에 title
 * @returns  가공된 title
 */
export const getTitle = (title: any): string => {
  return title.title[0].plain_text;
};

/**
 * @param desc rawData에 desc
 * @returns  가공된 desc
 */
export const getDescription = (desc: any): string => {
  return desc.rich_text[0].plain_text;
};
/**
 * @param tags rawData에 tags
 * @returns  가공된 tags
 */
export const getTags = (tags: any): ITag[] => {
  return tags.multi_select;
};

/**
 * @param createdDate rawData에 createdDate
 * @returns  가공된 createdDate
 */
export const getCreatedDate = (createdDate: any): string => {
  const dateString = createdDate.created_time;
  return new Date(dateString).toLocaleDateString('en-CA');
};
/**
 * @param modifiedDate rawData에 modifiedDate
 * @returns 가공된 modifiedDate
 */
export const getModifiedDate = (modifiedDate: any): string => {
  const dateString = modifiedDate.last_edited_time;
  return new Date(dateString).toLocaleDateString('en-CA');
};
