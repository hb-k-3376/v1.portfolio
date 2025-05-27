import { ITag, MultiSelectProperty, TextProperty, TimeProperty } from '@/shared/types';

export interface IPage {
  id: string;
  created_time: string;
  tags: ITag[];
  title: string;
  description: string;
}
/**
 * Formatted page data
 */
export interface IFormattedPageData {
  title: TextProperty;
  description: TextProperty;
  tags: MultiSelectProperty;
  created_time: TimeProperty;
  modified_time: TimeProperty;
  id: string;
}
