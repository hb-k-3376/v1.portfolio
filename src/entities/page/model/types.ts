import { ITag } from '@/shared/types';

export interface IPage {
  id: string;
  createdBy: string;
  tags: ITag[];
  title: string;
  description: string;
}
