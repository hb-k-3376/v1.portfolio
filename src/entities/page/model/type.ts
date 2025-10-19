import { ITag } from '@/shared/types';

export interface Page {
  id: string;
  created_time: string;
  tags: ITag[];
  title: string;
  description: string;
  slug: string;
}

// 페이지 옵션 파라미터
export type GetPagesOptions = {
  pageSize?: number;
  cursor?: string | null;
  searchQuery?: string | null;
};
