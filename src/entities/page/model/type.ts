import { ITag } from '@/shared/types';

export interface Page {
  id: string;
  created_time: string;
  tags: ITag[];
  title: string;
  description: string;
  slug: string;
}
