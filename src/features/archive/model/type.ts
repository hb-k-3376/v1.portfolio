import { MultiSelectProperty, TextProperty, TimeProperty } from '@/shared/types/notion';
import { PageObjectResponse } from '@notionhq/client';

export type NotionProperties = PageObjectResponse['properties'];

export interface IArchivePage {
  createdBy: TimeProperty;
  description: TextProperty;
  title: TextProperty;
  tags: MultiSelectProperty;
  modifiedBy: TimeProperty;
}
