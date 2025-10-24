import { Badge } from '@/shared/types';
import { PageObjectResponse } from '@notionhq/client';

export interface Page {
  id: string;
  created_time: string;
  tags: Badge[];
  title: string;
  description: string;
  slug: string;
}

// 페이지 옵션 파라미터
export type GetPagesOptions = {
  pageSize?: number;
  cursor?: string | null;
  query?: string | null;
};

export type PagesApiResponse = {
  pages: PageObjectResponse[];
  next_cursor: string | null;
  has_more: boolean;
};

export type PagesQueryKey = ['pages', string | null];
export type PageCursor = string | null | undefined;
