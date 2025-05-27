import { ContentProperty, MultiSelectProperty, TextProperty, TimeProperty } from '@/shared/types/notion';
import { PageObjectResponse } from '@notionhq/client';

export interface IPageMetadata {
  created_time: TimeProperty;
  description: TextProperty;
  title: TextProperty;
  tags: MultiSelectProperty;
  modified_time: TimeProperty;
}

export interface IPageContent {
  object: string;
  results: ContentProperty[];
}

export interface IPagesResponse {
  pages: PageObjectResponse[];
  cursor: string | undefined;
}
