import {
  MultiSelectProperty,
  ParagraphProperty,
  TextProperty,
  TimeProperty,
} from '@/shared/types/notion';

/**
 * @param title  rawData에 title
 * @returns  가공된 title
 */
export const getTitle = (title: TextProperty) => {
  if (!title.title) return '';
  return title.title[0]?.plain_text;
};

/**
 * @param desc rawData에 desc
 * @returns  가공된 desc
 */
export const getDescription = (desc: TextProperty) => {
  if (!desc.rich_text) return '';
  return desc.rich_text[0]?.plain_text;
};
/**
 * @param tags rawData에 tags
 * @returns  가공된 tags
 */
export const getTags = (tags: MultiSelectProperty) => {
  if (!tags.multi_select) return [];
  return tags.multi_select;
};

/**
 * @param createdDate rawData에 createdDate
 * @returns  가공된 createdDate
 */
export const getCreatedDate = (createdDate: TimeProperty): string => {
  if (!createdDate.created_time) return '';
  const dateString = createdDate.created_time;
  return new Date(dateString).toLocaleDateString('en-CA');
};
/**
 * @param modifiedDate rawData에 modifiedDate
 * @returns 가공된 modifiedDate
 */
export const getModifiedDate = (modifiedDate: TimeProperty): string => {
  if (!modifiedDate.last_edited_time) return '';
  const dateString = modifiedDate.last_edited_time;
  return new Date(dateString).toLocaleDateString('en-CA');
};
/**
 * @param contents 본문
 */
export const getContents = (contents: ParagraphProperty) => {
  contents.rich_text[0].annotations.bold;
};

/**
 * @param slug rawData에 slug 추출
 * @returns 추출된 slug
 */
export const getSlug = (slug: TextProperty): string => {
  if (!slug.rich_text) return '';
  return slug.rich_text[0]?.plain_text;
};
