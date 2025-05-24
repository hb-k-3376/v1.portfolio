import { ITag } from '@/shared/types';
import { PageObjectResponse } from '@notionhq/client';

export type NotionProperties = PageObjectResponse['properties'];

export interface IArchivePage {
  createdBy: string;
  description: string;
  title: string;
  tags: ITag[];
  modifiedBy: string;
}
