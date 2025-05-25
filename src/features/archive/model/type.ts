import { ContentProperty, MultiSelectProperty, TextProperty, TimeProperty } from '@/shared/types/notion';

export interface IPageMetadata {
  createdBy: TimeProperty;
  description: TextProperty;
  title: TextProperty;
  tags: MultiSelectProperty;
  modifiedBy: TimeProperty;
}

export interface IPageContent {
  object: string;
  results: ContentProperty[];
}
