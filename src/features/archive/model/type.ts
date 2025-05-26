import { ContentProperty, MultiSelectProperty, TextProperty, TimeProperty } from '@/shared/types/notion';

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
